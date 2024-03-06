
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        // save the values
        const firstName = document.getElementById("firstName").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Constrói a mensagem personalizada
        const messageConfirmation = `Olá ${firstName}, recebemos a seguinte mensagem por você: "${message}". Retornaremos contato o mais rápido possível através do seu email (${email}).`;

        // Exibe a mensagem personalizada
        document.getElementById("messageConfirmation").innerHTML = messageConfirmation;

        // Opcional: Limpar o formulário após o envio
        form.reset();
    });
});

