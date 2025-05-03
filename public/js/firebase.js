import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getFirestore, collection, getDocs, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCo4RMTyEmFxmCVliO3-RLrnxDTwmf2Y3o",
  authDomain: "blogging-website-1b6b2.firebaseapp.com",
  projectId: "blogging-website-1b6b2",
  storageBucket: "blogging-website-1b6b2.firebasestorage.app",
  messagingSenderId: "937192134351",
  appId: "1:937192134351:web:648e3b775b5e312705c9ba",
  measurementId: "G-XE05G255L9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ Export everything correctly!
export { db, collection, getDocs, doc, getDoc, setDoc };







//For your use
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export default app;
