var arraySocios = []
loadArray();

function Socios(numSocio, dni, nombre, apellidos, fechNacimiento, localidad) {
    this.numSocio = numSocio;
    this.dni = dni;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fechNacimiento = fechNacimiento;
    this.localidad = localidad;
}

//toString de la classe Socis
Socios.prototype.toString = function () {
    return 'Numero de socio: ' + this.numSocio + "\nDNI: " + this.dni + "\nNombre y apellidos: " + this.nombre + " " + this.apellidos + "\nFecha de nacimiento: " + this.fechNacimiento + "\nLocalidad: " + this.localidad;
}

function altaSocio() {

    var numSocio = document.getElementById("numSocio").value;
    var dni = document.getElementById("dni").value;
    var nombre = document.getElementById("name").value;
    var apellidos = document.getElementById("apellidos").value;
    var fecha = document.getElementById("fecha").value;
    var localidad = document.getElementById("localidad").value

    if (numSocio == "" || dni == "" || nombre == "" || apellidos == "" || fecha == "" || localidad == "") {
        alert("Hi ha un dels camps que no hi ha res...")

    } else {
        var socio = new Socios(numSocio, dni, nombre, apellidos, fecha, localidad);

        arraySocios.push(socio);
        saveArray();
        alert("Se ha afegit el soci correctament")

    }

}

function bajaSocio() {
    arraySocios.splice(arraySocios.indexOf(getPos()), 1);

}

function getPos(cadena) {
    if (cadena == null) {
        var usr = prompt("Introduce el numero de socio o el dni");
        var cent = false;
        var i = 0;
        var posFinal = 0;
        do {

            if (usr == arraySocios[i].dni || usr == arraySocios[i].numSocio) {
                cent = true;
                posFinal = i;
            }
            i++
        } while (i < arraySocios.length || !cent);

        if (cent) {
            return posFinal;
        } else {
            return -1;
        }
    } else {
        var arrayCerca = [];
        for (var i = 0; i < arraySocios.length; i++) {
            if (arraySocios[i].localidad == cadena) {
                arrayCerca.push(arraySocios[i]);
            }
        }
        return arrayCerca;
    }

}

function saveArray() {

    var x = JSON.stringify(arraySocios);
    //alert(x);
    document.cookie = "Socios=" + x;
}

function loadArray() {

    var arr = JSON.parse(getCookie('Socios'));
    arraySocios = [];
    for (var i = 0; i < arr.length; i++) {
        arraySocios[i] = new Socios(arr[i].numSocio, arr[i].dni, arr[i].nombre, arr[i].apellidos, arr[i].fechNacimiento, arr[i].localidad)
    }
    //alert(arraySocios);
}

//Creacio de cookies
var createCookie = function (name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

//Obtenir cookies 
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

//Reseteja el array
function resetArray() {
    arraySocios = [];
    document.cookie = "Socios=";
}


//Funcio per modificar la localitat d'un soci
function modificarLocalitat() {
    var i = getPos(null)
    arraySocios[i].localidad = prompt("Introduce la nueva localidad");
}

//Funcio per mostrar les dades dels socis
function detallesSocios() {
    var i = getPos();
    alert(arraySocios[i]);
}

//Funcio que cerca per la localitat desitjada
function mostraPerLocalitat() {
    var cerca = prompt("Per quina localitat vols cercar?");
    document.getElementById('prueba').innerHTML = "";
    var local = getPos(cerca);
    if (local != "") {
        //alert(local);

        var table = document.createElement("table");

        for (var i = 0; i < local.length; i++) {
            var tr = document.createElement("tr");

            for (var j = 0; j < 6; j++) {
                var td = document.createElement("td");
                if (j == 0) {
                    var texto = document.createTextNode(local[i].numSocio);
                } else if (j == 1) {
                    var texto = document.createTextNode(local[i].dni);
                } else if (j == 2) {
                    var texto = document.createTextNode(local[i].nombre);
                } else if (j == 3) {
                    var texto = document.createTextNode(local[i].apellidos);
                } else if (j == 4) {
                    var texto = document.createTextNode(local[i].fechNacimiento);
                } else if (j == 5) {
                    var texto = document.createTextNode(local[i].localidad);
                } else {
                    var texto = document.createTextNode("Error");
                }

                td.appendChild(texto);
                td.style.border = "1px solid black";
                tr.appendChild(td);
            }
            tr.style.border = "1px solid black";
            table.appendChild(tr);
        }
        document.getElementById('prueba').appendChild(table);


    } else {
        alert("Error en la busqueda");
    }
}

//Funcio que retorna la categoria quepertany X soci
function calculaCat(pos) {
    var any = arraySocios[pos].fechNacimiento;

    var data2 = new Date(any).getFullYear();
    var data = new Date().getFullYear();
    var edat = data - data2;

    if (edat >= 11 && edat < 13) {
        return "Benjamin";
    } else if (edat >= 13 && edat < 15) {
        return "Alevin";
    } else if (edat >= 15 && edat < 17) {
        return "Cadete";
    } else if (edat >= 17 && edat < 19) {
        return "Junior";
    } else if (edat >= 19) {
        return "Absoluto";
    } else {
        return "Pre-Benjamin";
    }
}

//Funcio que mostra una taula mb totes les dades de tots els usuaris
function mostrarTaula() {
    document.getElementById('prueba').innerHTML = "";
    var arrayText=["Num socio","DNI","Nombre","Apellidos","Fecha nacimiento","Localidad","Categoria"]
    var table = document.createElement("table");
    for (var i = 0; i < arraySocios.length+1; i++) {
        var tr = document.createElement("tr");
       
        for (var j = 0; j < 7; j++) {
            var td = document.createElement("td");
            if(i==0){
                var texto=document.createTextNode(arrayText[j]);
             
            }else{
                if (j == 0) {
                    var texto = document.createTextNode(arraySocios[i-1].numSocio);
                } else if (j == 1) {
                    var texto = document.createTextNode(arraySocios[i-1].dni);
                } else if (j == 2) {
                    var texto = document.createTextNode(arraySocios[i-1].nombre);
                } else if (j == 3) {
                    var texto = document.createTextNode(arraySocios[i-1].apellidos);
                } else if (j == 4) {
                    var texto = document.createTextNode(arraySocios[i-1].fechNacimiento);
                } else if (j == 5) {
                    var texto = document.createTextNode(arraySocios[i-1].localidad);
                } else if (j == 6) {
                    var texto = document.createTextNode(calculaCat(i-1));
                } else {
                    var texto = document.createTextNode("Error");
                }
            }
            
            td.appendChild(texto);
            td.style.border = "1px solid black"
            tr.appendChild(td);
        }
        table.appendChild(tr);

    }
    document.getElementById('prueba').appendChild(table);
}