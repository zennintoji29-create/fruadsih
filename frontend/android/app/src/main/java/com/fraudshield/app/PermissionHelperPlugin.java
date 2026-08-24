    package com.fraudshield.app;

    import android.Manifest;
    import android.content.Intent;
    import android.content.pm.PackageManager;
    import android.net.Uri;
    import android.os.Build;
    import android.provider.Settings;
    import androidx.core.app.ActivityCompat;
    import androidx.core.content.ContextCompat;
    import com.getcapacitor.Plugin;
    import com.getcapacitor.PluginCall;
    import com.getcapacitor.PluginMethod;
    import com.getcapacitor.annotation.CapacitorPlugin;
    import java.util.ArrayList;
    import java.util.List;

    @CapacitorPlugin(name = "PermissionHelper")
    public class PermissionHelperPlugin extends Plugin {

        @PluginMethod
        public void requestAllPermissions(PluginCall call) {
            if (getActivity() == null) {
                call.resolve();
                return;
        }

        getActivity().runOnUiThread(() -> {
            List<String> permissionsToRequest = new ArrayList<>();
            String[] corePermissions = {
                Manifest.permission.READ_PHONE_STATE,
                Manifest.permission.READ_CALL_LOG,
                Manifest.permission.READ_SMS,
                Manifest.permission.RECEIVE_SMS,
                Manifest.permission.CAMERA,
                Manifest.permission.RECORD_AUDIO
            };

            for (String perm : corePermissions) {
                if (ContextCompat.checkSelfPermission(getContext(), perm) != PackageManager.PERMISSION_GRANTED) {
                    permissionsToRequest.add(perm);
                }
            }

            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
                if (ContextCompat.checkSelfPermission(getContext(), Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED) {
                    permissionsToRequest.add(Manifest.permission.POST_NOTIFICATIONS);
                }
            }

            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M && !Settings.canDrawOverlays(getContext())) {
                try {
                    Intent overlayIntent = new Intent(
                        Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
                        Uri.parse("package:" + getContext().getPackageName())
                    );
                    overlayIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                    getContext().startActivity(overlayIntent);
                } catch (Exception e) {
                    // Fallback to general settings
                }
            }

            if (!permissionsToRequest.isEmpty()) {
                ActivityCompat.requestPermissions(getActivity(), permissionsToRequest.toArray(new String[0]), 101);
            }
            call.resolve();
        });
    }

    @PluginMethod
    public void checkOverlayPermission(PluginCall call) {
        boolean hasOverlay = true;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            hasOverlay = Settings.canDrawOverlays(getContext());
        }
        com.getcapacitor.JSObject ret = new com.getcapacitor.JSObject();
        ret.put("granted", hasOverlay);
        call.resolve(ret);
    }

    @PluginMethod
    public void launchUpiPayment(PluginCall call) {
        openUpiPayment(call);
    }

    @PluginMethod
    public void openUpiPayment(PluginCall call) {
        String vpa = call.getString("vpa", call.getString("pa", "")).trim();
        String name = call.getString("name", call.getString("pn", "Payee")).trim();
        String amount = call.getString("amount", call.getString("am", "")).trim();
        String note = call.getString("note", call.getString("tn", "")).trim();
        String trParam = call.getString("tr", "").trim();
        String packageName = call.getString("packageName", null);

        if (getActivity() == null || vpa.isEmpty()) {
            call.reject("Invalid VPA or activity");
            return;
        }

        getActivity().runOnUiThread(() -> {
            try {
                // Auto-copy VPA to clipboard for user convenience
                try {
                    android.content.ClipboardManager clipboard = (android.content.ClipboardManager) getContext().getSystemService(android.content.Context.CLIPBOARD_SERVICE);
                    android.content.ClipData clip = android.content.ClipData.newPlainText("UPI VPA", vpa);
                    if (clipboard != null) clipboard.setPrimaryClip(clip);
                } catch (Exception ignore) {}

                // Build NPCI P2P compliant UPI Intent URI
                // For non-merchant P2P transfers, omitting 'am' allows Google Pay/PhonePe to open directly to the friend's pay screen without NPCI U16 limit block
                Uri.Builder builder = new Uri.Builder()
                    .scheme("upi")
                    .authority("pay")
                    .appendQueryParameter("pa", vpa)
                    .appendQueryParameter("pn", name)
                    .appendQueryParameter("cu", "INR");

                if (!note.isEmpty()) {
                    builder.appendQueryParameter("tn", note);
                }

                boolean isMerchant = call.getBoolean("isMerchant", false);
                boolean forcePrefill = call.getBoolean("forcePrefill", false);

                // For non-merchant P2P transfers, omitting 'am' allows Google Pay/PhonePe to open directly to the friend's pay screen without NPCI U16 limit block
                if ((isMerchant || forcePrefill) && !amount.isEmpty() && !amount.equals("0")) {
                    try {
                        double amtDbl = Double.parseDouble(amount);
                        if (amtDbl > 0) {
                            builder.appendQueryParameter("am", String.format(java.util.Locale.US, "%.2f", amtDbl));
                            String uniqueTr = !trParam.isEmpty() ? trParam : ("VRX" + System.currentTimeMillis() + (int)(Math.random() * 9000 + 1000));
                            builder.appendQueryParameter("tr", uniqueTr);
                        }
                    } catch (Exception ignore) {}
                }

                Uri uri = builder.build();
                Intent intent = new Intent(Intent.ACTION_VIEW, uri);
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);

                if (packageName != null && !packageName.isEmpty()) {
                    intent.setPackage(packageName);
                    getActivity().startActivity(intent);
                } else {
                    Intent chooser = Intent.createChooser(intent, "Pay " + name + " via UPI App");
                    chooser.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                    getActivity().startActivity(chooser);
                }
                call.resolve();
            } catch (Exception e) {
                call.reject(e.getMessage());
            }
        });
    }

    @PluginMethod
    public void launchAppDirectly(PluginCall call) {
        String packageName = call.getString("packageName", "com.google.android.apps.nbu.paisa.user");
        String vpa = call.getString("vpa", "").trim();

        if (getActivity() == null) {
            call.reject("Activity not available");
            return;
        }

        getActivity().runOnUiThread(() -> {
            try {
                if (!vpa.isEmpty()) {
                    android.content.ClipboardManager clipboard = (android.content.ClipboardManager) getContext().getSystemService(android.content.Context.CLIPBOARD_SERVICE);
                    android.content.ClipData clip = android.content.ClipData.newPlainText("UPI VPA", vpa);
                    if (clipboard != null) clipboard.setPrimaryClip(clip);
                }

                android.content.pm.PackageManager pm = getActivity().getPackageManager();
                Intent launchIntent = pm.getLaunchIntentForPackage(packageName);
                if (launchIntent != null) {
                    launchIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                    getActivity().startActivity(launchIntent);
                    call.resolve();
                } else {
                    // Fallback to general payment intent
                    openUpiPayment(call);
                }
            } catch (Exception e) {
                call.reject(e.getMessage());
            }
        });
    }
}
