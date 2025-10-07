// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkrd4LsIADNI5-fVnJ767WxhKiK1Aa1sQ",
  authDomain: "structured-health.firebaseapp.com",
  projectId: "structured-health",
  storageBucket: "structured-health.firebasestorage.app",
  messagingSenderId: "372721575097",
  appId: "1:372721575097:web:b7c89a4207fe8144212768",
  measurementId: "G-KM12CZ6EVY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export default app;