// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8dEoYMPVTCFm1xpsxw5RTYB50DoYGYnQ",
  authDomain: "ema-john-simple-ecommerc-fa9d3.firebaseapp.com",
  projectId: "ema-john-simple-ecommerc-fa9d3",
  storageBucket: "ema-john-simple-ecommerc-fa9d3.appspot.com",
  messagingSenderId: "336148293948",
  appId: "1:336148293948:web:4e690518b2110e45d71639",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
