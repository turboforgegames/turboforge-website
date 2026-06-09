// Beta Form
const form = document.getElementById("betaForm");
const successMessage = document.getElementById("successMessage");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = form.querySelector("input").value;

        fetch("https://script.google.com/macros/s/AKfycbzLE9CLkX7BH0fLlnMoMHsrU-3nyqL-c7FfBgLPOOPgR4QSXtIwZ74rcdmgUGjrtFDF/exec", {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "text/plain"
            },
            body: JSON.stringify({
                email: email
            })
        });

        successMessage.style.display = "block";
        form.reset();
    });
}

// Founder Waitlist Form
const founderForm = document.getElementById("founderForm");
const founderSuccess = document.getElementById("founderSuccess");

if (founderForm) {
    founderForm.addEventListener("submit", function (e) {
        e.preventDefault();

        founderSuccess.style.display = "block";
        founderForm.reset();
    });
}