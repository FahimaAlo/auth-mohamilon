// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAOwVZy8k6vU90dD3nklxc0ZzjuPMYfLU",
  authDomain: "auth-mohamilon-7ff22.firebaseapp.com",
  projectId: "auth-mohamilon-7ff22",
  storageBucket: "auth-mohamilon-7ff22.firebasestorage.app",
  messagingSenderId: "132384972591",
  appId: "1:132384972591:web:aaa00746c77ecd9a9f0bda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;