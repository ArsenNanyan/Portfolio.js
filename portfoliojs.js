document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

document.getElementById("contact-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    try {
        const response = await fetch("https://formspree.io/f/mwplnyzw", {
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
        });

        if (response.ok) {
            alert("Thank you for contacting me! Your message has been sent.");
            this.reset();
        } else {
            alert("Something went wrong. Please try again later.");
        }
    } catch (error) {
        alert("Error sending message. Please check your internet connection.");
    }
});
