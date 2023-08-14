document.getElementById("newsletter-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById("email");
    const nameInput = document.getElementById("name");
    
    if (isValidEmail(emailInput.value)) {
        // Simulate form submission
        sendFormDataToServer(emailInput.value, nameInput.value);
    } else {
        alert("Please enter a valid email address.");
    }
});

function isValidEmail(email) {
    // Use a regular expression to validate the email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function sendFormDataToServer(email, name) {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("name", name);

    fetch("https://httpbin.org/post", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert("Thanks for joining our newsletter!");
    })
    .catch(error => {
        console.error(error);
        alert("An error occurred while submitting the form.");
    });
}