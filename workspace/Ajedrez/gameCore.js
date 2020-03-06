//Variables generales para guardar objetos
let arrayPiezas = new Array();

let ultimaPieza;

//Clases para la creacion de los objetos

//Clase peon
function Peon(color, pos,first) {
  this.name = "peon " + color;
  this.color = color;
  this.pos = pos;
  this.muerto = false;
  this.firstMove = first || true;

  if (color == "negro") {
    this.img = "img/peonNegro.png";
  } else {
    this.img = "img/peonBlanco.png";
  }
}

Peon.prototype.toString = function() {
  return this.name + " " + this.color;
};

Peon.prototype.sombrear = function() {
  
  if(ultimaPieza!=null){
    if (ultimaPieza != this) {
        $('td').each(function(){
          $(this).css("background-color", "white");
        })
        ultimaPieza = this;
    }
  }
 
 
  if (this.firstMove) {
    ultimaPieza=this
    
    let sombreado = new Array();

    if (this.color == "negro") {
      sombreado.push(this.pos - 20);
      sombreado.push(this.pos - 10);
    } else {
      sombreado.push(parseInt(this.pos) + 20);
      sombreado.push(parseInt(this.pos) + 10);
    }


    if($("." + sombreado[1]).find('img').length<1){
      $("." + sombreado[1]).parent().css("background-color", "red");
  
      $("." + sombreado[1]).click(function() {
        $("." + sombreado[0]).parent().css("background-color", "white");
        $("." + sombreado[1]).parent().css("background-color", "white");
        ultimaPieza.firstMove = false;
        ultimaPieza.movimiento(sombreado[1]);
        
        $("." + sombreado[0]).off();
        $("." + sombreado[1]).off();
      });


      if($("." + sombreado[0]).find('img').length<1){
        $("." + sombreado[0]).parent().css("background-color", "red");
        $("." + sombreado[0]).click(function() {
          $("." + sombreado[0]).parent().css("background-color", "white");
          $("." + sombreado[1]).parent().css("background-color", "white");
          ultimaPieza.firstMove = false;
          ultimaPieza.movimiento(sombreado[0]);
          
          $("." + sombreado[0]).off();
          $("." + sombreado[1]).off();
        });
      }

    }
    
  }else{
    ultimaPieza=this
    
    let sombreado = new Array();

    if (this.color == "negro") {
 
      sombreado.push(this.pos - 10);
    } else {
   
      sombreado.push(parseInt(this.pos) + 10);
    }

    if( $("." + sombreado[0]).find('img').length<1){
      
          $("." + sombreado[0])
          .parent()
          .css("background-color", "red");


          $("." + sombreado[0]).click(function() {
            $("." + sombreado[0])
              .parent()
              .css("background-color", "white");
          
            ultimaPieza.movimiento(sombreado[0]);
            $("." + sombreado[0]).off();
          
          });
    }

  }
};

Peon.prototype.movimiento = function(pos) {
  let esteObjeto=this;
  $("." + this.pos)
    .find("img")
    .remove();
  this.pos = pos;
  let img = document.createElement("img");
  img.src = this.img;
  img.width = 60;
  $(img).click(function(){
    esteObjeto.sombrear()
  })
  $("." + this.pos).append(img);

  ultimaPieza = null;
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
      td.width = 64;
      td.height = 64;
      td.align = "center";
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
    arrayPiezas.push(new Peon("blanco", "2" + j));
    //Peones negros
    arrayPiezas.push(new Peon("negro", "7" + j));
  }

  arrayPiezas.push(
    new Torre("blanco", "11"),
    new Torre("blanco", "18"),
    new Caballo("blanco", "12"),
    new Caballo("blanco", "17"),
    new Alfil("blanco", "13"),
    new Alfil("blanco", "16"),
    new Rei("blanco", "15"),
    new Reina("blanco", "14")
  );

  arrayPiezas.push(
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
  arrayPiezas.map(pieza => {
    let img = document.createElement("img");
    img.src = pieza.img;
    $(img).click(function() {
      pieza.sombrear();
    });
    img.width = 60;
    $("." + pieza.pos).append(img);
  });
}

//GAMECORE
crearTablero();
crearPiezas();
