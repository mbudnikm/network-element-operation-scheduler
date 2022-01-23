// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdyj3LUi2GNnZHAms-rnevHyhpCu5Wd70",
  authDomain: "network-element-operation.firebaseapp.com",
  projectId: "network-element-operation",
  storageBucket: "network-element-operation.appspot.com",
  messagingSenderId: "972617763985",
  appId: "1:972617763985:web:dd4982ce5dd21423ad0330",
  measurementId: "G-3GYL353X5W"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db = getFirestore()

export default db;