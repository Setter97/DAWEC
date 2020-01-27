var dado=Math.floor(Math.random()*6)+1;
var dado2=Math.floor(Math.random()*6)+1;

var arrayDado=[];
for(var i=0;i<100;i++){
    var dado=Math.floor(Math.random()*6)+1;
    var dado2=Math.floor(Math.random()*6)+1;
    var resultat=dado+dado2;
    arrayDado.push(resultat);
}

var info="";
for(var i=0;i<=12;i++){
    if(i!=0){
        info=info+cont+" veces "+i +" / ";
    }
    
    var cont=0;
   for(var j=0;j<arrayDado.length;j++){
       if(i==arrayDado[j]){
        cont++;
       }
   }
}
document.write(info);