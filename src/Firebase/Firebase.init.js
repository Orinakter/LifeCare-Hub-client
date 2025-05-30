// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcg4e1X5dNUL-FMXfXTAbM_N2fxOw2o6Y",
  authDomain: "lifecarehub-6e69f.firebaseapp.com",
  projectId: "lifecarehub-6e69f",
  storageBucket: "lifecarehub-6e69f.firebasestorage.app",
  messagingSenderId: "1032546118761",
  appId: "1:1032546118761:web:07c427b4125a676a4c46f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);