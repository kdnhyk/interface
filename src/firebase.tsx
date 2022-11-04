import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC2h5Vmws16s3aaRwRt1WydSOaB46W2A3U",
  authDomain: "interface-archive.firebaseapp.com",
  projectId: "interface-archive",
  storageBucket: "interface-archive.appspot.com",
  messagingSenderId: "478009461402",
  appId: "1:478009461402:web:965cef5d0cd0a524ab6d23",
  measurementId: "G-S3E42XZ63D",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
