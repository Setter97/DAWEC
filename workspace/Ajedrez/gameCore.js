
//Clases para la creacion de los objetos


//Clase peon
function Peon(color,pos){
    this.name="peon"
    this.color=color;  
    this.pos=pos;
    this.muerto=false;
    this.img="/"
}

Peon.prototype.toString=function (){
    return this.name+" "+this.color
}
Peon.prototype.movimiento=function() {
    alert("movimiento del peon")
}




//Clase caballo
function Caballo(color,pos){
    this.color=color;
    this.pos=pos;
    this.muerto=false;
}




//Clase alfil
function Alfil(color,pos){
    this.color=color;
    this.pos=pos;
    this.muerto=false;
}





function Rei(color,pos){
    this.color=color;
    this.pos=pos;
    this.muerto=false;
}

function Reina(color,pos){
    this.color=color;
    this.pos=pos;
    this.muerto=false;
}

function Torre(color,pos){
    this.color=color;
    this.pos=pos;
    this.muerto=false;
}





//Variables generales para guardar objetos
let piezasNegras=new Array()
let piezasBlancas=new Array()






//Funciones generales para el funcionamiento del ajedrez
function crearTablero(){
    let table=document.createElement("table");
    table.border="1px solid black"
    for(let j=1;j<9;j++){
        let tr=document.createElement("tr")
        for(let i=1;i<9;i++){
            let td=document.createElement("td");
            let div=document.createElement("div")
            div.id=j+""+i
            div.className=j+""+i
            if(j%2!=0){
                if(i%2!=0){
                    div.style="background:#000000;height:100px;width:100px;"
                }else{
                    div.style="background:#ffffff;height:100px;width:100px;"
                }  
            }else{
                if(i%2==0){
                    div.style="background:#000000;height:100px;width:100px;"
                }else{
                    div.style="background:#ffffff;height:100px;width:100px;"
                }
            }  
            td.appendChild(div)
            tr.appendChild(td);
        }
        table.appendChild(tr)
    } 
    $(".tablero").append(table);  
}

function crearPiezas(){
    //Piezas blancas
    //Peones
    for(let i=7;i<8;i++){
        for(let j=1;j<9;j++){
            piezasBlancas.push(new Peon("blanco",i+""+j))
        }
    }

    //Piezas negras
    //Peones
    for(let i=1;i<2;i++){
        for(let j=1;j<9;j++){
            piezasNegras.push(new Peon("negro",i+""+j))
        }
    }
}

//GAMECORE
crearPiezas()
crearTablero()

//alert(piezasBlancas.length)
//alert(piezasNegras.length)