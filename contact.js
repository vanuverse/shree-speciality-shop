const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const message =
        document.getElementById("formMessage");

    if (!name) {
        message.textContent =
            "Please enter your name.";

        return;
    }

    message.textContent =
        "Thank you! Your message has been received. ♡";

    contactForm.reset();

});