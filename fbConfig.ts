// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqE4rkakGb2IrM7UZJb8vVxZrq9v717wc",
  authDomain: "utslab-7ff84.firebaseapp.com",
  projectId: "utslab-7ff84",
  storageBucket: "utslab-7ff84.appspot.com",
  messagingSenderId: "28916181527",
  appId: "1:28916181527:web:4ba305c7e1b167b7a80a52",
  measurementId: "G-8VZ6Y74N1Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firestoreDB = getFirestore(app);

export const storage = getStorage(app);