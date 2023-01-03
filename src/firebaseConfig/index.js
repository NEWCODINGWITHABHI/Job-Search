

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from '../../node_modules/firebase/auth';
import {getFirestore} from '../../node_modules/firebase/firestore';
import {getStorage} from '../../node_modules/firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrYP8qJvhajnvVNIC2pMJV9e4OZcwn3Ho",
  authDomain: "work-place-d521e.firebaseapp.com",
  projectId: "work-place-d521e",
  storageBucket: "work-place-d521e.appspot.com",
  messagingSenderId: "691148030970",
  appId: "1:691148030970:web:2127f5bffbd589aea9da43"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);

export const storage=getStorage(app);
