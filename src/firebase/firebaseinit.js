// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA7HxY0P6ki-zATsjsExf8N73ZCwhTto_E",
  authDomain: "my-portfolio-9f843.firebaseapp.com",
  projectId: "my-portfolio-9f843",
  storageBucket: "my-portfolio-9f843.appspot.com",
  messagingSenderId: "636914874698",
  appId: "1:636914874698:web:efec6306ebb551c16529b3",
  measurementId: "G-7F1Y0F3QKQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);