function calculaDies(){
    var vIntro=document.getElementById("U2e1").value;
    var dateIntro=new Date(vIntro);
    var dFinCurso=new Date(new Date().getFullYear()+1+"/06/24");
    var cont=(dFinCurso-dateIntro)/1000;
    
    cont=cont/60;
    cont=cont/60;
    cont=cont/24;
    
    if(cont==1){
        alert("Falta "+cont+" dia per acabar el curs!")
    }else if(cont==0){
        alert("Avui acaba el curs!")
    }else{
        alert("Falten "+cont+" dies per acabar el curs!")
    }
}

function calculaDomingos(){
    var valor=document.getElementById("U2e2").value;
    var dataNeixament=new Date(new Date().getFullYear()+"/"+valor);
    var anys="";
    for(var i=dataNeixament.getFullYear();i<2100;i++){
        if(dataNeixament.getDay()==0){
           anys=anys+dataNeixament.getFullYear()+"\n"; 
        }
        dataNeixament.setFullYear(i);
    }
    alert(anys);
}

function formatData(){
    var valor=document.getElementById("U2e3").value;
   
    var arrayDies=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    var arrayDays=["sunday","monday","tuesday","wendsday","thursday","friday","saturday"];
    var arrayMeses=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","setiembre","octubre","noviembre","diciembre"];
    var arrayMonth=["january","february","march","april","may","june","july","august","september","october","november","december"];

    var data=new Date(new Date().getFullYear()+"/"+valor);
    
    var data1=""+data.getDate()+"/"+data.getMonth()+"/"+data.getFullYear()
    var data2=""+arrayDies[data.getDay()]+", "+data.getDate()+" de "+arrayMeses[(data.getMonth())]+" de "+data.getFullYear();
    var data3=""+arrayDays[data.getDay()]+", "+arrayMonth[(data.getMonth())]+" "+data.getDate()+", "+data.getFullYear();
    
    alert(data1+"\n"+data2+"\n"+data3);
}

function mostraHora(){
    var ara=new Date();
    var minuts
    if(ara.getMinutes()<10){
        minuts="0"+ara.getMinutes();
    }else{
        minuts=ara.getMinutes();
    }

    if(document.getElementById("simplificada").checked){

        if(ara.getHours()>12){
            alert((ara.getHours()-12)+":"+minuts+" PM")
        }else{
            alert(ara.getHours()+":"+minuts+" AM")
        }
    }else{
        alert(ara.getHours()+":"+minuts+":"+ara.getSeconds());
    }
    
}

function math(){
    var resultat
    if(document.getElementById("U2e5").value==1){
        var base=prompt("Introdueix el numero base");
        var exp=prompt("Introdueix el numero exponent");
        alert("La potencia "+base+" elevado a "+exp+" es: "+Math.pow(base,exp));

    }else if(document.getElementById("U2e5").value==2){
        var raiz=prompt("Introdueix el numero per fer l'arrel");
        alert("La raiz de "+raiz+" es: "+Math.sqrt(raiz));

    }else if(document.getElementById("U2e5").value==3){
        var num=prompt("Introdueix un valor decimal:")
        alert(Math.round(num));
    }else{
        var angle=prompt("Introdueix un angel de 0 a 360 ")
        if(angle>=0 && angle<361){
            alert("Seno: "+Math.sin(Math.PI/angle)+"º\nCoseno: "+Math.cos(Math.PI/angle)+"º\nTangent: "+Math.tan(Math.PI/angle))
        }
    }
}

function figures(){

    if(document.getElementById("circulo").checked){
        var radio=prompt("Introduce el radio del circulo: ");
        var diametro=radio*2;
        var perimetro=Math.PI*diametro;
        var area=Math.PI*Math.pow(radio,2);
        var areaEsfera=4*Math.PI*Math.pow(radio,2);
        var volumen=(4/3)*Math.PI*Math.pow(radio,3);
        alert(
            "Radio: "+radio+"\n"+
            "Diametro: "+diametro+"\n"+
            "Perimetro: "+perimetro+"\n"+
            "Area: "+area+"\n"+
            "Area esfera: "+areaEsfera+"\n"+
            "Volumen esfera: "+volumen+"\n"
        );

    }else if(document.getElementById("rectangulo").checked){
        var altura=prompt("Introdueix l'altura del rectangle: ");
        var base=prompt("Introdueix la base del rectangle: ");
        var area=altura*base;
        var perimetre=((altura*2)+(base*2));
        alert("Area: "+area+"\nPerimetre: "+perimetre);

    }else if(document.getElementById("triangulo").checked){
        var costat=prompt("Introdueix el valor del costat del triangle: ");
        var altura=(Math.sqrt(3)/2)*costat;
        var area=altura*(costat/2);
        var perimetre=costat*3;
        alert("Area: "+area+"\nPerimetre: "+perimetre);

    }else if(document.getElementById("cuadrado").checked){
        var costat=prompt("Introdueix el valor del costat del Quadrat: ");
        var area=costat*costat
        var perimetre=costat*4;
        alert("Area: "+area+"\nPerimetre: "+perimetre);

    }else{
        
    }
}

function number(){
    var numero=prompt("Introduce un numero entero: ");
    var obj=new Number(numero);

    alert(
    obj.toExponential()+"\n"+
    obj.toFixed(4)+"\n"+
    (obj).toString(2)+"\n"+
    (obj).toString(8)+"\n"+
    (obj).toString(16));
}

function nombreapellidos(){
    var nombre =prompt("Introduce tu nombre y apellidos:");
    var split=nombre.split(" ")
    alert(nombre.replace(" ","").length+"\n"+
    nombre.toUpperCase()+"\n"+
    nombre.toLowerCase()+"\n"+
    "Nombre: "+split[0]+"\n"+
    "Apellido 1: "+split[1]+"\n"+
    "Apellido 2: "+split[2]);
}