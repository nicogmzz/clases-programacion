let numero = 0;
let display = document.querySelector("#numero");

document.querySelector("#btn-sumar").addEventListener("click", function() {
    numero++;
    display.textContent = numero;
});

document.querySelector("#btn-restar").addEventListener("click", function() {
    if (numero > 0) {
        numero--;
        display.textContent = numero;
    }
});

let formulario = document.querySelector("form");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    let nombre = document.querySelector("#nombre").value;
    let email = document.querySelector("#email").value;
    let mensaje = document.querySelector("#mensaje").value;

    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor rellena todos los campos.");
    } else {
        alert("Mensaje enviado. ¡Gracias, " + nombre + "!");
    }
});