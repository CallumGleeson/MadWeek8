import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  "projectId": "madweek8-70f5d",
  "appId": "1:795088440741:web:9d3f7ce4e58ab55a9dac4c",
  "storageBucket": "madweek8-70f5d.firebasestorage.app",
  "apiKey": "AIzaSyC7yciblEsZW6P4z7tGlrEH6x5eCLjDW5k",
  "authDomain": "madweek8-70f5d.firebaseapp.com",
  "messagingSenderId": "795088440741",
  "measurementId": "G-J4BHK8PYDK",
  "projectNumber": "795088440741",
  "version": "2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);