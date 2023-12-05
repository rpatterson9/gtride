import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy2TXifklR-YGw_HMf5MeJs_hKNrnUbhA",
  authDomain: "zaddy-admin.firebaseapp.com",
  databaseURL: "https://zaddy-admin-default-rtdb.firebaseio.com",
  projectId: "zaddy-admin",
  storageBucket: "zaddy-admin.appspot.com",
  messagingSenderId: "180977792330",
  appId: "1:180977792330:web:47dfbf4892713477677db3"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
