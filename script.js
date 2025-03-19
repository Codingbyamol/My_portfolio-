// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the page from refreshing
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(`Thank you, ${name}! Your message has been sent.`);
});
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the page from reloading

    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        time: new Date().toLocaleString(), // Sends the current date and time
        message: document.getElementById("message").value,
    };
    

    emailjs.send("service_6m9ju8i", "template_kp1loye", templateParams)

        .then(() => {
            alert("Message sent successfully!");
        })
        .catch((error) => {
            alert("Failed to send message. Please try again.");
            console.error("EmailJS Error:", error);
        });
});
