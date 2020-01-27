var copiaFinestra;
var nom;

function openWindow(){
    var finestra=window.open("");
    copiaFinestra=finestra;
    finestra.document.write("<h3>Ejemplo de ventana nueva</h3>");
    finestra.document.write("<p>URL Completa: "+finestra.location.pathname +"</p>");
    finestra.document.write("<p>Protocolo utilizado: "+finestra.location.protocol +"</p>");
    finestra.document.write("<p>Nombre en codigo del navegador: "+finestra.navigator.appCodeName +"</p>");
    if(finestra.navigator.javaEnabled()) finestra.document.write("<p>Java SI disponible en esta ventana</p>");
    else finestra.document.write("<p>Java NO disponible en esta ventana</p>");

    finestra.document.write('<iframe src="https://www.google.es"></iframe>');
    var nom=prompt("Introdueix el teu nom:");
    var llinatge=prompt("Introdueix el teu llinatge:");
    var dia=prompt("Introdueix el teu dia de neixament:");
    var mes=prompt("Introdueix el teu mes de neixament:");
    var any=prompt("Introdueix el teu any de neixament:");
    var nombrecompleto=nom+" "+llinatge;

    document.write("Buenos dias "+nom+" "+llinatge);
    document.write("<br>")
    document.write("Tu nombre tiene "+nombrecompleto.length()+" , incluidos espacios.");
    document.write("<br>")
    
    document.write("La primera A de tu nombre esta en la posicion "+nombrecompleto.indexOf('A'));
    document.write("<br>")
    document.write("Tu nombre sin las tres primeras letras es: "+nombrecompleto.substring(3,nombrecompleto.length));
    document.write("<br>")
    document.write("Tu nombre todo en mayusculas: "+nombrecompleto.toUpperCase());
    document.write("<br>")
    var data=new Date(any+"/"+mes+"/"+dia);
    var actual=new Date();
    var edad=actual.getFullYear()-data.getFullYear()
    document.write("Tu edad es"+edad+"años");
    document.write("<br>")
    document.write("El coseno de 180 es "+Math.cos(180));
    document.write("<br>")
    var array=[34,67,23,75,35,19]
    array.sort((a,b)=>b>a)
    document.write("El numero mayor de (34,67,23,75,35,19) es: "+array[0]);
    document.write("<br>")
    document.write("Ejemplo de numero al azar: "+Math.floor(Math.random()*1000));
}


