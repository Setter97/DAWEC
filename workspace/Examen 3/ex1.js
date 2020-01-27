var arrayGlobal=[];
var pos=0;
document.write("<button type='button' onClick='crear()'>Crear cuenta bancaria</button>")
document.write("<button type='button' onClick='borrar()'>Borrar cuenta bancaria</button>")
document.write("<button type='button' onClick='consultar()'>Consultar cuenta bancaria</button>")
document.write("<button type='button' onClick='editar()'>Editar cuenta bancaria</button>")

function Banco(titular,nif,provincia,telefono,saldo){
    this.titular=titular;
    this.nif=nif;
    this.provincia=provincia;
    this.telefono=telefono;
    this.saldo=saldo;
    alert("Se ha creado la cuenta bancaria correctamente")

    Banco.prototype.toString=function (){
        return "Titular: "+this.titular+
        "\nNIF: "+this.nif+
        "\nProvincia: "+this.provincia+
        "\nTelefono: "+this.telefono+
        "\nSaldo: "+this.saldo;
    }

    Banco.prototype.setTitular=function (tit){
        this.titular=tit;
    }
}

function borrar(){
    var usr=prompt("Introduce la palabra clave para poder borrar la cuenta: (nif,provincia o titular) ")
    var result=buscador(usr);
    alert(result);
    if(result>=0){
        arrayGlobal[result]="";
        alert("Se ha borrat correctament");
    }else{
        alert("No se ha encontrado el banco, pruebe con ontra palabra clave");
    }
    
}


function buscador(cadena){
    var i=0;
    var centinela=false;
    pos=0;
    do{
        if(cadena==arrayGlobal[i].nif || cadena==arrayGlobal[i].titular || cadena==arrayGlobal[i].provincia){
            centinela=true;
            pos=i;
        }
        i++;
    }while(!centinela || i<arrayGlobal.length);

    if(centinela){
        return pos;
    }else{
        return -1;
    }
    
}

function consultar(){
    var usr=prompt("Que cuanta bancaria quiere consultar? (nif,provincia o titular)")
    var result=buscador(usr);

   
    
}

function editar(){
    var usr=prompt("Que cuenta bancaria quiere editar? (nif,provincia o titular)");
    var result=buscador(usr);

    if(result>=0){
        var us2=prompt(arrayGlobal[result]+"\n Que desea modificar de este objeto? (titular,nif,provincia,telefono,saldo)");

        if(us2=="titular"){
            var titul=prompt("Introduzca valor");
            arrayGlobal[resultat].setTitular(titul);
        }

    }else{
        alert("No se ha encontrado el banco, pruebe con ontra palabra clave");
    }
}

function crear(){
    var titular=prompt("Introduce el titular:");
    var nif=prompt("Introduce el nif:");
    var provincia=prompt("Introduce el provincia:");
    var telefono=prompt("Introduce el telefono:");
    var saldo=prompt("Introduce el saldo:");
    var banco=new Banco(titular,nif,provincia,telefono,saldo)
    arrayGlobal.push(banco);
}

var prueba =new Banco("Joel","213123","provincia","676576",9999);
arrayGlobal.push(prueba)
