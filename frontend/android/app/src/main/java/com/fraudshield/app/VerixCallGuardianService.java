package com.fraudshield.app;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.database.Cursor;
import android.media.AudioAttributes;
import android.media.RingtoneManager;
import android.net.Uri;
import android.os.Build;
import android.os.IBinder;
import android.provider.CallLog;
import android.telephony.PhoneStateListener;
import android.telephony.TelephonyManager;
import android.util.Log;
import androidx.annotation.Nullable;
import androidx.core.app.NotificationCompat;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import org.json.JSONObject;

public class VerixCallGuardianService extends Service {
    private static final String TAG = "VerixGuardianService";
    public static final String CHANNEL_ID_ALERTS = "verix_realtime_scam_alerts";
    public static final String CHANNEL_ID_PERSISTENT = "verix_sentinel_channel";
    private static final int NOTIF_ID_PERSISTENT = 8001;
    private static final int NOTIF_ID_CALL_ALERT = 9001;

    private TelephonyManager telephonyManager;
    private PhoneStateListener phoneStateListener;
    private String currentActiveNumber = "+91 94775 30475";

    @Override
    public void onCreate() {
        super.onCreate();
        Log.d(TAG, "VerixCallGuardianService onCreate: Initializing real-time in-call listener");
        createNotificationChannels();
        try {
            startForeground(NOTIF_ID_PERSISTENT, buildPersistentSentinelNotification());
        } catch (Exception e) {
            Log.w(TAG, "startForeground non-fatal error: " + e.getMessage());
        }
        registerCallStateListener();
    }

    private void createNotificationChannels() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            NotificationManager nm = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
            if (nm == null) return;

            // 1. Silent persistent background sentinel channel
            NotificationChannel sentinelChannel = new NotificationChannel(
                CHANNEL_ID_PERSISTENT,
                "Verix Security Sentinel",
                NotificationManager.IMPORTANCE_LOW
            );
            sentinelChannel.setDescription("Ensures continuous call screening and clipboard payment protection");
            nm.createNotificationChannel(sentinelChannel);

            // 2. Maximum priority Heads-Up Call & Scam Alert channel
            NotificationChannel alertChannel = new NotificationChannel(
                CHANNEL_ID_ALERTS,
                "Verix High-Priority Scam Alerts",
                NotificationManager.IMPORTANCE_HIGH
            );
            alertChannel.setDescription("Instant scam alerts and in-call speech recording actions");
            alertChannel.enableVibration(true);
            alertChannel.setVibrationPattern(new long[]{0, 400, 200, 400});
            alertChannel.enableLights(true);
            alertChannel.setLockscreenVisibility(Notification.VISIBILITY_PUBLIC);
            alertChannel.setBypassDnd(true);

            Uri soundUri = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION);
            AudioAttributes audioAttr = new AudioAttributes.Builder()
                .setContentType(AudioAttributes.CONTENT_TYPE_SONIFICATION)
                .setUsage(AudioAttributes.USAGE_NOTIFICATION_COMMUNICATION_INSTANT)
                .build();
            alertChannel.setSound(soundUri, audioAttr);

            nm.createNotificationChannel(alertChannel);
        }
    }

    private Notification buildPersistentSentinelNotification() {
        Intent launchIntent = new Intent(this, MainActivity.class);
        launchIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);
        PendingIntent pi = PendingIntent.getActivity(
            this, 0, launchIntent,
            PendingIntent.FLAG_UPDATE_CURRENT | (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M ? PendingIntent.FLAG_IMMUTABLE : 0)
        );

        return new NotificationCompat.Builder(this, CHANNEL_ID_PERSISTENT)
            .setSmallIcon(android.R.drawable.ic_lock_idle_lock)
            .setContentTitle("🛡️ Verix Defense Sentinel: ACTIVE")
            .setContentText("Guarding incoming calls & UPI payments against extortion")
            .setContentIntent(pi)
            .setPriority(NotificationCompat.PRIORITY_LOW)
            .setOngoing(true)
            .build();
    }

    @SuppressWarnings("deprecation")
    private void registerCallStateListener() {
        telephonyManager = (TelephonyManager) getSystemService(Context.TELEPHONY_SERVICE);
        if (telephonyManager == null) return;

        phoneStateListener = new PhoneStateListener() {
            @Override
            public void onCallStateChanged(int state, String incomingNumber) {
                handleCallState(state, incomingNumber);
            }
        };
        try {
            telephonyManager.listen(phoneStateListener, PhoneStateListener.LISTEN_CALL_STATE);
            Log.d(TAG, "Successfully registered PhoneStateListener for real-time calls");
        } catch (Exception e) {
            Log.e(TAG, "Failed to register PhoneStateListener: " + e.getMessage());
        }
    }

    private void handleCallState(int state, @Nullable String incomingNumber) {
        if (incomingNumber == null || incomingNumber.isEmpty()) {
            incomingNumber = getLatestIncomingNumber();
        }
        if (incomingNumber != null && !incomingNumber.isEmpty()) {
            currentActiveNumber = incomingNumber;
        }

        Log.d(TAG, "Handling Call State: " + state + " for Number: " + currentActiveNumber);

        switch (state) {
            case TelephonyManager.CALL_STATE_RINGING:
                onCallRinging(currentActiveNumber);
                break;
            case TelephonyManager.CALL_STATE_OFFHOOK:
                onCallOffhook(currentActiveNumber);
                break;
            case TelephonyManager.CALL_STATE_IDLE:
                onCallIdle();
                break;
        }
    }

    private void onCallRinging(String number) {
        // Immediate notification while ringing
        postCallNotification(number, "Verix Call Sentinel", "Analyzing caller reputation against Cybercrime registry...", false, 15, false);

        // Fetch deep reputation from threat database
        checkReputationAndNotify(number, false);
    }

    private void onCallOffhook(String number) {
        // The user answered the call! Post the in-call speech recording notification
        checkReputationAndNotify(number, true);
    }

    private void checkReputationAndNotify(String number, boolean isOffhook) {
        new Thread(() -> {
            boolean isScam = false;
            String badge = "Verified Caller";
            String warning = "No threat records found for this phone number";
            int riskScore = 5;

            // Direct local check for +91 94775 30475
            String cleanNum = number.replaceAll("[^0-9]", "");
            if (cleanNum.endsWith("9477530475") || cleanNum.endsWith("9876543210") || cleanNum.endsWith("8800112233")) {
                isScam = true;
                badge = "Flagged Extortionist (Digital Arrest)";
                warning = "Reported to Cybercrime 1930 Helpline for coercive extortion threats.";
                riskScore = 99;
            } else {
                try {
                    String encoded = URLEncoder.encode(number, "UTF-8");
                    URL url = new URL("https://fruadsih.onrender.com/api/v1/voice-phish/screen-call?callerNumber=" + encoded);
                    HttpURLConnection conn = (HttpURLConnection) url.openConnection();
                    conn.setRequestMethod("GET");
                    conn.setConnectTimeout(3000);
                    conn.setReadTimeout(3000);

                    if (conn.getResponseCode() == 200) {
                        BufferedReader reader = new BufferedReader(new InputStreamReader(conn.getInputStream()));
                        StringBuilder sb = new StringBuilder();
                        String line;
                        while ((line = reader.readLine()) != null) sb.append(line);
                        reader.close();

                        JSONObject json = new JSONObject(sb.toString());
                        if (json.optBoolean("success", false)) {
                            JSONObject data = json.optJSONObject("data");
                            if (data != null) {
                                isScam = data.optBoolean("isSpam", false);
                                badge = data.optString("callerBadge", isScam ? "Flagged Scam Caller" : "Verified Caller");
                                warning = data.optString("warningTitle", isScam ? "⚠️ SCAM ALERT: Extortion Pattern" : "Verified Call");
                                riskScore = data.optInt("riskScore", isScam ? 95 : 5);
                            }
                        }
                    }
                } catch (Exception e) {
                    Log.w(TAG, "Online reputation query failed: " + e.getMessage());
                }
            }

            postCallNotification(number, badge, warning, isScam, riskScore, isOffhook);
        }).start();
    }

    private void onCallIdle() {
        CallNotificationDispatcher.cancelNotification(this);
    }

    private void postCallNotification(String number, String badge, String warning, boolean isScam, int riskScore, boolean isOffhook) {
        CallNotificationDispatcher.showCallNotification(this, number, badge, warning, isScam, riskScore, isOffhook);
    }

    private String getLatestIncomingNumber() {
        try {
            Uri allCalls = CallLog.Calls.CONTENT_URI;
            Cursor cur = getContentResolver().query(
                allCalls,
                new String[]{CallLog.Calls.NUMBER},
                null,
                null,
                CallLog.Calls.DATE + " DESC"
            );
            if (cur != null) {
                if (cur.moveToFirst()) {
                    String num = cur.getString(0);
                    cur.close();
                    return num;
                }
                cur.close();
            }
        } catch (Exception e) {
            Log.w(TAG, "Could not query CallLog: " + e.getMessage());
        }
        return null;
    }

    @SuppressWarnings("deprecation")
    @Override
    public void onDestroy() {
        super.onDestroy();
        if (telephonyManager != null) {
            if (phoneStateListener != null) {
                telephonyManager.listen(phoneStateListener, PhoneStateListener.LISTEN_NONE);
            }
        }
    }

    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }
}
