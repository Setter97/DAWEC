function Edificio(calle ,numero, cp){
    this.calle=calle || ""
    this.numero=numero || 0
    this.cp=cp || 0
    this.plantas=[[[]]];
    //alert("Contruido nuevo edificio en la calle : "+this.calle+" no: "+this.numero+" CP: "+this.cp);

    Edificio.prototype.agregarPlantasYPuertas=function (numplantas,puertas){
        for(var i=0;i<numplantas;i++){
            this.plantas.push([]);
        }
        for(var i=0;i<numplantas;i++){
            for(var j=this.plantas[i].length;j<puertas;j++){
                this.plantas[i].push([]);
            }
        }
    }

    Edificio.prototype.modificarNumero=function(numero){
        this.numero=numero;
    }

    Edificio.prototype.modificarCalle=function(calle){
        this.calle=calle;
    }

    Edificio.prototype.modificarCodigoPostal=function(codigo){
        this.cp=codigo;
    }

    Edificio.prototype.imprimeCalle=function(){
        alert("Calle: "+this.calle);
    }
    Edificio.prototype.imprimeNumero=function(){
        alert("Numero: "+this.numero);
    }
    Edificio.prototype.imprimeCodigoPostal=function(){
        alert("Codigo postal: "+this.cp);
    }

    Edificio.prototype.agregarPropietario=function(nombre,planta,puerta){
        this.plantas[planta][puerta].push(nombre);
        //alert(nombre+" es ahora propietario de la puerta "+puerta +" de la planta "+planta);
    }

    Edificio.prototype.imprimePlantas=function(){
        for(var i=0;i<this.plantas.length;i++){
            for(var j=0;j<this.plantas[i].length;j++){
                if(this.plantas[i][j]!=""){
                    alert("Propietario de la puerta "+j+" de la planta "+i+" : "+this.plantas[i][j]+".");
                }
            }
        }
    }
}

var ed1=new Edificio("asdasdas",24,07760);
ed1.agregarPlantasYPuertas(3,5);
ed1.agregarPropietario("Larry Capaja",1,2);
ed1.imprimePlantas();