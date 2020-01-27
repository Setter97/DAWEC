var num = "";
var resto = 0;
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

function numero(id) {
    num = num + "" + id;
   
    document.getElementById("botones").innerHTML=num;
}

function calcula() {
    num=parseInt(num);
    if (num > 0 && num < 99999999) {
        resto = num % 23;
        document.getElementById("botones").innerHTML = (num + "" + letras[resto]);
        num="";
    } else {
        document.getElementById("botones").innerHTML = "Error en el numero";
        num="";
    }

}
//Joel Serrano