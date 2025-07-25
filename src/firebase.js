// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWZ9EeGj7PLmjxXV0qbvyoG1Cap7XDPNY",
  authDomain: "brokerz-e6e23.firebaseapp.com",
  projectId: "brokerz-e6e23",
  storageBucket: "brokerz-e6e23.firebasestorage.app",
  messagingSenderId: "1093608284888",
  appId: "1:1093608284888:web:40ecd844184c50b897edad",
  measurementId: "G-SQ3GE1YPSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);