//Variables generales para guardar objetos
let arrayPiezas = new Array();
let ultimaPieza;
let hB=1
let mB=30
let sB=0;
let hN=1
let mN=30
let sN=0;

let timerB = $.timer(1000, function() {
  sB--
  if(hB==0 && mB==0 && sB<0){
    alert("El tiempo del equipo blanco se ha terminado")
    timerB.stop()
    $("img").each(function () { 
      $(this).off()
      })
  }
  if(sB<0){
    sB=59
    mB--
    if(mB<0){
      mB=59
      hB--
    }
  }
  document.getElementById("tiempoB").innerHTML="Equipo blanco: "+hB+":"+mB+":"+sB
});

let timerN = $.timer(1000, function() {
  sN--
  if(hN==0 && mN==0 && sN<0){
    alert("El tiempo del equipo negro se ha terminado")
    timerN.stop()
    $("img").each(function () { 
      $(this).off()
      })
  }
  if(sN<0){
    sN=59
    mN--
    if(mN<0){
      mN=59
      hN--
    }
  }
  document.getElementById("tiempoN").innerHTML="Equipo negro: "+hN+":"+mN+":"+sN
});
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
Peon.prototype.getColor = function() {
  return this.color;
};
Peon.prototype.sombrear = function() {
  borrarSombreado()
  ultimaPieza=this
  let sombreado=new Array()
  let sombreado2=new Array()
  if(this.firstMove){
    
    if(this.color=="blanco"){
      sombreado.push(parseInt(this.pos)+10)
      sombreado.push(parseInt(this.pos)+20)
      sombreado2.push(parseInt(this.pos)+11)
      sombreado2.push(parseInt(this.pos)+9)
    }else{
      sombreado.push(parseInt(this.pos)-10)
      sombreado.push(parseInt(this.pos)-20)
      sombreado2.push(parseInt(this.pos)-11)
      sombreado2.push(parseInt(this.pos)-9)
    }
   
  }else{
    if(this.color=="blanco"){
      sombreado.push(parseInt(this.pos)+10)
      sombreado2.push(parseInt(this.pos)+11)
      sombreado2.push(parseInt(this.pos)+9)
    }else{
      sombreado.push(parseInt(this.pos)-10)
      sombreado2.push(parseInt(this.pos)-11)
      sombreado2.push(parseInt(this.pos)-9)
    }
  }

  let atura=false;
  sombreado.map(sombra=>{
    if($('.'+sombra).find('img').length<1 && !atura){
      $("." +sombra).parent().css("background-color", "red");
      $("."+sombra).click(function(){
        borrarSombreado()
        ultimaPieza.movimiento(sombra)
        $('div').each(function(){
          $(this).off()
        })
      })
    }else{
      atura=true;
    }
  })

  sombreado2.map(sombra=>{
    if($('.'+sombra).find('img').length==1){
     if($("#"+sombra).children("img").attr("alt")!=ultimaPieza.color)
     {$("." +sombra).parent().css("background-color", "red");
     $("."+sombra).click(function(){
       borrarSombreado()
       ultimaPieza.movimiento(sombra)
       $('div').each(function(){
         $(this).off()
       })
     })}
    }
  })

}
Peon.prototype.movimiento = function(pos) {
  this.firstMove=false;
  ultimapieza=this;
  this.pos=pos;

  arrayPiezas.map(pieza=>{
    if(pieza!=this){
      if(pieza.pos==this.pos){
        pieza.muerto=true;
      }
    }
  })

  let img = document.createElement("img");
  img.src = this.img;
  img.width = 60;
  $(img).click(function(){
    ultimaPieza.sombrear()
  })
  $("." + this.pos).append(img);
  finTurno(this)
  haGanado()
  if(this.pos.toString()[0]=="1" || this.pos.toString()[0]=="8"){
    //alert("transformasion chingona")
    this.transformacion(this)
  }
  ultimaPieza = null;
  
};
Peon.prototype.transformacion=function (obj) {
  let num=0;
  let correcte=false;
  
  do{
  num=prompt("En que pieza te quieres convertir? \n1)Torre \n2)Caballo \n3)Alfil \n4)Reina")
    if(num==1){
      correcte=true
    }else if(num==2){
      correcte=true
    }
    else if(num==3){
      correcte=true
    }
    else if(num==4){
      correcte=true
    }else{
      alert("Valor incorrecto vuelve a introduir el valor")
    }
  }while(!correcte)

  let index=arrayPiezas.findIndex(pieza=>pieza.pos==this.pos)
  if(num==1){
    arrayPiezas.push(new Torre(this.color,this.pos))
    arrayPiezas.splice(index,1)
  }else if(num==2){
    arrayPiezas.push(new Caballo(this.color,this.pos))
    arrayPiezas.splice(index,1)
  }
  else if(num==3){
    arrayPiezas.push(new Alfil(this.color,this.pos))
    arrayPiezas.splice(index,1)
  }
  else if(num==4){
    arrayPiezas.push(new Reina(this.color,this.pos))
    arrayPiezas.splice(index,1)
  }

  if(this.color=="negro"){
    recargarPiezas("blanco")
  }else{
    recargarPiezas("negro")
  }
}

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
Caballo.prototype.getColor = function() {
  return this.color;
};
Caballo.prototype.sombrear=function () { 
borrarSombreado()
  let sombreado=new Array()
    sombreado.push(parseInt(this.pos)-21)
    sombreado.push(parseInt(this.pos)-19)
    sombreado.push(parseInt(this.pos)-12)
    sombreado.push(parseInt(this.pos)-8)
    sombreado.push(parseInt(this.pos)+21)
    sombreado.push(parseInt(this.pos)+19)
    sombreado.push(parseInt(this.pos)+12)
    sombreado.push(parseInt(this.pos)+8)

  ultimaPieza=this

  sombreado.map(sombra=>{
    if($('.'+sombra).find('img').length<1){
      $("." +sombra).parent().css("background-color", "red");
      $("."+sombra).click(function(){
        borrarSombreado()
        ultimaPieza.movimiento(sombra)
        $('div').each(function(){
          $(this).off()
        })
      })
    }else{
      if($("#"+sombra).children("img").attr("alt")!=ultimaPieza.color){
        $("." +sombra).parent().css("background-color", "red");
        $("."+sombra).click(function(){
          borrarSombreado()
          ultimaPieza.movimiento(sombra)
          $('div').each(function(){
            $(this).off()
          })
        })
      }
    }
  })

 }
Caballo.prototype.movimiento = function(pos) {
  ultimaPieza=this;
  this.pos=pos
  arrayPiezas.map(pieza=>{
    if(pieza!=this){
      if(pieza.pos==this.pos){
        pieza.muerto=true;
      }
    }
  })
  let img = document.createElement("img");
  img.src = this.img;
  img.width = 60;
  $(img).click(function(){
    ultimaPieza.sombrear()
  })
  $("." + this.pos).append(img);
  finTurno(ultimaPieza)
  haGanado()
  ultimaPieza = null;
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
Alfil.prototype.getColor = function() {
  return this.color;
};
Alfil.prototype.sombrear=function () { 
  borrarSombreado()
  let sombreado=new Array()
  let calculo=0;
  ultimaPieza=this

  //Movimiento en diagonal arriba derecha
  let imagen=false;
  let i=1;
  do{
    calculo=parseInt(this.pos)-(9*i)
    if(calculo.toString().includes("9") || $("#"+calculo).find("img").length>0){
      if($("#"+calculo).children("img").attr("alt")!=ultimaPieza.color)
        {sombreado.push(calculo)}
      imagen=true;
    }
    else{sombreado.push(calculo)}
    i++
  }while(i<8 && !imagen)


  //Movimiento en diagonal arriba izquierda
  imagen=false
  i=1
  do{
    calculo=parseInt(this.pos)-(11*i)
    if(calculo.toString().includes("0") || $("#"+calculo).find("img").length>0){
      if($("#"+calculo).children("img").attr("alt")!=ultimaPieza.color)
      {sombreado.push(calculo)}
      imagen=true;
    }
    else{sombreado.push(calculo)}
    i++
  }while(i<8 && !imagen)

  //Moviemiento en diagonal abajo derecha
  imagen=false
  i=1
  do{
    calculo=parseInt(this.pos)+(11*i)
    if(calculo.toString().includes("9") || $("#"+calculo).find("img").length>0){
      if($("#"+calculo).children("img").attr("alt")!=ultimaPieza.color)
        {sombreado.push(calculo)}
      imagen=true;
    }
    else{sombreado.push(calculo)}
    i++
  }while(i<8 && !imagen)

  //Moviemiento en diagonal abajo izquierda
  imagen=false
  i=1
  do{
    calculo=parseInt(this.pos)+(9*i)
    if(calculo.toString().includes("0") || $("#"+calculo).find("img").length>0){
      if($("#"+calculo).children("img").attr("alt")!=ultimaPieza.color)
      {sombreado.push(calculo)}
      imagen=true;
    }
    else{sombreado.push(calculo)}
    i++
  }while(i<8 && !imagen)
  
  sombreado.map(sombra=>{
    if($('.'+sombra).find('img').length<1){
      $("." +sombra).parent().css("background-color", "red");
      $("."+sombra).click(function(){
        borrarSombreado()
        ultimaPieza.movimiento(sombra)
        $('div').each(function(){
          $(this).off()
        })
      })
     // console.log("hi ha una imatge")
    }else{
      if($("#"+sombra).children("img").attr("alt")!=ultimaPieza.color){
        $("." +sombra).parent().css("background-color", "red");
        $("."+sombra).click(function(){
          borrarSombreado()
          ultimaPieza.movimiento(sombra)
          $('div').each(function(){
            $(this).off()
          })
        })
      }
    }
  })
 }
Alfil.prototype.movimiento = function(pos) {
  ultimaPieza=this;
  this.pos=pos
  arrayPiezas.map(pieza=>{
    if(pieza!=this){
      if(pieza.pos==this.pos){
        pieza.muerto=true;
      }
    }
  })
  let img = document.createElement("img");
  img.src = this.img;
  img.width = 60;
  $(img).click(function(){
    ultimaPieza.sombrear()
  })
  $("." + this.pos).append(img);
  finTurno(ultimaPieza)
  haGanado()
  ultimaPieza = null;
};

//Clase Rei
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
Rei.prototype.getColor = function() {
  return this.color;
};
Rei.prototype.movimiento = function(pos) {
  ultimaPieza=this;
  this.pos=pos
  arrayPiezas.map(pieza=>{
    if(pieza!=this){
      if(pieza.pos==this.pos){
        pieza.muerto=true;
      }
    }
  })
  let img = document.createElement("img");
  img.src = this.img;
  img.width = 60;
  $(img).click(function(){
    ultimaPieza.sombrear()
  })
  $("." + this.pos).append(img);
  finTurno(ultimaPieza)
  haGanado()
  ultimaPieza = null;
};
Rei.prototype.sombrear = function() {
  borrarSombreado()
  ultimaPieza=this
  let pos=parseInt(this.pos)
  let sombreado=new Array()
  sombreado.push(pos+11)
  sombreado.push(pos+10)
  sombreado.push(pos+9)
  sombreado.push(pos+1)
  sombreado.push(pos-1)
  sombreado.push(pos-9)
  sombreado.push(pos-10)
  sombreado.push(pos-11)

  sombreado.map(sombra=>{
    if($('.'+sombra).find('img').length<1){
      $("." +sombra).parent().css("background-color", "red");
      $("."+sombra).click(function(){
        borrarSombreado()
        ultimaPieza.movimiento(sombra)
        $('div').each(function(){
          $(this).off()
        })
      })
     // console.log("hi ha una imatge")
    }else{
      if($("#"+sombra).children("img").attr("alt")!=ultimaPieza.color){
        $("." +sombra).parent().css("background-color", "red");
        $("."+sombra).click(function(){
          borrarSombreado()
          ultimaPieza.movimiento(sombra)
          $('div').each(function(){
            $(this).off()
          })
        })
      }
    }
  })
};

//Clase Reina
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
Reina.prototype.getColor = function() {
  return this.color;
};
Reina.prototype.movimiento = function(pos) {
  ultimaPieza=this;
  this.pos=pos
  arrayPiezas.map(pieza=>{
    if(pieza!=this){
      if(pieza.pos==this.pos){
        pieza.muerto=true;
      }
    }
  })
  let img = document.createElement("img");
  img.src = this.img;
  img.width = 60;
  $(img).click(function(){
    ultimaPieza.sombrear()
  })
  $("." + this.pos).append(img);
  finTurno(ultimaPieza)
  haGanado()
  ultimaPieza = null;
}
Reina.prototype.sombrear = function() {
  borrarSombreado()
  let sombreado=new Array()
  let calculo=0;
  ultimaPieza=this
  let pos=parseInt(this.pos);

  //Movimientos alfil
//Movimiento en diagonal arriba derecha
let imagen=false;
let i=1;
do{
  calculo=parseInt(this.pos)-(9*i)
  if(calculo.toString().includes("9") || $("#"+calculo).find("img").length>0){
    if($("#"+calculo).children("img").attr("alt")!=ultimaPieza.color)
      {sombreado.push(calculo)}
    imagen=true;
  }
  else{sombreado.push(calculo)}
  i++
}while(i<8 && !imagen)


//Movimiento en diagonal arriba izquierda
imagen=false
i=1
do{
  calculo=parseInt(this.pos)-(11*i)
  if(calculo.toString().includes("0") || $("#"+calculo).find("img").length>0){
    if($("#"+calculo).children("img").attr("alt")!=ultimaPieza.color)
    {sombreado.push(calculo)}
    imagen=true;
  }
  else{sombreado.push(calculo)}
  i++
}while(i<8 && !imagen)

  //Moviemiento en diagonal abajo derecha
  imagen=false
  i=1
  do{
    calculo=parseInt(this.pos)+(11*i)
    if(calculo.toString().includes("9") || $("#"+calculo).find("img").length>0){
      if($("#"+calculo).children("img").attr("alt")!=ultimaPieza.color)
        {sombreado.push(calculo)}
      imagen=true;
    }
    else{sombreado.push(calculo)}
    i++
  }while(i<8 && !imagen)

  //Moviemiento en diagonal abajo izquierda
  imagen=false
  i=1
  do{
    calculo=parseInt(this.pos)+(9*i)
    if(calculo.toString().includes("0") || $("#"+calculo).find("img").length>0){
      if($("#"+calculo).children("img").attr("alt")!=ultimaPieza.color)
      {sombreado.push(calculo)}
      imagen=true;
    }
    else{sombreado.push(calculo)}
    i++
  }while(i<8 && !imagen)

  //Movimientos Torre
  i=1
  imagen=false;
   //Movimiento hacia abajo
   do{
    calculo=pos+parseInt(i+"0")
    
    if(calculo.toString().length<3 && calculo<90){
      if($("#"+calculo).find("img").length<1){
        sombreado.push(calculo);
      }else{
        if($("#"+calculo).children("img").attr("alt")!=ultimaPieza.color){
          sombreado.push(calculo)
        }
        imagen=true;
      }
    }
    i++
  }while(i<9 && !imagen)

  //movimiento hacia arriba
  imagen=false;
  i=1;
  do{
   calculo=pos-parseInt(i+"0")
    if(calculo!=this.pos){
      if(calculo.toString().length>1 && calculo>9){
        if($("#"+calculo).find("img").length<1){
          sombreado.push(calculo);
        }else{
          if($("#"+calculo).children("img").attr("alt")!=ultimaPieza.color){
            sombreado.push(calculo)
          }
          imagen=true;
        }
      }
    }
    i++;
  }while(i<9 && !imagen)


  //Movimiento lateral derecha
  imagen=false;
  i=1;
  do{
    calculo=this.pos+i;
    if(calculo.toString().includes("9")){imagen=true;}
    if(calculo!=this.pos){
      if($("#"+calculo).find("img").length<1){ 
        sombreado.push(calculo)
      }
      else{
        if($("#"+calculo).children("img").attr("alt")!=ultimaPieza.color){
          sombreado.push(calculo)
        }
        imagen=true
      }
    }
    i++;
  }while(i<9 && !imagen)

  //Movimiento lateral izquierda
  imagen=false;
  i=1;
  do{
    calculo=this.pos-i;
    if(calculo.toString().includes("0")){imagen=true;}
    if(calculo!=this.pos){
      if($("#"+calculo).find("img").length<1){ 
        sombreado.push(calculo)
      }
      else{
        if($("#"+calculo).children("img").attr("alt")!=ultimaPieza.color){sombreado.push(calculo)}
        imagen=true
      }
    }
    i++;
  }while(i<9 && !imagen)

  
  sombreado.map(sombra=>{
    if($('.'+sombra).find('img').length<1){
      $("." +sombra).parent().css("background-color", "red");
      $("."+sombra).click(function(){
        borrarSombreado()
        ultimaPieza.movimiento(sombra)
        $('div').each(function(){
          $(this).off()
        })
      })
     // console.log("hi ha una imatge")
    }else{
      if($("#"+sombra).children("img").attr("alt")!=ultimaPieza.color){
        $("." +sombra).parent().css("background-color", "red");
        $("."+sombra).click(function(){
          borrarSombreado()
          ultimaPieza.movimiento(sombra)
          $('div').each(function(){
            $(this).off()
          })
        })
      }
    }
  })
};

//Clase Torre
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
Torre.prototype.getColor = function() {
  return this.color;
};
Torre.prototype.movimiento = function(pos) {
  ultimaPieza=this;
  this.pos=pos
  arrayPiezas.map(pieza=>{
    if(pieza!=this){
      if(pieza.pos==this.pos){
        pieza.muerto=true;
      }
    }
  })
  let img = document.createElement("img");
  img.src = this.img;
  img.width = 60;
  $(img).click(function(){
    ultimaPieza.sombrear()
  })
  $("." + this.pos).append(img);
  finTurno(ultimaPieza)
  haGanado()
  ultimaPieza = null;
};

Torre.prototype.sombrear = function() {
  borrarSombreado();
  ultimaPieza=this;
  
  let sombreado=new Array();
  let pos=parseInt(this.pos);
  let i=1;
  let calculo=0;
  let imagen=false;
  
  //Movimiento hacia abajo
  do{
    calculo=pos+parseInt(i+"0")
    
    if(calculo.toString().length<3 && calculo<90){
      if($("#"+calculo).find("img").length<1){
        sombreado.push(calculo);
      }else{
        if($("#"+calculo).children("img").attr("alt")!=ultimaPieza.color){
          sombreado.push(calculo)
        }
        imagen=true;
      }
    }
    i++
  }while(i<9 && !imagen)

  //movimiento hacia arriba
  imagen=false;
  i=1;
  do{
   calculo=pos-parseInt(i+"0")
    if(calculo!=this.pos){
      if(calculo.toString().length>1 && calculo>9){
        if($("#"+calculo).find("img").length<1){
          sombreado.push(calculo);
        }else{
          if($("#"+calculo).children("img").attr("alt")!=ultimaPieza.color){
            sombreado.push(calculo)
          }
          imagen=true;
        }
      }
    }
    i++;
  }while(i<9 && !imagen)


  //Movimiento lateral derecha
  imagen=false;
  i=1;
  do{
    calculo=this.pos+i;
    if(calculo.toString().includes("9")){imagen=true;}
    if(calculo!=this.pos){
      if($("#"+calculo).find("img").length<1){ 
        sombreado.push(calculo)
      }
      else{
        if($("#"+calculo).children("img").attr("alt")!=ultimaPieza.color){
          sombreado.push(calculo)
        }
        imagen=true
      }
    }
    i++;
  }while(i<9 && !imagen)

  //Movimiento lateral izquierda
  imagen=false;
  i=1;
  do{
    calculo=this.pos-i;
    if(calculo.toString().includes("0")){imagen=true;}
    if(calculo!=this.pos){
      if($("#"+calculo).find("img").length<1){ 
        sombreado.push(calculo)
      }
      else{
        if($("#"+calculo).children("img").attr("alt")!=ultimaPieza.color){sombreado.push(calculo)}
        imagen=true
      }
    }
    i++;
  }while(i<9 && !imagen)

  //MAP
  sombreado.map(sombra=>{
    if($('.'+sombra).find('img').length<1){
      $("." +sombra).parent().css("background-color", "red");
      $("."+sombra).click(function(){
        borrarSombreado()
        ultimaPieza.movimiento(sombra)
        $('div').each(function(){
          $(this).off()
        })
      })
     // console.log("hi ha una imatge")
    }else{
      if($("#"+sombra).children("img").attr("alt")!=ultimaPieza.color){
        $("." +sombra).parent().css("background-color", "red");
        $("."+sombra).click(function(){
          borrarSombreado()
          ultimaPieza.movimiento(sombra)
          $('div').each(function(){
            $(this).off()
          })
        })
      }
    }
  })

};

//Funciones generales para el funcionamiento del ajedrez
function finTurno(obj){
  $("img").each(function () { 
   $(this).off()
   })
   
   if(ultimaPieza.getColor()=="negro"){
     timerN.stop()
     timerB.reset(1000)
    recargarPiezas("blanco")
   }else{
    timerB.stop()
    timerN.reset(1000)
    recargarPiezas("negro")
   }
   ultimaPieza=null;
}
function borrarSombreado(){
  $('td').each(function(){
    $(this).css("background-color", "white");
    $(this).children("div").off()
  })
}
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
    new Rei("negro", "85"),
    new Reina("negro", "84")
  );

  //Colocacion de las piezas
  arrayPiezas.map(pieza => {
    let img = document.createElement("img");
    img.src = pieza.img;
    $(img).click(function() {
      pieza.sombrear();
    });
    img.width = 60;
    img.alt=pieza.color
    $("." + pieza.pos).append(img);
  });
}
function recargarPiezas(color) {
  $("img").each(function (){
    $(this).remove()
  })
  arrayPiezas.map(pieza => {

    if(!pieza.muerto){
      let img = document.createElement("img");
      img.src = pieza.img;
      if(pieza.getColor()==color){
        $(img).click(function() {
          pieza.sombrear();
        });
      }
        img.width = 60;
        img.alt=pieza.color
        $("." + pieza.pos).append(img);
    }
  });
}

function haGanado(){
  arrayPiezas.map(pieza=>{
    
    if(pieza.name.includes("rei")){
      if(pieza.muerto){
        if(pieza.color=="negro"){
          alert("Ha ganado el equipo blanco")
          $("img").each(function () { 
            $(this).off()
            })
        }else{
          alert("Ha ganado el equipo negro")
          $("img").each(function () { 
            $(this).off()
            })
        }
      }
    }
  })
}

function empate(){
  timerB.stop()
  timerN.stop()
  alert("Empate")
  $("img").each(function () { 
    $(this).off()
    })
}
//GAMECORE
crearTablero();
crearPiezas();
timerN.stop()
recargarPiezas("blanco")

let button=document.createElement("button")
button.addEventListener("click",function () { 
  empate()
  document.getElementById("empate").innerHTML="Se ha pulsado el boton de empate"
 })
 button.textContent="Empate"
 document.getElementById("empate").appendChild(button);
 