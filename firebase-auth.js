// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwJomB5vQn0uzW6Imtzj5doKpaPmFy5lI",
  authDomain: "f1-career-mode.firebaseapp.com",
  databaseURL: "https://f1-career-mode-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "f1-career-mode",
  storageBucket: "f1-career-mode.appspot.com",
  messagingSenderId: "959963427852",
  appId: "1:959963427852:web:b215d52fed51139e306a29",
  measurementId: "G-QSVTS91P66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);