import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {

    apiKey: "AIzaSyB4x9JrKH3fSE_lVF78GnJtCPasJWaCEvA",
  
    authDomain: "milk-tracker-e65e0.firebaseapp.com",
  
    projectId: "milk-tracker-e65e0",
  
    storageBucket: "milk-tracker-e65e0.appspot.com",
  
    messagingSenderId: "802828100759",
  
    appId: "1:802828100759:web:0fa7b8383b59f69eef35d2",
  
    measurementId: "G-H6X7VSQKDT"
  
  };
  

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);

export { app, analytics, auth, database };