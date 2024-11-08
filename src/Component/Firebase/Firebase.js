// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHCqumqvDQysPRjxYpURWLDcNuZrnihx4",
  authDomain: "ty-casual.firebaseapp.com",
  projectId: "ty-casual",
  storageBucket: "ty-casual.appspot.com",
  messagingSenderId: "384749710825",
  appId: "1:384749710825:web:635e3b5c1a51be8bceaf78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;