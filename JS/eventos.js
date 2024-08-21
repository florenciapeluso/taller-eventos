const btnSaludo =document.getElementById ("btn-saludo")

btnSaludo.addEventListener("click", function(event) {
    event.stopPropagation(); 
    cartel();
});

function cartel() {
    alert ("Hola! Soy el div")
}