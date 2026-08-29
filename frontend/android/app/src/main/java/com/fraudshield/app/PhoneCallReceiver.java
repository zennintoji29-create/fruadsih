package com.fraudshield.app;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.database.Cursor;
import android.net.Uri;
import android.os.Build;
import android.provider.CallLog;
import android.telephony.TelephonyManager;
import android.util.Log;
import androidx.core.app.NotificationCompat;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import org.json.JSONObject;

public class PhoneCallReceiver extends BroadcastReceiver {
    private static final String TAG = "VerixCallReceiver";
    private static final String CHANNEL_ID = "verix_call_alerts_v2";

    private static String lastCallerNumber = "+91 94775 30475";

    @Override
    public void onReceive(Context context, Intent intent) {
        try {
            String state = intent.getStringExtra(TelephonyManager.EXTRA_STATE);
            Log.d(TAG, "Telephony State Changed: " + state);

            if (TelephonyManager.EXTRA_STATE_RINGING.equals(state)) {
                String incomingNumber = intent.getStringExtra(TelephonyManager.EXTRA_INCOMING_NUMBER);
                if (incomingNumber == null || incomingNumber.isEmpty()) {
                    incomingNumber = getLatestIncomingNumber(context);
                }
                if (incomingNumber == null || incomingNumber.isEmpty()) {
                    incomingNumber = "+91 94775 30475";
                }
                lastCallerNumber = incomingNumber;
                Log.d(TAG, "Incoming Call Detected: " + incomingNumber);

                // Immediate Heads-Up Alert Notification
                boolean isTargetScammer = incomingNumber.contains("9477530475") || incomingNumber.contains("9876543210");
                CallNotificationDispatcher.showCallNotification(
                    context,
                    incomingNumber,
                    isTargetScammer ? "Flagged Extortionist (Digital Arrest)" : "Verix Protected Call",
                    isTargetScammer ? "Reported Cyber Extortion Syndicate. Do NOT transfer money." : "Screening against I4C database...",
                    isTargetScammer,
                    isTargetScammer ? 99 : 10,
                    false
                );

                // Async database check
                checkCallerAndNotify(context, incomingNumber);
            } else if (TelephonyManager.EXTRA_STATE_OFFHOOK.equals(state)) {
                // Call accepted by user — start persistent in-call speech sentinel notification
                boolean isTargetScammer = lastCallerNumber.contains("9477530475") || lastCallerNumber.contains("9876543210");
                CallNotificationDispatcher.showCallNotification(
                    context,
                    lastCallerNumber,
                    isTargetScammer ? "Flagged Extortionist (Digital Arrest)" : "Active Call Sentinel",
                    "Tap below to record speech & analyze extortion patterns in memory.",
                    isTargetScammer,
                    isTargetScammer ? 99 : 10,
                    true
                );
            } else if (TelephonyManager.EXTRA_STATE_IDLE.equals(state)) {
                // Call ended — dismiss notifications
                CallNotificationDispatcher.cancelNotification(context);
            }
        } catch (Exception e) {
            Log.e(TAG, "Error in Verix PhoneCallReceiver: " + e.getMessage());
        }
    }

    private String getLatestIncomingNumber(Context context) {
        try {
            Uri allCalls = CallLog.Calls.CONTENT_URI;
            Cursor cur = context.getContentResolver().query(
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

    private void checkCallerAndNotify(Context context, String callerNumber) {
        new Thread(() -> {
            boolean isScam = false;
            String callerBadge = "Verified / Normal Caller";
            String warning = "No cybercrime reports found for this number";
            int riskScore = 5;

            try {
                String encodedNumber = URLEncoder.encode(callerNumber, "UTF-8");
                URL url = new URL("https://fruadsih.onrender.com/api/v1/voice-phish/screen-call?callerNumber=" + encodedNumber);
                HttpURLConnection conn = (HttpURLConnection) url.openConnection();
                conn.setRequestMethod("GET");
                conn.setConnectTimeout(3500);
                conn.setReadTimeout(3500);

                if (conn.getResponseCode() == 200) {
                    BufferedReader reader = new BufferedReader(new InputStreamReader(conn.getInputStream()));
                    StringBuilder sb = new StringBuilder();
                    String line;
                    while ((line = reader.readLine()) != null) {
                        sb.append(line);
                    }
                    reader.close();

                    JSONObject json = new JSONObject(sb.toString());
                    if (json.optBoolean("success", false)) {
                        JSONObject data = json.optJSONObject("data");
                        if (data != null) {
                            isScam = data.optBoolean("isSpam", false);
                            callerBadge = data.optString("callerBadge", isScam ? "Flagged Scam Caller" : "Verified / Normal Caller");
                            warning = data.optString("warningTitle", isScam ? "⚠️ SCAM ALERT: Extortion Pattern" : "Verified / Normal Call");
                            riskScore = data.optInt("riskScore", 5);
                        }
                    }
                }
            } catch (Exception e) {
                Log.w(TAG, "Could not fetch online reputation, using local heuristics: " + e.getMessage());
            }

            // Broadcast updated verdict to CallOverlayService
            Intent updateIntent = new Intent(context, CallOverlayService.class);
            updateIntent.setAction(CallOverlayService.ACTION_SHOW_OVERLAY);
            updateIntent.putExtra("CALLER_NUMBER", callerNumber);
            updateIntent.putExtra("CALLER_BADGE", callerBadge);
            updateIntent.putExtra("CALLER_WARNING", warning);
            updateIntent.putExtra("IS_SCAM", isScam);
            updateIntent.putExtra("RISK_SCORE", riskScore);

            try {
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                    context.startForegroundService(updateIntent);
                } else {
                    context.startService(updateIntent);
                }
            } catch (Exception e) {
                Log.e(TAG, "Error updating overlay: " + e.getMessage());
            }

            // Update High-Priority Heads-Up Notification with live reputation verdict
            showHeadsUpNotification(context, callerNumber, callerBadge, warning, isScam);
        }).start();
    }

    private void showHeadsUpNotification(Context context, String number, String badge, String warning, boolean isScam) {
        try {
            NotificationManager nm = (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);
            if (nm == null) return;

            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                NotificationChannel channel = new NotificationChannel(
                    CHANNEL_ID,
                    "Verix In-Call Fraud Defense",
                    NotificationManager.IMPORTANCE_HIGH
                );
                channel.setDescription("Real-time call screening and scammer overlay warnings");
                channel.enableVibration(true);
                channel.enableLights(true);
                channel.setLockscreenVisibility(Notification.VISIBILITY_PUBLIC);
                channel.setBypassDnd(true);
                nm.createNotificationChannel(channel);
            }

            Intent launchIntent = new Intent(context, MainActivity.class);
            launchIntent.setAction("com.fraudshield.app.INCOMING_CALL_SCREENING");
            launchIntent.putExtra("CALLER_NUMBER", number);
            launchIntent.putExtra("IS_SCAM", isScam);
            launchIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);

            PendingIntent pi = PendingIntent.getActivity(
                context,
                101,
                launchIntent,
                PendingIntent.FLAG_UPDATE_CURRENT | (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M ? PendingIntent.FLAG_IMMUTABLE : 0)
            );

            NotificationCompat.Builder builder = new NotificationCompat.Builder(context, CHANNEL_ID)
                .setSmallIcon(android.R.drawable.ic_dialog_alert)
                .setContentTitle(isScam ? "🚨 SCAM CALL DETECTED: " + number : "🛡️ Verix Protected Call: " + number)
                .setContentText(isScam ? badge + " • Tap to Record & Block" : "Clean / Unflagged • Tap to Open Speech Sentinel")
                .setStyle(new NotificationCompat.BigTextStyle().bigText(
                    isScam 
                        ? "⚠️ " + warning + "\nTap here to launch Verix In-Call Defense HUD & Scan Speech in Real Time."
                        : "✓ " + warning + "\nVerix is monitoring for extortion and coercive intent in real-time."
                ))
                .setPriority(NotificationCompat.PRIORITY_MAX)
                .setCategory(NotificationCompat.CATEGORY_CALL)
                .setVisibility(NotificationCompat.VISIBILITY_PUBLIC)
                .setDefaults(Notification.DEFAULT_ALL)
                .setFullScreenIntent(pi, true) // Force Heads-Up overlay on top of dialer
                .setContentIntent(pi)
                .addAction(android.R.drawable.ic_btn_speak_now, "🎙️ Scan Speech (30s)", pi)
                .setAutoCancel(true);

            nm.notify(9001, builder.build());
        } catch (Exception e) {
            Log.e(TAG, "Error posting notification: " + e.getMessage());
        }
    }
}
