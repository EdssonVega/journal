// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBSlhY9c10dXye--8Sg_KKuZeUsl7yQmg",
  authDomain: "react-journal-85d46.firebaseapp.com",
  projectId: "react-journal-85d46",
  storageBucket: "react-journal-85d46.firebasestorage.app",
  messagingSenderId: "239390587478",
  appId: "1:239390587478:web:94b3187e08eee6ca3459f7"
};

// Initialize Firebase
export const FireBaseApp = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth(FireBaseApp);
export const FirebaseDB = getFirestore(FireBaseApp)