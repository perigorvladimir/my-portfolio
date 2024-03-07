document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        // save the values
        const firstName = document.getElementById("firstName").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const messageConfirmation = `Hello ${firstName}, we have received the following message from you: "${message}". We will return contact as soon as possible through your email (${email}).`;

        $('.toast').toast('show');
        $('.toast-body').text(messageConfirmation);

        form.reset();
    });
});

