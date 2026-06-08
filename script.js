const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
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

    alert("✅ Welcome Racer!\n\nYou have successfully joined the Garage Empire Racing Beta List.");
    form.reset();
});