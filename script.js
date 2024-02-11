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

