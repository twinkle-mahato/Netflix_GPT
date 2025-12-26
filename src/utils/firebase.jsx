// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBudZjqGeryX72utwXOzZWBhCyprbKbkbo",
  authDomain: "netflixgpt-203ab.firebaseapp.com",
  projectId: "netflixgpt-203ab",
  storageBucket: "netflixgpt-203ab.firebasestorage.app",
  messagingSenderId: "1094797326088",
  appId: "1:1094797326088:web:8d7b9ac4d4f70ae1511ebd",
  measurementId: "G-SQSJ7L5KTB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
