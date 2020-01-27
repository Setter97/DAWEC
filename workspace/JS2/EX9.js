var paraulaSuperSecreta = "hola que tal";
var paraulaArray = paraulaSuperSecreta.split("");
var paraulaGuions = paraulaSuperSecreta.replace(/[a-z]/g, '-').split("");
var vidas=10;

function introducirLetra() {
    var lletra = document.getElementById("letra").value;
    var num=0;
    if (paraulaSuperSecreta.includes(lletra)) {
        for (var i = 0; i < paraulaSuperSecreta.length; i++) {

            if (paraulaArray[i] == lletra) {
                paraulaGuions[i] = lletra;
            }
            if(paraulaGuions[i]==paraulaArray[i]){
                num++
            }
        }
        if(num==paraulaSuperSecreta.length){
            alert("Has guanyat");
        }
    }else{
        vidas--;
    }

    if(vidas==0){
        alert("Ets perdut");
    }
    document.getElementById('palabra').innerHTML = paraulaGuions;
    document.getElementById("errores").innerHTML= "Vidas: " +vidas;
}