var array=["Piedra","Papel","Tijeras"]
function cosas(i){
    var cpu=Math.floor(Math.random() * 3);
    if(i==cpu){
        alert("Empate");
    }else if(i==1 && cpu==0){
        alert("Has ganao");
    }else if(i==2 && cpu==1){
        alert("Has ganao");
    }else if(i==0 && cpu==2){
        alert("Has ganado");
    }else{
        alert("Has perdido");
    }
    alert("CPU: "+array[cpu]+"\nPJ: "+array[i]);
}