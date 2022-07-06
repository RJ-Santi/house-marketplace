// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkq-CGnFBXvUT_yeo7o7ublYio9XwA6dw",
  authDomain: "house-marketplace-app-e5f76.firebaseapp.com",
  projectId: "house-marketplace-app-e5f76",
  storageBucket: "house-marketplace-app-e5f76.appspot.com",
  messagingSenderId: "709535047795",
  appId: "1:709535047795:web:b0c848ee92a71b73ea4a06"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
