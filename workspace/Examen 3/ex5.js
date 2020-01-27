var cumple=prompt("Introduce tu cumpleaños sin el año. Asi por ejemplo: 04/19 ");
var date=new Date()

for(var i=date.getFullYear();i<=2100;i++){
    var date2=new Date(i+'/'+cumple);
    if(date2.getDay()==2){
        document.write(i+"<br>");
    }
}