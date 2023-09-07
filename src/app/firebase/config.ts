// Import the functions you need from the SDKs you need

import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAl8AgqVfxYilLj0Ai_-QopQPkSRzekUvk",
  authDomain: "ai-code-review.firebaseapp.com",
  projectId: "ai-code-review",
  storageBucket: "ai-code-review.appspot.com",
  messagingSenderId: "1027298732213",
  appId: "1:1027298732213:web:3b69bdbb892fe9f13136fc",
  measurementId: "G-MPBFK9LS5K"
};


// Initialize Firebase

const firebase_app  = initializeApp(firebaseConfig);

const analytics = getAnalytics(firebase_app);

export default firebase_app;
