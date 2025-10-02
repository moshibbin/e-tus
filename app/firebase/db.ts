// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRncvtq4F0GDZ1p58N6BePuT6B4KxL7is",
  authDomain: "etus-ca2be.firebaseapp.com",
  projectId: "etus-ca2be",
  storageBucket: "etus-ca2be.firebasestorage.app",
  messagingSenderId: "44485073323",
  appId: "1:44485073323:web:2eba09875ee193350b5aee",
  measurementId: "G-H6NLVYCMQ0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// const googleProvider = new GoogleAuthProvider();
// const authAdmin = admin.auth();
export { auth, db };
