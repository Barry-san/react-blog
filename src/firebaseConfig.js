// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCta8dqcSholGWp8jPvH_F6IO2RWpGCw3w",
  authDomain: "react-firebase-c7a25.firebaseapp.com",
  projectId: "react-firebase-c7a25",
  storageBucket: "react-firebase-c7a25.appspot.com",
  messagingSenderId: "636918170597",
  appId: "1:636918170597:web:09dba2dacbdf0f8712250c",
  measurementId: "G-SHSJPQ6ZWN",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
