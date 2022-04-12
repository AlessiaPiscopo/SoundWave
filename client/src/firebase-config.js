// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// TODO: transfer to .env file
const firebaseConfig = {
  apiKey: "AIzaSyDUKxeFYlCFN6O_Yqx2_DCTdFmMqT4r0oI",
  authDomain: "soundwave-1bfb7.firebaseapp.com",
  projectId: "soundwave-1bfb7",
  storageBucket: "soundwave-1bfb7.appspot.com",
  messagingSenderId: "380799488765",
  appId: "1:380799488765:web:bc2485f2a435f2823d6494",
};

// Initialize Firebase by calling the initializeApp function and pass in the firebaseConfig option
const app = initializeApp(firebaseConfig);
// Pass app to getFirestore to populate db with all of the Firestore information from app
export const db = getFirestore(app);
