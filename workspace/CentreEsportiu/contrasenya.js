function superContraseña() {

    var input = "" + document.getElementById("pwd").value;

    if (input.length >= 8) {
        if (input.match(/[A-Z]+/)) {
            if (input.match(/[a-z]+/)) {
                if (input.match(/[0-9]+/)) {
                    if (input.match(/[!,\.\-\_\$\@]+/)) {
                        alert("Ets creat una super contrasenya");
                    } else {
                        alert("Un caracter especial estaria be per la teva contrasenya");
                    }
                } else {
                    alert("Posa algun numero per aumentar la seguretat")
                }
            } else {
                alert("Tens que posar minuscules")
            }
        } else {
            alert("Tens que posar majuscules")
        }
    } else {
        alert("Vaya caca de contrasenya no te ni 8 caracters!")
    }
}