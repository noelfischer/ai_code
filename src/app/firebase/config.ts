// Import the functions you need from the SDKs you need

import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDeyA84YRcoo6PxsWNwgwyHmyrgpn3glt0",
  authDomain: "template-login-app.firebaseapp.com",
  projectId: "template-login-app",
  storageBucket: "template-login-app.appspot.com",
  messagingSenderId: "537128652810",
  appId: "1:537128652810:web:0c048f71cd9441b5bbcff3",
  measurementId: "G-DEW9H973F4"
};


// Initialize Firebase

const firebase_app  = initializeApp(firebaseConfig);

const analytics = getAnalytics(firebase_app);

export default firebase_app;
