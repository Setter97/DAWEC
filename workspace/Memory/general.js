let srcColores=["img/Amarillo.png","img/Azul.png","img/Beige.png","img/Cian.png","img/Gris.png","img/Morado.png","img/Naranja.png","img/Rojo.png","img/Rosa.png","img/Verde.png"];
let arrayPosiciones=[];
let arrayAlt=[];
let randomArray=[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
let centinela=false;
let pos=0;
let puntuacio=0;

//Crea la taula del memory
{
    let table=document.createElement("table");
    
    for(let i=0;i<4;i++){
        let tr=document.createElement("tr");
        for(let j=0;j<5;j++){
            let td=document.createElement("td");
            let img=document.createElement("img");
            img.src="img/Negro.png";
            img.id=`${i}${j}`
            img.alt=randomCore();
            img.addEventListener("click",canviaColor);
            td.appendChild(img);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.getElementById("taula").appendChild(table)
}

//Canvia es color de sa targeta
function canviaColor(){
    
    this.src=srcColores[this.alt];
    arrayPosiciones.push(this.id);
    arrayAlt.push(this.alt)
    
    if(arrayPosiciones.length>=2){window.setTimeout(comprova,500);}
}

//Comprova que les dues cartes que ha seleccionat son del mateix color
function comprova(){
    let parella=arrayAlt[0]==arrayAlt[1];
    if(!parella){

        let i=0;
        do{
            document.getElementById(arrayPosiciones[i]).src="img/Negro.png";
            i++
        }while(i<arrayPosiciones.length)

        arrayAlt=[];
        arrayPosiciones=[];

    }else{
        puntuacio++;
        document.getElementById("puntuacio").innerHTML=`Puntuació: ${puntuacio}`;
        arrayAlt=[];
        arrayPosiciones=[];
        if(puntuacio==10){
            alert("Ja has guanyat");
        }
    }
}

//Nucli del random
function randomCore(){
    let random;
    do{
        centinela=false;
        random=Math.floor(Math.random()*20);
        for(let i=0;i<randomArray.length;i++){
            if(randomArray[random]!="X"){
                pos=randomArray[random];
                randomArray[random]="X";
                return pos;
            }
        }

    }while(!centinela ||i<randomArray.length);
}

function guardaRecord() {

    let x = "temps"
    
    document.cookie = "Temps=" + x;
}

function carregaRecord() {
    let x=document.cookie.indexOf("Temps"+"=")
}