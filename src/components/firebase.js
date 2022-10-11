// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDGq3J26dqED23TBFbDj8yKQiiB_ISmE8E",
    authDomain: "d-commerce-c2c69.firebaseapp.com",
    projectId: "d-commerce-c2c69",
    storageBucket: "d-commerce-c2c69.appspot.com",
    messagingSenderId: "485218415882",
    appId: "1:485218415882:web:0f66c190b091195be836f3",
    measurementId: "G-27QWNL7KDY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const db = getFirestore(app)

export { auth, db }