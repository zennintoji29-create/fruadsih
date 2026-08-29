package com.fraudshield.app;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.media.AudioAttributes;
import android.media.RingtoneManager;
import android.net.Uri;
import android.os.Build;
import android.util.Log;
import androidx.core.app.NotificationCompat;
import androidx.core.app.NotificationManagerCompat;

public class CallNotificationDispatcher {
    private static final String TAG = "VerixCallNotif";
    public static final String ALERT_CHANNEL_ID = "verix_instant_call_alerts_v4";
    public static final int NOTIF_ID = 9001;

    public static void showCallNotification(Context context, String number, String badge, String warning, boolean isScam, int riskScore, boolean isOffhook) {
        try {
            createAlertChannel(context);

            // Intent: Open MainActivity in Audio Analyzer mode
            Intent recordIntent = new Intent(context, MainActivity.class);
            recordIntent.setAction("com.fraudshield.app.RECORD_SPEECH");
            recordIntent.putExtra("CALLER_NUMBER", number);
            recordIntent.putExtra("AUTO_RECORD", true);
            recordIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_SINGLE_TOP);

            PendingIntent recordPendingIntent = PendingIntent.getActivity(
                context,
                102,
                recordIntent,
                PendingIntent.FLAG_UPDATE_CURRENT | (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M ? PendingIntent.FLAG_IMMUTABLE : 0)
            );

            // Intent: Open MainActivity default view
            Intent openIntent = new Intent(context, MainActivity.class);
            openIntent.setAction("com.fraudshield.app.OPEN_DASHBOARD");
            openIntent.putExtra("CALLER_NUMBER", number);
            openIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_SINGLE_TOP);

            PendingIntent openPendingIntent = PendingIntent.getActivity(
                context,
                101,
                openIntent,
                PendingIntent.FLAG_UPDATE_CURRENT | (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M ? PendingIntent.FLAG_IMMUTABLE : 0)
            );

            String title;
            if (isOffhook) {
                title = isScam ? "🚨 SCAMMER CONNECTED (" + riskScore + "/100): " + number : "🔴 ACTIVE CALL: " + number;
            } else {
                title = isScam ? "🚨 SCAM CALL DETECTED (" + riskScore + "/100): " + number : "🛡️ Verix Protected Call: " + number;
            }

            String body;
            if (isOffhook) {
                body = "🎙️ Call connected with " + number + ".\n⚠️ Tap [SCAN SPEECH] to record and detect Digital Arrest threats.";
            } else {
                body = isScam 
                    ? "⚠️ " + badge + "\n" + warning + "\nTap below to launch Verix Sentinel."
                    : "✓ Verified caller • Verix Voice Phishing Sentinel Active.";
            }

            NotificationCompat.Builder builder = new NotificationCompat.Builder(context, ALERT_CHANNEL_ID)
                .setSmallIcon(R.mipmap.ic_launcher)
                .setContentTitle(title)
                .setContentText(isOffhook ? "Call Connected • Tap to Scan Speech" : badge)
                .setStyle(new NotificationCompat.BigTextStyle().bigText(body))
                .setPriority(NotificationCompat.PRIORITY_MAX)
                .setCategory(NotificationCompat.CATEGORY_CALL)
                .setVisibility(NotificationCompat.VISIBILITY_PUBLIC)
                .setDefaults(Notification.DEFAULT_ALL)
                .setContentIntent(recordPendingIntent)
                .setFullScreenIntent(recordPendingIntent, true) // Pop Heads-up banner
                .setOngoing(isOffhook)
                .setAutoCancel(!isOffhook)
                .addAction(android.R.drawable.ic_btn_speak_now, "🎙️ SCAN SPEECH (30s)", recordPendingIntent)
                .addAction(android.R.drawable.ic_menu_view, "🛡️ OPEN VERIX", openPendingIntent);

            NotificationManager nm = (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);
            if (nm != null) {
                nm.notify(NOTIF_ID, builder.build());
                Log.d(TAG, "Notification successfully dispatched for " + number + " (isScam=" + isScam + ", isOffhook=" + isOffhook + ")");
            }
        } catch (Exception e) {
            Log.e(TAG, "Failed to dispatch call notification: " + e.getMessage(), e);
        }
    }

    public static void cancelNotification(Context context) {
        try {
            NotificationManager nm = (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);
            if (nm != null) {
                nm.cancel(NOTIF_ID);
            }
        } catch (Exception e) {
            Log.w(TAG, "Error cancelling notification: " + e.getMessage());
        }
    }

    private static void createAlertChannel(Context context) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            NotificationManager nm = (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);
            if (nm == null) return;

            NotificationChannel channel = new NotificationChannel(
                ALERT_CHANNEL_ID,
                "Verix High-Priority Scam Alerts",
                NotificationManager.IMPORTANCE_HIGH
            );
            channel.setDescription("Instant scam warnings and in-call speech recording prompts");
            channel.enableVibration(true);
            channel.setVibrationPattern(new long[]{0, 500, 200, 500});
            channel.enableLights(true);
            channel.setLockscreenVisibility(Notification.VISIBILITY_PUBLIC);
            channel.setBypassDnd(true);

            Uri sound = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION);
            AudioAttributes audioAttr = new AudioAttributes.Builder()
                .setContentType(AudioAttributes.CONTENT_TYPE_SONIFICATION)
                .setUsage(AudioAttributes.USAGE_NOTIFICATION_COMMUNICATION_INSTANT)
                .build();
            channel.setSound(sound, audioAttr);

            nm.createNotificationChannel(channel);
        }
    }
}
