import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0wRdmQ28BqBfmrsyEMmWa_MMpSjXlqW4",
  authDomain: "fraud-89cd6.firebaseapp.com",
  projectId: "fraud-89cd6",
  storageBucket: "fraud-89cd6.firebasestorage.app",
  messagingSenderId: "241694440805",
  appId: "1:241694440805:web:79eeee91ed84a4dbbd758c",
  measurementId: "G-90Y5GHS735"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
