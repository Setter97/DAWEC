var hora = 9;
var bolean = true;
var residuo = 0;
for(var i=9; i<=21;i++){
    
    document.write(i);
    document.write("<br>");
    
    if(Number.isInteger(i)){
        i=i+0.30;
        document.write(i);
        document.write("<br>");
        i=i-0.30;
    }
}
//Joel Serrano