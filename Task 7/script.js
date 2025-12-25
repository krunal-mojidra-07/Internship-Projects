document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let error = document.getElementById("error");

    if (name === "" || email === "" || message === "") {
        error.innerText = "All fields are required!";
    } else {
        error.style.color = "green";
        error.innerText = "Message sent successfully!";
    }
});
