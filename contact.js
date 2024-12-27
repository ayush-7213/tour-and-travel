document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simulate form submission
    if (name && email && message) {
        document.getElementById("responseMessage").textContent =
            "Thank you for your message, " + name + "! We’ll get back to you shortly.";
        document.getElementById("responseMessage").style.color = "green";
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("responseMessage").textContent =
            "Please fill out all required fields.";
        document.getElementById("responseMessage").style.color = "red";
    }
});
