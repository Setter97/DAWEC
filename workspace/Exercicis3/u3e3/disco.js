function Disco(nombre,cantante,año,tipo,localizacion){
    
    this.nombre=nombre || "";
    this.cantante=cantante || "";
    this.año=año || "";
    this.tipo=tipo || "";
    this.localizacion=localizacion || 0;
    this.prestado=false || false;

    Disco.prototype.setLocal=function (num){
        this.localizacion=num;
    }
    Disco.prototype.setPrestado=function (prestado){
        this.prestado=prestado;
    }

    Disco.prototype.print=function(){
        alert("Nombre: "+this.nombre+"\n"
            +"Cantante: "+this.cantante+"\n"
            +"Año: "+this.año+"\n"
            +"Tipo: "+this.tipo+"\n"
            +"Localizacion: "+this.localizacion+"\n"
            +"Prestado: "+this.prestado+"\n")
    }
    Disco.prototype.toString=function(){
        return "Nombre: "+this.nombre+" ";
    }

}
var discoVacio=new Disco();
var disc=new Disco("znombre","cantante","1992","rock",0);
var disc2=new Disco("anombre","cantante","1992","rock",0);

disc.setPrestado(true);
//disc.print();
var arrayPrueba=[];
arrayPrueba.push(disc);
arrayPrueba.push(disc2);

arrayPrueba.sort((a,b)=>a.nombre>b.nombre ? 1:-1);

alert(arrayPrueba);