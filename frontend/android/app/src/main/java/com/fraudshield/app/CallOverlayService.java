package com.fraudshield.app;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.graphics.PixelFormat;
import android.graphics.drawable.GradientDrawable;
import android.os.Build;
import android.os.IBinder;
import android.provider.Settings;
import android.util.Log;
import android.view.Gravity;
import android.view.View;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.core.app.NotificationCompat;

public class CallOverlayService extends Service {
    private static final String TAG = "VerixCallOverlay";
    public static final String ACTION_SHOW_OVERLAY = "com.fraudshield.app.SHOW_OVERLAY";
    public static final String ACTION_HIDE_OVERLAY = "com.fraudshield.app.HIDE_OVERLAY";
    public static final String ACTION_CALL_OFFHOOK = "com.fraudshield.app.CALL_OFFHOOK";
    private static final String CHANNEL_ID = "verix_call_alerts_v2";

    private WindowManager windowManager;
    private View overlayView;

    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        if (intent != null) {
            String action = intent.getAction();
            String number = intent.getStringExtra("CALLER_NUMBER");
            String badge = intent.getStringExtra("CALLER_BADGE");
            String warning = intent.getStringExtra("CALLER_WARNING");

            if (number == null || number.isEmpty()) number = "+91 94775 30475";
            if (badge == null || badge.isEmpty()) badge = "Suspected Voice Phishing / Digital Arrest";
            if (warning == null || warning.isEmpty()) warning = "Scammer demanding fund transfer under police threat";

            boolean isScam = intent.getBooleanExtra("IS_SCAM", false);

            if (ACTION_SHOW_OVERLAY.equals(action)) {
                // 1. Establish Foreground Service first (mandatory on Android 8+ within 5s)
                showOngoingInCallNotification(number, badge, warning, false);
                // 2. Display Floating HUD View
                showFloatingOverlay(number, badge, warning, isScam);
            } else if (ACTION_CALL_OFFHOOK.equals(action)) {
                showOngoingInCallNotification(number, badge, warning, true);
            } else if (ACTION_HIDE_OVERLAY.equals(action)) {
                removeFloatingOverlay();
                stopForeground(true);
                NotificationManager nm = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
                if (nm != null) {
                    nm.cancel(9001);
                    nm.cancel(9002);
                }
                stopSelf();
            }
        }
        return START_NOT_STICKY;
    }

    private void showFloatingOverlay(String number, String badge, String warning, boolean isScam) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M && !Settings.canDrawOverlays(this)) {
            Log.w(TAG, "Overlay permission not granted according to Settings.canDrawOverlays");
            return;
        }

        try {
            if (windowManager == null) {
                windowManager = (WindowManager) getSystemService(WINDOW_SERVICE);
            }

            if (overlayView != null) {
                removeFloatingOverlay();
            }

            // Create Programmatic Floating HUD View
            LinearLayout layout = new LinearLayout(this);
            layout.setOrientation(LinearLayout.VERTICAL);
            layout.setPadding(36, 28, 36, 28);
            layout.setGravity(Gravity.CENTER_HORIZONTAL);

            // Dark Cyber Gradient Background with Red or Green Border
            GradientDrawable bg = new GradientDrawable();
            bg.setColor(Color.parseColor("#EE0B0F19")); // Dark Glass
            bg.setCornerRadius(28);
            bg.setStroke(3, Color.parseColor(isScam ? "#EF4444" : "#00F0A0")); // Red if scam, Emerald if safe
            layout.setBackground(bg);

            // Header Row
            LinearLayout headerRow = new LinearLayout(this);
            headerRow.setOrientation(LinearLayout.HORIZONTAL);
            headerRow.setGravity(Gravity.CENTER_VERTICAL);
            headerRow.setLayoutParams(new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                LinearLayout.LayoutParams.WRAP_CONTENT
            ));

            TextView title = new TextView(this);
            title.setText(isScam ? "🚨 SCAM CALL DETECTED" : "🛡️ VERIX CALL SENTINEL");
            title.setTextColor(Color.parseColor(isScam ? "#EF4444" : "#00F0A0"));
            title.setTextSize(13);
            title.setTypeface(null, android.graphics.Typeface.BOLD);
            LinearLayout.LayoutParams titleLp = new LinearLayout.LayoutParams(0, LinearLayout.LayoutParams.WRAP_CONTENT, 1.0f);
            title.setLayoutParams(titleLp);
            headerRow.addView(title);

            TextView closeBtn = new TextView(this);
            closeBtn.setText("✕");
            closeBtn.setTextColor(Color.parseColor("#94A3B8"));
            closeBtn.setTextSize(16);
            closeBtn.setPadding(12, 0, 12, 0);
            closeBtn.setOnClickListener(v -> removeFloatingOverlay());
            headerRow.addView(closeBtn);

            layout.addView(headerRow);

            // Caller Info
            TextView callerTxt = new TextView(this);
            callerTxt.setText((isScam ? "⚠️ " : "📞 ") + number);
            callerTxt.setTextColor(Color.WHITE);
            callerTxt.setTextSize(16);
            callerTxt.setTypeface(null, android.graphics.Typeface.BOLD);
            callerTxt.setPadding(0, 12, 0, 4);
            layout.addView(callerTxt);

            TextView badgeTxt = new TextView(this);
            badgeTxt.setText(badge);
            badgeTxt.setTextColor(Color.parseColor(isScam ? "#FCA5A5" : "#A7F3D0"));
            badgeTxt.setTextSize(12);
            badgeTxt.setPadding(0, 0, 0, 12);
            layout.addView(badgeTxt);

            // Action Buttons Row
            LinearLayout btnRow = new LinearLayout(this);
            btnRow.setOrientation(LinearLayout.HORIZONTAL);
            btnRow.setGravity(Gravity.CENTER);
            btnRow.setLayoutParams(new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                LinearLayout.LayoutParams.WRAP_CONTENT
            ));

            // Record Speech Button
            Button recBtn = new Button(this);
            recBtn.setText("🔴 Scan Speech (30s)");
            recBtn.setTextColor(Color.WHITE);
            recBtn.setTextSize(12);
            GradientDrawable recBg = new GradientDrawable();
            recBg.setColor(Color.parseColor("#DC2626"));
            recBg.setCornerRadius(18);
            recBtn.setBackground(recBg);
            recBtn.setPadding(24, 12, 24, 12);
            LinearLayout.LayoutParams btnLp = new LinearLayout.LayoutParams(0, LinearLayout.LayoutParams.WRAP_CONTENT, 1.0f);
            btnLp.setMargins(0, 0, 12, 0);
            recBtn.setLayoutParams(btnLp);
            recBtn.setOnClickListener(v -> {
                launchAppWithAction("RECORD_SPEECH", number);
                removeFloatingOverlay();
            });
            btnRow.addView(recBtn);

            // Block & Dismiss Button
            Button blockBtn = new Button(this);
            blockBtn.setText("🛡️ Defend");
            blockBtn.setTextColor(Color.parseColor("#38BDF8"));
            GradientDrawable blockBg = new GradientDrawable();
            blockBg.setColor(Color.parseColor("#1E293B"));
            blockBg.setCornerRadius(18);
            blockBtn.setBackground(blockBg);
            blockBtn.setPadding(24, 12, 24, 12);
            blockBtn.setLayoutParams(new LinearLayout.LayoutParams(0, LinearLayout.LayoutParams.WRAP_CONTENT, 0.7f));
            blockBtn.setOnClickListener(v -> {
                launchAppWithAction("INCOMING_CALL_SCREENING", number);
                removeFloatingOverlay();
            });
            btnRow.addView(blockBtn);

            layout.addView(btnRow);

            int layoutType;
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                layoutType = WindowManager.LayoutParams.TYPE_APPLICATION_OVERLAY;
            } else {
                layoutType = WindowManager.LayoutParams.TYPE_PHONE;
            }

            int flags = WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE
                      | WindowManager.LayoutParams.FLAG_NOT_TOUCH_MODAL
                      | WindowManager.LayoutParams.FLAG_LAYOUT_IN_SCREEN
                      | WindowManager.LayoutParams.FLAG_HARDWARE_ACCELERATED;

            int screenWidth = getResources().getDisplayMetrics().widthPixels;
            int cardWidth = (int) (screenWidth * 0.92);

            WindowManager.LayoutParams params = new WindowManager.LayoutParams(
                cardWidth,
                WindowManager.LayoutParams.WRAP_CONTENT,
                layoutType,
                flags,
                PixelFormat.TRANSLUCENT
            );
            params.gravity = Gravity.CENTER; // Perfectly centered on screen above dialer
            params.y = 0;

            windowManager.addView(layout, params);
            overlayView = layout;
            Log.d(TAG, "Floating call overlay successfully displayed in screen center");
        } catch (Exception e) {
            Log.e(TAG, "Failed to show call overlay: " + e.getMessage(), e);
        }
    }

    private void showOngoingInCallNotification(String number, String badge, String warning, boolean isOffhook) {
        try {
            NotificationManager nm = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
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

            Intent launchIntent = new Intent(this, MainActivity.class);
            launchIntent.setAction("com.fraudshield.app.INCOMING_CALL_SCREENING");
            launchIntent.putExtra("CALLER_NUMBER", number);
            launchIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);

            PendingIntent pi = PendingIntent.getActivity(
                this,
                102,
                launchIntent,
                PendingIntent.FLAG_UPDATE_CURRENT | (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M ? PendingIntent.FLAG_IMMUTABLE : 0)
            );

            Intent recordIntent = new Intent(this, MainActivity.class);
            recordIntent.setAction("com.fraudshield.app.RECORD_SPEECH");
            recordIntent.putExtra("CALLER_NUMBER", number);
            recordIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);

            PendingIntent recordPi = PendingIntent.getActivity(
                this,
                103,
                recordIntent,
                PendingIntent.FLAG_UPDATE_CURRENT | (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M ? PendingIntent.FLAG_IMMUTABLE : 0)
            );

            String title = isOffhook ? "🔴 ACTIVE CALL: Voice Phishing Sentinel" : "🚨 SCAM CALL DETECTED: " + number;
            String text = isOffhook ? "Call active with " + number + " • Tap to scan speech & detect coercion" : badge + " • Tap to Record & Block";

            NotificationCompat.Builder builder = new NotificationCompat.Builder(this, CHANNEL_ID)
                .setSmallIcon(android.R.drawable.ic_dialog_alert)
                .setContentTitle(title)
                .setContentText(text)
                .setStyle(new NotificationCompat.BigTextStyle().bigText(text + "\n⚠️ " + warning + "\nVerix AI is active in background to prevent extortion."))
                .setPriority(NotificationCompat.PRIORITY_MAX)
                .setCategory(NotificationCompat.CATEGORY_CALL)
                .setVisibility(NotificationCompat.VISIBILITY_PUBLIC)
                .setOngoing(isOffhook) // Non-dismissible while on call
                .setContentIntent(pi)
                .addAction(android.R.drawable.ic_btn_speak_now, "🔴 Scan Speech (30s)", recordPi)
                .addAction(android.R.drawable.ic_menu_view, "🛡️ Open Verix", pi);

            Notification notif = builder.build();
            try {
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                    startForeground(isOffhook ? 9002 : 9001, notif);
                } else {
                    nm.notify(isOffhook ? 9002 : 9001, notif);
                }
            } catch (Exception fgEx) {
                Log.w(TAG, "startForeground constrained by OS, falling back to NotificationManager: " + fgEx.getMessage());
                nm.notify(isOffhook ? 9002 : 9001, notif);
            }
        } catch (Exception e) {
            Log.e(TAG, "Error posting ongoing notification: " + e.getMessage());
        }
    }

    private void launchAppWithAction(String action, String number) {
        try {
            Intent intent = new Intent(this, MainActivity.class);
            intent.setAction("com.fraudshield.app." + action);
            intent.putExtra("CALLER_NUMBER", number);
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);
            startActivity(intent);
        } catch (Exception e) {
            Log.e(TAG, "Error launching app: " + e.getMessage());
        }
    }

    private void removeFloatingOverlay() {
        try {
            if (windowManager != null && overlayView != null) {
                windowManager.removeView(overlayView);
                overlayView = null;
            }
        } catch (Exception e) {
            Log.e(TAG, "Error removing overlay view: " + e.getMessage());
        }
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        removeFloatingOverlay();
    }
}
