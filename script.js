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

<script type="module">
  // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
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
</script>