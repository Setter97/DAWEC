var cadena=prompt("Introdueix una cadena:");
palindromes(cadena);

function palindromes(cad){
    cad=cad.toLowerCase().replace(/ /g,"");
    var reverse=cad;
    reverse= reverse.split("").reverse().join("");
    if(cad==reverse){
        alert("Son palindromes");
    }else{
        alert("No son palindromes");
    }
}
//La ruta nos aporto otro paso natural
//Joel Serrano