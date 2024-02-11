import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function showLoginForm() {
    // Hide signup form if visible
    document.getElementById("signup-form").style.display = "none";
    // Toggle login form visibility
    var loginForm = document.getElementById("login-form");
    loginForm.style.display = loginForm.style.display === "none" ? "block" : "none";
}

function showSignupForm() {
    // Hide login form if visible
    document.getElementById("login-form").style.display = "none";
    // Toggle signup form visibility
    var signupForm = document.getElementById("signup-form");
    signupForm.style.display = signupForm.style.display === "none" ? "block" : "none";
}

function signup() {
    var username = document.getElementById("signup-username").value;
    var password = document.getElementById("signup-password").value;
    // Here you would typically send a request to your backend to handle the signup process
    console.log("Signing up with username: " + username + " and password: " + password);
}

function login() {
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
    // Here you would typically send a request to your backend to handle the login process
    console.log("Logging in with username: " + username + " and password: " + password);
    // For demo purposes, show logout link after successful login
    document.getElementById("logout-link").style.display = "block";
}

function logout() {
    // Here you would typically send a request to your backend to handle the logout process
    console.log("Logging out");
    // For demo purposes, hide logout link after logout
    document.getElementById("logout-link").style.display = "none";
}

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
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Sign up
firebase.auth().createUserWithEmailAndPassword(email, password)
.then((userCredential) => {
  // Signed up successfully
  const user = userCredential.user;
})
.catch((error) => {
  // Handle sign up errors
});

// Log in
firebase.auth().signInWithEmailAndPassword(email, password)
.then((userCredential) => {
  // Logged in successfully
  const user = userCredential.user;
})
.catch((error) => {
  // Handle login errors
});

// Log out
firebase.auth().signOut()
.then(() => {
  // Logged out successfully
})
.catch((error) => {
  // Handle logout errors
});
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in
    } else {
      // User is signed out
    }
  });
  