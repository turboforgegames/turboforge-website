const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = form.querySelector("input").value;

    try {
        await fetch("https://script.google.com/u/0/home/projects/1cOE4e0XSCpxei04vwAgP_SxKSZvsMOM5_IxjsXKIXAfIy0-U8IXcZBpu/edit", {
            method: "POST",
            body: JSON.stringify({
                email: email
            })
        });

        alert("Thanks for joining the TurboForge Beta!");
        form.reset();

    } catch (error) {
        alert("Something went wrong. Please try again.");
    }
});