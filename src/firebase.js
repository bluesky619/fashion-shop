// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqVXP6HxyJO1LiSj_j3v2qxlTGFnTI33s",
  authDomain: "fashion-shop-74711.firebaseapp.com",
  projectId: "fashion-shop-74711",
  storageBucket: "fashion-shop-74711.appspot.com",
  messagingSenderId: "590188170942",
  appId: "1:590188170942:web:5054390bdde296201b18ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export default auth;