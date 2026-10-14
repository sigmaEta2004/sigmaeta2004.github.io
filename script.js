document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevents the page from refreshing

            const usernameInput = document.getElementById("username").value;
            const passwordInput = document.getElementById("password").value;

            // Simple mock authentication check
            if (usernameInput === "admin" && passwordInput === "password123") {
                alert("Login successful! Welcome back, " + usernameInput);
                window.location.href = "home.html"; // Redirect to home page
            } else {
                alert("Invalid username or password. Please try again.");
            }
        });
    }
});
