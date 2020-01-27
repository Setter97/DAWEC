var num=prompt("Introdueix el numero del teu DNI");
var resto=0;
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q','V', 'H', 'L', 'C', 'K', 'E', 'T'];

if(num>0 && num<99999999){
    resto=num%23;
    alert(num+""+letras[resto]);
}else{
    alert("Error en el numero");
}
//Joel Serrano