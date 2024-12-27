document.getElementById("signinForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        // Simulate a sign-in success message
        document.getElementById("responseMessage").textContent = "Sign-in successful! Redirecting...";
        document.getElementById("responseMessage").style.color = "green";

        // Simulate a redirect (you can replace with actual redirection code)
        setTimeout(() => {
            window.location.href = "dashboard.html"; // Redirect to user dashboard
        }, 2000);
    } else {
        document.getElementById("responseMessage").textContent = "Please fill in all fields.";
    }
});
