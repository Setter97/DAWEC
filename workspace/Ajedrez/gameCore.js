//Variables generales para guardar objetos
let piezasNegras = new Array();
let piezasBlancas = new Array();
let ultimaPieza;

//Clases para la creacion de los objetos

//Clase peon
function Peon(color, pos) {
  this.name = "peon " + color;
  this.color = color;
  this.pos = pos;
  this.muerto = false;
  this.firstMove = true;

  if (color == "negro") {
    this.img = "img/peonNegro.png";
  } else {
    this.img = "img/peonBlanco.png";
  }
}

Peon.prototype.toString = function() {
  return this.name + " " + this.color;
};
Peon.prototype.movimiento = function() {
  ultimaPieza = this;
  let posicion = this.pos;

  if (this.firstMove) {
    this.firstMove = false;

    $(`.`+this.pos)
      .find("img")
      .remove();

    if (this.color == "negro") {
      this.pos = parseInt(this.pos) - 20;
    } else {
      this.pos = parseInt(this.pos) + 20;
    }

    let img = document.createElement("img");
    img.src = this.img;
    img.width = 60;
    let esteObjeto=this;
      $(img).click(function() {
        alert(esteObjeto.pos)
        esteObjeto.movimiento()
       
      });
    
    $("." + this.pos).append(img);
  }else{
    $(`.`+this.pos)
      .find("img")
      .remove();

    if (this.color == "negro") {
      this.pos = parseInt(this.pos) - 10;
    } else {
      this.pos = parseInt(this.pos) + 10;
    }

    let img = document.createElement("img");
    img.src = this.img;
    img.width = 60;

    
    let esteObjeto=this;
    $(img).click(function() {
      alert(esteObjeto.pos)
      esteObjeto.movimiento()
     
    });
    
    $("." + this.pos).append(img);
  }

  /*
  if (ultimaPieza == this) {
    alert("has seleccionado la misma pieza");
  } else {
    if (ultimaPieza == null) {
      //alert("has seleccionado esta pieza");
      ultimaPieza = this;
      let posicion = this.pos;


      if (this.firstMove) {
        $('.'+this.pos).find("img").remove()
        
        if(this.color=="negro"){
            this.pos = parseInt(this.pos)-20;
        }else{
            this.pos = parseInt(this.pos)+20;
        }
        

        let img = document.createElement("img");
        img.src = this.img;
        img.width = 60;

        $(img).click(function() {
          ultimaPieza.movimiento();
        });
        $("." + this.pos).append(img);

      }else{
        $('.'+this.pos).find("img").remove()
      
        if(this.color=="negro"){
            this.pos = parseInt(this.pos)-10;
        }else{
            this.pos = parseInt(this.pos)+10;
        }

        let img = document.createElement("img");
        img.src = this.img;
        img.width = 60;

        $(img).click(function() {
          ultimaPieza.movimiento();
        });
        $("." + this.pos).append(img);
      }


    } else {
      //alert("has seleccionado otra pieza");
      ultimaPieza = this;

      if (this.firstMove) {
        $('.'+this.pos).find("img").remove()

        if(this.color=="negro"){
            this.pos = parseInt(this.pos)-20;
        }else{
            this.pos = parseInt(this.pos)+20;
        }

        let img = document.createElement("img");
        img.src = this.img;
        img.width = 60;

        $(img).click(function() {
          ultimaPieza.movimiento();
        });
        $("." + this.pos).append(img);

      }else{
          alert(this.pos)
        $('.'+this.pos).find("img").remove()
      
        if(this.color=="negro"){
            this.pos = parseInt(this.pos)-10;
        }else{
            this.pos = parseInt(this.pos)+10;
        }

        let img = document.createElement("img");
        img.src = this.img;
        img.width = 60;

        $(img).click(function() {
          ultimaPieza.movimiento();
        });
        $("." + this.pos).append(img);
      }
    }
  }*/
  console.log("movimiento del peon");
};

//Clase caballo
function Caballo(color, pos) {
  this.name = "caballo " + color;
  this.color = color;
  this.pos = pos;
  this.muerto = false;

  if (color == "negro") {
    this.img = "img/caballoNegro.png";
  } else {
    this.img = "img/caballoBlanco.png";
  }
}
Caballo.prototype.toString = function() {
  return this.name + " " + this.color;
};
Caballo.prototype.movimiento = function() {
  console.log("movimiento del cabasho");
};

//Clase alfil
function Alfil(color, pos) {
  this.name = "caballo " + color;
  this.color = color;
  this.pos = pos;
  this.muerto = false;

  if (color == "negro") {
    this.img = "img/alfilNegro.png";
  } else {
    this.img = "img/alfilBlanco.png";
  }
}
Alfil.prototype.toString = function() {
  return this.name + " " + this.color;
};
Alfil.prototype.movimiento = function() {
  console.log("movimiento del alfil");
};

function Rei(color, pos) {
  this.name = "rei " + color;
  this.color = color;
  this.pos = pos;
  this.muerto = false;

  if (color == "negro") {
    this.img = "img/reiNegro.png";
  } else {
    this.img = "img/reiBlanco.png";
  }
}
Rei.prototype.toString = function() {
  return this.name + " " + this.color;
};
Rei.prototype.movimiento = function() {
  console.log("movimiento del rei");
};

function Reina(color, pos) {
  this.name = "caballo " + color;
  this.color = color;
  this.pos = pos;
  this.muerto = false;

  if (color == "negro") {
    this.img = "img/reinaNegro.png";
  } else {
    this.img = "img/reinaBlanco.png";
  }
}
Reina.prototype.toString = function() {
  return this.name + " " + this.color;
};
Reina.prototype.movimiento = function() {
  console.log("movimiento de la reina");
};

function Torre(color, pos) {
  this.name = "caballo " + color;
  this.color = color;
  this.pos = pos;
  this.muerto = false;

  if (color == "negro") {
    this.img = "img/torreNegro.png";
  } else {
    this.img = "img/torreBlanco.png";
  }
}
Torre.prototype.toString = function() {
  return this.name + " " + this.color;
};
Torre.prototype.movimiento = function() {
  console.log("movimiento de la torre");
};

//Funciones generales para el funcionamiento del ajedrez
function crearTablero() {
  let table = document.createElement("table");
  table.border = "1px solid black";
  for (let j = 1; j < 9; j++) {
    let tr = document.createElement("tr");
    for (let i = 1; i < 9; i++) {
      let td = document.createElement("td");
      let div = document.createElement("div");
      div.id = j + "" + i;
      div.className = j + "" + i;
      if (j % 2 != 0) {
        if (i % 2 != 0) {
          div.style = "background:#ffffff;height:60px;width:60px;";
        } else {
          div.style = "background:#837490;height:60px;width:60px;";
        }
      } else {
        if (i % 2 == 0) {
          div.style = "background:#ffffff;height:60px;width:60px;";
        } else {
          div.style = "background:#837490;height:60px;width:60px;";
        }
      }
      td.appendChild(div);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  $(".tablero").append(table);
}

function crearPiezas() {
  //Peones
  for (let j = 1; j < 9; j++) {
    //Peones blancos
    piezasBlancas.push(new Peon("blanco", "2" + j));
    //Peones negros
    piezasNegras.push(new Peon("negro", "7" + j));
  }

  piezasBlancas.push(
    new Torre("blanco", "11"),
    new Torre("blanco", "18"),
    new Caballo("blanco", "12"),
    new Caballo("blanco", "17"),
    new Alfil("blanco", "13"),
    new Alfil("blanco", "16"),
    new Rei("blanco", "15"),
    new Reina("blanco", "14")
  );

  piezasNegras.push(
    new Torre("negro", "81"),
    new Torre("negro", "88"),
    new Caballo("negro", "82"),
    new Caballo("negro", "87"),
    new Alfil("negro", "83"),
    new Alfil("negro", "86"),
    new Rei("negro", "84"),
    new Reina("negro", "85")
  );

  //Colocacion de las piezas
  piezasBlancas.map(pieza => {
    let img = document.createElement("img");
    img.src = pieza.img;
    $(img).click(function() {
      pieza.movimiento();
    });
    img.width = 60;
    $("." + pieza.pos).append(img);
  });

  piezasNegras.map(pieza => {
    let img = document.createElement("img");
    img.src = pieza.img;
    img.width = 60;

    $(img).click(function() {
      pieza.movimiento();
    });
    $("." + pieza.pos).append(img);
  });
}

//GAMECORE
crearTablero();
crearPiezas();
