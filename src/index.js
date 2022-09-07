import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
const firebaseApp = initializeApp({
  apiKey: "AIzaSyCta8dqcSholGWp8jPvH_F6IO2RWpGCw3w",
  authDomain: "react-firebase-c7a25.firebaseapp.com",
  projectId: "react-firebase-c7a25",
  storageBucket: "react-firebase-c7a25.appspot.com",
  messagingSenderId: "636918170597",
  appId: "1:636918170597:web:09dba2dacbdf0f8712250c",
  measurementId: "G-SHSJPQ6ZWN",
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
