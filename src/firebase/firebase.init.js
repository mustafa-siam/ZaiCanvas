// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5mft2IhQfa4iDqj44DZlyLiDN9FGpeto",
  authDomain: "zaicanvas.firebaseapp.com",
  projectId: "zaicanvas",
  storageBucket: "zaicanvas.firebasestorage.app",
  messagingSenderId: "288775508034",
  appId: "1:288775508034:web:68a1167f5e207b1f399ddb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;