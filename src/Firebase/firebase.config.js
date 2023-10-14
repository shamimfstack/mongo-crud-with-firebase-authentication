// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS-HD2S9HyEWGz4GO6Vyqgd4x1tZDJxPo",
  authDomain: "mod-auth-4.firebaseapp.com",
  projectId: "mod-auth-4",
  storageBucket: "mod-auth-4.appspot.com",
  messagingSenderId: "687768557914",
  appId: "1:687768557914:web:16e17c7de3c25791af7b63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;