var num = prompt("Introdueix un numero enter: ");

var resposta = inparPar(num);
alert(resposta)

function inparPar(numero) {
    if (numero == 0) {
        return "El numero no pot ser 0";
    } else if (numero % 2 == 0) {
        return "Es par";
    } else if (numero % 2 != 0) {
        return "Es inpar";
    } else {
        return "Error";
    }
}