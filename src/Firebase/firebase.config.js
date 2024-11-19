// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOhfVwjyI2-YmGonhQhGe8hHsQuJ0KSBY",
  authDomain: "career-bloom-c3840.firebaseapp.com",
  projectId: "career-bloom-c3840",
  storageBucket: "career-bloom-c3840.firebasestorage.app",
  messagingSenderId: "317504387267",
  appId: "1:317504387267:web:2830c0880da8657bdf4a76",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
