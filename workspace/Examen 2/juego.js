//Variables globals.
var nom="";
var puntuacioCPU=0;
var puntuacioJ1=0;
var primeraVegada=true;

//Metodes del joc.

//Nomes s'utilitza si jugues en mode text.
function juego(){
    if(primeraVegada){
        nom=prompt("Introdueix el teu nom: ");
        primeraVegada=false;
    }
    
    var paraula=prompt("Que opcion escoges? ");
    buscaEleccion(paraula);
}

//Nomes s'utilitza si jugues en mode text. Aquest metode serveix per cercar la primera paraula clau.
function buscaEleccion(paraula){
    
    paraula=paraula.toLowerCase();
    var array=paraula.split(" ");
    var trobat=false;
    var i=0;
    var primera="";
    do{
        if(array[i]=="papel" || array[i]=="piedra" || array[i]=="tijeras" || array[i]=="lagarto" ||array[i]=="spock"){
            trobat=true;
            primera=array[i];
        }
        i++;
    }while(!trobat && i<array.length);

   if(!trobat){
        alert("No se ha trobat cap paraula");
        juego();
   }else{
       empiezaJuego(primera,0);
   }
    
}

//Metode on es realitza la comprobació del qui guanya i el que perd, i realitza el numero random.
//El ID serveix per identificar si ha entrat al metode amb text o amb un boto. Aixi en cas de que l'usuari pitji el boto grafic i 
// despres el boto text la seva partida continuara amb mode text i no demanara el nom una altra vegada.
function empiezaJuego(primera,id){
    
    var arrayParaules=["papel","piedra","tijeras","lagarto","spock"];
    var random=Math.floor(Math.random()*5);
    var cpu=arrayParaules[random];

    if(id==1){
        primeraVegada=false;
    }
    alert("Has escogido "+primera+" y la maquina escogio "+cpu);

    if(primera==cpu){
        alert("Empate");

    }else if(primera=="papel" && cpu=="piedra" || primera=="papel" && cpu=="spock" || primera=="piedra" && cpu=="lagarto" || primera=="piedra" && cpu=="tijeras" || primera=="tijeras" && cpu=="papel" || primera=="tijeras" && cpu=="lagarto" || primera=="lagarto" && cpu=="spock" || primera=="lagarto" && cpu=="papel" || primera=="spock" && cpu=="tijeras" || primera=="spock" && cpu=="piedra"){
        puntuacioJ1++;
        alert("Has ganado la ronda!!!\nResultado: "+puntuacioJ1+"-"+puntuacioCPU);

    }else{
        puntuacioCPU++;
        alert("Has perdido la ronda!!!\nResultado: "+puntuacioJ1+"-"+puntuacioCPU);
    }

    if(puntuacioJ1<3 && puntuacioCPU<3){
        if(id==0){
            juego();
        }
    }else if(puntuacioJ1==3 && puntuacioCPU<3){
        alert("Has guanyat a la cpu");
        alert(nom+": "+puntuacioJ1+"\nCPU: "+puntuacioCPU);
        puntuacioCPU=0;
        puntuacioJ1=0;
    }else{
        alert("Ets perdut");
        alert(nom+": "+puntuacioJ1+"\nCPU: "+puntuacioCPU);
        puntuacioCPU=0;
        puntuacioJ1=0;
    }
}

function creaGrafic(){
    nom=prompt("Introdueix el teu nom: ");
    //Crea botons en el HTML
    document.getElementById("botones").innerHTML="<button type='button' onclick=empiezaJuego('papel',1)>Papel</button> <button type='button' onclick=empiezaJuego('piedra',1)>Piedra</button> <button type='button' onclick=empiezaJuego('tijeras',1)>Tijeras</button> <button type='button' onclick=empiezaJuego('lagarto',1)>Lagarto</button> <button type='button' onclick=empiezaJuego('spock',1)>Spock</button>";
}