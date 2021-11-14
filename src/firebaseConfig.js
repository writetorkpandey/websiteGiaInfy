// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmN4kZXfh6wpAh4kledWKBq1qXVycYMLA",
  authDomain: "school-a0fd8.firebaseapp.com",
  projectId: "school-a0fd8",
  storageBucket: "school-a0fd8.appspot.com",
  messagingSenderId: "646705087481",
  appId: "1:646705087481:web:2a0f881326d45b3fa4b328"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore();