//Variables generales para guardar objetos
let piezasNegras=new Array()
let piezasBlancas=new Array()
let ultimaPieza;



//Clases para la creacion de los objetos


//Clase peon
function Peon(color,pos){
    this.name="peon "+color
    this.color=color;  
    this.pos=pos;
    this.muerto=false;

    if(color=="negro"){
        this.img="img/peonNegro.tiff"
    }else{
        this.img="img/peonBlanco.tiff"
    }
    
}

Peon.prototype.toString=function (){
    return this.name+" "+this.color
}
Peon.prototype.movimiento=function() {
    

    if(ultimaPieza==this){
        alert("asdsad")
    }else{
        if(ultimaPieza==null){
            alert("es null")
            ultimaPieza=this;
        }else{
            alert("no es null")
        }
    }
    console.log("movimiento del peon")
}



//Clase caballo
function Caballo(color,pos){
    this.name="caballo "+color
    this.color=color;  
    this.pos=pos;
    this.muerto=false;


    if(color=="negro"){
        this.img="img/caballoNegro.tiff"
    }else{
        this.img="img/caballoBlanco.tiff"
    }
}
Caballo.prototype.toString=function (){
    return this.name+" "+this.color
}
Caballo.prototype.movimiento=function () { 
    console.log("movimiento del cabasho")
 }


//Clase alfil
function Alfil(color,pos){
    this.name="caballo "+color
    this.color=color;  
    this.pos=pos;
    this.muerto=false;


    if(color=="negro"){
        this.img="img/alfilNegro.tiff"
    }else{
        this.img="img/alfilBlanco.tiff"
    }
}
Alfil.prototype.toString=function (){
    return this.name+" "+this.color
}
Alfil.prototype.movimiento=function () { 
    console.log("movimiento del alfil")
 }




function Rei(color,pos){
    this.name="rei "+color
    this.color=color;  
    this.pos=pos;
    this.muerto=false;


    if(color=="negro"){
        this.img="img/reiNegro.tiff"
    }else{
        this.img="img/reiBlanco.tiff"
    }
}
Rei.prototype.toString=function (){
    return this.name+" "+this.color
}
Rei.prototype.movimiento=function () { 
    console.log("movimiento del rei")
 }



function Reina(color,pos){
    this.name="caballo "+color
    this.color=color;  
    this.pos=pos;
    this.muerto=false;


    if(color=="negro"){
        this.img="img/reinaNegro.tiff"
    }else{
        this.img="img/reinaBlanco.tiff"
    }
}
Reina.prototype.toString=function (){
    return this.name+" "+this.color
}
Reina.prototype.movimiento=function () { 

    console.log("movimiento de la reina")
 }


function Torre(color,pos){
    this.name="caballo "+color
    this.color=color;  
    this.pos=pos;
    this.muerto=false;


    if(color=="negro"){
        this.img="img/torreNegro.tiff"
    }else{
        this.img="img/torreBlanco.tiff"
    }
}
Torre.prototype.toString=function (){
    return this.name+" "+this.color
}
Torre.prototype.movimiento=function () { 
    console.log("movimiento de la torre")
 }




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
                    div.style="background:#ffffff;height:60px;width:60px;"
                }else{
                    
                    div.style="background:#837490;height:60px;width:60px;"
                }  
            }else{
                if(i%2==0){
                    div.style="background:#ffffff;height:60px;width:60px;"
                }else{
                    
                    div.style="background:#837490;height:60px;width:60px;"
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
    //Peones
        for(let j=1;j<9;j++){
            //Peones blancos
            piezasBlancas.push(new Peon("blanco","2"+j))
            //Peones negros
            piezasNegras.push(new Peon("negro","7"+j))
        }

        piezasBlancas.push(
            new Torre("blanco","11"),
            new Torre("blanco","18"),
            new Caballo("blanco","12"),
            new Caballo("blanco","17"),
            new Alfil("blanco","13"),
            new Alfil("blanco","16"),
            new Rei("blanco","15"),
            new Reina("blanco","14")
            )

        piezasNegras.push(
            new Torre("negro","71"),
            new Torre("negro","78"),
            new Caballo("negro","72"),
            new Caballo("negro","77"),
            new Alfil("negro","73"),
            new Alfil("negro","76"),
            new Rei("negro","74"),
            new Reina("negro","75")
            )

        //Colocacion de las piezas
        piezasBlancas.map(pieza=>{
            let img=document.createElement('img')
            img.src=pieza.img
            img.addEventListener('click',pieza.movimiento)
            img.width=60            
            $("."+pieza.pos).append(img)
        })

        piezasNegras.map(pieza=>{
            let img=document.createElement('img')
            img.src=pieza.img
            img.width=60
            img.addEventListener('click',pieza.movimiento)            
            $("."+pieza.pos).append(img)
        })
    
}

//GAMECORE
crearTablero()
crearPiezas()