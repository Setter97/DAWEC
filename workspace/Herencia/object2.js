function Persona(nombre ,edad ,genero){
    this.nombre=nombre || "";
    this.edad=edad || 0;
    this.genero=genero || "";

    
}

Persona.prototype.obtenerDetalles=function(){
    alert("Nombre: "+this.nombre+" edad: "+this.edad+" genero:"+this.genero);
}

function Profesor(asignatura,nivel,nombre,edad,genero){
    Persona.call(this,nombre,edad,genero)
    this.asignatura=asignatura
    this.nivel=nivel;
}

Profesor.prototype.asignar=function(asignatura){
    this.asignatura=asignatura;
}

Profesor.prototype=new Persona();
Profesor.prototype.constructor=Persona;



function Estudiante(curso, grupo,nombre,edad,genero){
    Persona.call(this,nombre,edad,genero)
    this.curso=curso;
    this.grupo=grupo
}

Estudiante.prototype.registrar=function(curso,grupo){
    this.curso=curso;
    this.grupo=grupo;
}
Estudiante.prototype=new Persona();
Estudiante.prototype.constructor=Persona;

var profesor=new Profesor("Catalan",2,"Asdadad",30,"Binario");
var estudiante=new Estudiante("2o","A","Joel",22,"Masculino");
//var persona=new Persona("Joel",22,"femenino");

//persona.obtenerDetalles();
profesor.obtenerDetalles();
estudiante.obtenerDetalles();