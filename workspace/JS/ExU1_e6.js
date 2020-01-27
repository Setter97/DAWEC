
var suma = 0;
for(var i=9; i<=21;){
    if(suma<60){
        document.write("<br>");
        document.write(i+":"+suma);
        suma=suma+5;
    }else{
        suma=0;
        i++;
    } 
}
//Joel Serrano