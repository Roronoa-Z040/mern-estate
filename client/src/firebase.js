// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a1db7.firebaseapp.com",
  projectId: "mern-estate-a1db7",
  storageBucket: "mern-estate-a1db7.appspot.com",
  messagingSenderId: "75693862455",
  appId: "1:75693862455:web:228f2f9f8b011f619b99b2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);