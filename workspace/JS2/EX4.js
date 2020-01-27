var cadena2 = prompt("Introdueix una cadena");
inf(cadena2);

function inf(cadena) {
    if (/[A-Z]/.test(cadena) && /[a-z]/.test(cadena)) {
        alert("Esta formada por mayusculas y minusculas");

    } else if (/[A-Z]/.test(cadena)) {
        alert("Contiene mayusculas");
    } else if (/[a-z]/.test(cadena)) {
        alert("Contiene minusculas");
    } else {
        alert("Error desconocido");
    }
}