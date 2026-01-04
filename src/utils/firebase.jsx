// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOTjTg4zzT9HCOKaDdMN1GuwXu5b6GpR8",
  authDomain: "netflix-ed849.firebaseapp.com",
  projectId: "netflix-ed849",
  storageBucket: "netflix-ed849.firebasestorage.app",
  messagingSenderId: "464480042344",
  appId: "1:464480042344:web:5c2122e0a97899d3daeadd",
  measurementId: "G-RHLLEE846R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
