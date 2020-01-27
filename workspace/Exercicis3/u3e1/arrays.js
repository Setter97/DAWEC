var array=['g','d','z','x','r','p','k'];
var array2=array;

var info="<p>Numero de elementos:"+array.length+" </p><p>Todos los elementos: "+array+"</p><p>Sentido inverso:"+array.reverse()+" </p><p>Ordenados alfabeticamente: "+array2.sort()+"</p>";
array.unshift("y");

info=info+"<p>Elemento añadido al principio 'y': "+array+"</p>"
array.push("a");
info=info+"<p>Elemento añadido al final 'a': "+array+" </p>";
array.shift();
info=info+"<p>Elemento borrado al principio 'y' : "+array+"</p>";
array.pop();
info=info+"<p>Elemento borrado del final: 'a': "+array+"</p><p>Elemento añadido al principio: </p>";
document.getElementById('cosa').innerHTML=info;

function index(){
    var i=document.getElementById("index").value;
    if(i<=array.length){
        document.getElementById("mostraIndex").innerHTML=array[i];
    }else{
        document.getElementById("mostraIndex").innerHTML="Index incorrecte";
    }
}

function search(){
    var info="";
    var centinela=false;
    var lletra=document.getElementById("search").value;
    for(var i=0;i<array.length;i++){
        if(array[i]==lletra){
            info=info+" "+i;
            centinela=true;
        }
    }
    if(centinela)document.getElementById("mostraCerca").innerHTML=info;
    else document.getElementById("mostraCerca").innerHTML="No se ha trobat";
}

function range(){
    var rang=""+document.getElementById("rang").value;
    var num=rang.split(" ");
    alert(array.slice(num[0],num[1]));
}
    