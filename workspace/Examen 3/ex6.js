var nom=prompt("Introduce tu nombre: ");
document.write("El tamany del nom mes els connoms: "+nom.length+"<br>");
document.write("Cadena en mayusculas: "+nom.toUpperCase()+"<br>");
document.write("Cadena en minusculas: "+nom.toLowerCase()+"<br>");
var arrayNom=nom.split(" ");
document.write("Nombre: "+arrayNom[0]+"<br> Apellido 1: "+arrayNom[1]+"<br> Apellido 2 "+arrayNom[2]);