function Peon(color,pos){
    this.color=color;  
    this.pos=pos;
    this.muerto=false;
    this.img="/"

    Peon.prototype.movimiento=function() {
        alert("movimiento del peon")
    }
}

function Caballo(color,pos){
    this.color=color;
    this.pos=pos;
    this.muerto=false;
}

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