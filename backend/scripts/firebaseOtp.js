import dotenv from 'dotenv';
dotenv.config();

const FIREBASE_API_KEY = "AIzaSyB0wRdmQ28BqBfmrsyEMmWa_MMpSjXlqW4";
const phone = process.argv[2] || "+917606911448";

async function sendFirebaseOtp() {
  console.log(`[Firebase] Sending real SMS OTP to ${phone}...`);
  try {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:sendVerificationCode?key=${FIREBASE_API_KEY}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phoneNumber: phone
      })
    });
    const data = await res.json();
    console.log('[Firebase Response]:', data);
    if (data.sessionInfo) {
      console.log('✅ Real Google SMS OTP Dispatched Successfully! Session:', data.sessionInfo);
    } else {
      console.log('ℹ️ Notice from Google:', data.error?.message || data);
    }
  } catch (err) {
    console.error('Error:', err.message);
  }
}

sendFirebaseOtp();
