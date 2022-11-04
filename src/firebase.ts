// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2h5Vmws16s3aaRwRt1WydSOaB46W2A3U",
  authDomain: "interface-archive.firebaseapp.com",
  projectId: "interface-archive",
  storageBucket: "interface-archive.appspot.com",
  messagingSenderId: "478009461402",
  appId: "1:478009461402:web:965cef5d0cd0a524ab6d23",
  measurementId: "G-S3E42XZ63D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
