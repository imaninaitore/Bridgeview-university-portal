// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCrjNCeYjo6ZRYpFE2BMrKnut1DPCVC7w",
  authDomain: "bridgeview-university.firebaseapp.com",
  projectId: "bridgeview-university",
  storageBucket: "bridgeview-university.firebasestorage.app",
  messagingSenderId: "218858434238",
  appId: "1:218858434238:web:b776c39383fe21c5d9b8ef",
  measurementId: "G-05TG3EZH25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)