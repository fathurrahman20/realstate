// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQkFHFy0HkRkkxE1nWslGpB82FaCKJwnI",
    authDomain: "realstate-662ba.firebaseapp.com",
    projectId: "realstate-662ba",
    storageBucket: "realstate-662ba.appspot.com",
    messagingSenderId: "97533312768",
    appId: "1:97533312768:web:3cd02d85aad9a0a492fde5"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();