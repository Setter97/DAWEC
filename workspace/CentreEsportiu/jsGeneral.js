function calculaIMC() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var resultado = peso / (altura * altura);
    switch (true) {
        case resultado < 16.00:
            document.getElementById("calculadora").innerHTML = "Delgadez severa";
            break;
        case (resultado > 16.00 && resultado < 16.99):
            document.getElementById("calculadora").innerHTML = "Delgadez moderada";
            break;
        case (resultado > 17.00 && resultado < 18.49):
            document.getElementById("calculadora").innerHTML = "Delgadez aceptable";
            break;
        case (resultado > 18.50 && resultado < 24.99):
            document.getElementById("calculadora").innerHTML = "Peso Normal";
            break;
        case (resultado > 25.00 && resultado < 29.99):
            document.getElementById("calculadora").innerHTML = "Sobrepeso";
            break;
        case (resultado > 30.00 && resultado < 34.99):
            document.getElementById("calculadora").innerHTML = "Obeso: Tipo I";
            break;
        case (resultado > 35.00 && resultado < 40.00):
            document.getElementById("calculadora").innerHTML = "Obeso: Tipo II";
            break;
        case (resultado > 40.00):
            document.getElementById("calculadora").innerHTML = "Obeso: Tipo III";
            break;
    }
}

function calculaFMC() {
    var edat = document.getElementById("edat").value;
    var resultado = 0;
    if (document.getElementById("home").checked) {
        resultado = (220 - edat);
    } else if (document.getElementById("dona").checked) {
        resultado = 225 - edat;
    } else {
        resultado = "Error";
    }
    document.getElementById("fmc").innerHTML = "FMC: " + resultado;
}

function calculaCat() {
    var any = document.getElementById("any").value;
    var data = new Date().getFullYear();
    var edat = data - any;

    if (edat >= 11 && edat < 13) {
        document.getElementById("cat").innerHTML = "Benjamin";
    } else if (edat >= 13 && edat < 15) {
        document.getElementById("cat").innerHTML = "Alevin";
    } else if (edat >= 15 && edat < 17) {
        document.getElementById("cat").innerHTML = "Cadete";
    } else if (edat >= 17 && edat < 19) {
        document.getElementById("cat").innerHTML = "Junior";
    } else if (edat >= 19) {
        document.getElementById("cat").innerHTML = "Absoluto";
    } else {
        document.getElementById("cat").innerHTML = "Pre-Benjamin";
    }
    //alert(edat);
}

function horario() {
   
    var arrayDias=["Lunes","Martes","Mircoles","Jueves","Viernes"];
    var arrayFinde=["Lunes","Martes","Mircoles","Jueves","Viernes","Sabado","Domingo"];
    var hora=9;
    var table = document.createElement('table');
    
    for (var i=0; i < 4; i++) {
        var tr = document.createElement('tr');
        if(i!=0 && i!=1){
           hora=hora+2
        }

        for (var j = 0; j < 5; j++) {
            
            var td = document.createElement('td');
            
            if(i==0){
                 var text = document.createTextNode(arrayDias[j]);
            }else{
                 var text = document.createTextNode(hora+":00 - "+(hora+2)+":00");
            }
           
            
            td.style.border="1px solid";
            td.style.textAlign="center";
            
            td.appendChild(text);
            tr.appendChild(td);
        }
        table.style.border="1px solid";
        
        table.appendChild(tr);
    }
    
    //document.body.appendChild(table);
    document.getElementById('horario').appendChild(table);
    document.getElementById('horario').appendChild(document.createElement("br"));
    //document.body.appendChild(document.createElement("br"));
    
    //Nova Taula de tarda---------------------------------------
    
    var table2 = document.createElement('table');
    hora=hora+3;
    for (var i=0; i < 5; i++) {
        var tr = document.createElement('tr');
        if(i!=0 && i!=1){
           hora=hora+1
        }

        for (var j = 0; j < 7; j++) {
            
            var td = document.createElement('td');
            
            if(i==0){
                 var text = document.createTextNode(arrayFinde[j]);
            }else{
                 var text = document.createTextNode(hora+":00 - "+(hora+1)+":00");
            }
           
            td.style.border="1px solid";
            td.style.textAlign="center";
            
            td.appendChild(text);
            tr.appendChild(td);
        }
        table2.style.border="1px solid";
        
        table2.appendChild(tr);
    }
    
    //div.appendChild(table2);
    document.getElementById('horario').appendChild(table2);
    //document.body.appendChild(table2);
}