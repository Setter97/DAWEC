let arrayColors=["Amarillo","Rojo","Azul","Verde"]
let arrayUsr=[];
let arrayCPU=[]
let nom="";
let tirada=0;
let numTiradesMax=10;

let divRes=document.getElementById('startReset');
let reset=document.createElement('button');
reset.addEventListener('click',resetArrays);
reset.appendChild(document.createTextNode("Reset"));
//reset.innerText="sadsadsds"
divRes.appendChild(reset);


let start=document.createElement('button');
start.addEventListener('click',cpuIA);
start.appendChild(document.createTextNode("Start"));
divRes.appendChild(start);

for(let i=0;i<4;i++){
    let button=document.createElement("button");
    button.addEventListener('click',colorPulsat)
    button.className=arrayColors[i];
    button.appendChild(document.createTextNode(arrayColors[i]));
    document.getElementById("joc").appendChild(button);
}

function colorPulsat(){
    arrayUsr.push(this.className);

    if(tirada==arrayUsr.length){
        comprova();
        arrayUsr=[];
    }
    
    //alert(arrayUsr);
}

//Reseteja es joc
function resetArrays(){
    arrayUsr=[];
    arrayCPU=[];
    document.getElementById('error').innerText=" "
    document.getElementById('resposta').innerText=" "
    nom="";
    tirada=0;
}


//crea random de la CPU
function cpuIA(){
    let random=0;
    tirada++;
    random=Math.floor(Math.random()*4);
    //arrayCPU.push(random);
    arrayCPU.push(arrayColors[random])
    canviaTitol(arrayColors[random]);
}

function canviaTitol(nom2){
    nom+=nom2+", ";
    document.getElementById('resposta').innerText=" "+nom
    
}

function comprova(){
    let centinela=true;
    let i=0;

    for(let i=0;i<tirada;i++){
        if(arrayUsr[i]!=arrayCPU[i]){
            centinela=false;
        }
    }
    if(centinela){
        
        if(tirada==numTiradesMax){
            alert('Ets guanyat');
        }else{
            cpuIA();
        }
    }else{
        alert('Ets perdut');
        document.getElementById('error').innerText='Te has equivocado, los colores eran: \n'+arrayCPU+'\n y tu has pulsado:\n'+arrayUsr;
        //resetArrays();
    }
}