
function Deportista(nombre, edad, genero){
    this.nombre=nombre;
    this.edad=edad;
    this.genero=genero;
}

Deportista.prototype.obtenerDetalles=function(){
    return ("Nombre "+this.nombre+" edad: "+this.edad+" genero: "+this.genero);
}



function Futbolista(dorsal,posicion,nombre,edad,genero){

    Deportista.call(this,nombre,edad,genero);
    this.dorsal=dorsal;
    this.posicion=posicion;
    
    Futbolista.prototype.fichar=function(){
        return this.obtenerDetalles()+" Dorsal "+this.dorsal+" Posicion "+this.posicion;
    }
}

Futbolista.prototype=new Deportista();
Futbolista.prototype.contstructor=Deportista;

function Tenista(manoPrincipal,pistaFavorita,nombre,edad,genero){

    Deportista.call(this,nombre,edad,genero);
    
    this.manoPrincipal=manoPrincipal;
    this.pistaFavorita=pistaFavorita;

    Tenista.prototype.ranking=function(){
        return this.obtenerDetalles()+" Mano principal: "+this.manoPrincipal+" Pista favorita: "+this.pistaFavorita;
    }
}

Tenista.prototype=new Deportista();
Tenista.prototype.constructor=Deportista;

var futbol=new Futbolista(12,"delantero","Joel",22,"Masculino");
var deportista=new Deportista("as",22,"adassad");
var tenista=new Tenista("derecha","tierra","Larry Capaja",24,"Masculino");

alert(deportista.obtenerDetalles());
alert(futbol.fichar());
alert(tenista.ranking());