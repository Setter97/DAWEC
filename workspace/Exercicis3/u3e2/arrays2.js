var arrayGlobal=["b","c","a"];
start();

function start(){
    //alert("Hola");
    var ordenacion=prompt("Numero paises: "+mostrarNumPaises(arrayGlobal)+"\n"+"Como quieres mostrar los elementos del array: Ordenados alfabeticamente (0), revertido (1) o tal qual (2): ");
    alert("Llista ordenada \n"+listarPaises(arrayGlobal,ordenacion));

    var inicio=prompt("Introduce el inicio del intervalo: ");
    var final=prompt("Introduce el final del intervalo max "+arrayGlobal.length+" :")
    alert("Resultado del intervalo: "+mostrarIntervalo(arrayGlobal,inicio,final));
    
    var añadir=prompt("Que valor quiere introducir ?")
    var donde=prompt("Donde quiere introducir el valor principio(0) o final(1)?")
    añadirPais(arrayGlobal,donde,añadir)
    alert("Elemento añadido listado de array: "+arrayGlobal)

    var borrar=prompt("Donde quiere borrar el elemento al principio (0) o al final (1)")
    borrarPais(arrayGlobal,borrar);
    alert("Array actual: "+arrayGlobal);

    var num=prompt("Consultar array. Quiere consultar por posicion (0) o por nombre (1)? ");
    var cadena=prompt("Introduzca el valor/ cadena que quiere buscar: ")
    alert("Resultado de la consulta: "+consultarPais(arrayGlobal,num,cadena));
}

function mostrarNumPaises(array){return array.length;}

function listarPaises(array, id){

    if(id==0){
        //ordenat
            array=array.sort();
    }else if(id==1){
        //reverse
        array=array.reverse()
    }else{
        //tal qual
    }
    var info="";
    for(var i=0;i<array.length;i++){
        info=info+"\n"+array[i];
    }
    return info;
}

function mostrarIntervalo(array,inicio,fin){
    var array2=array.slice(inicio,fin);
    var info="";
    for(var i=0;i<array2.length;i++){
        info=info+"\n"+array2[i];
    }
    return info;
}

function añadirPais(array,id,cadena){
    if(id==0){
        //principio
        array.unshift(cadena);
    }else{
        //final
        array.push(cadena);
    }
}

function borrarPais(array,id){
    if(id==0){
        //principio
        array.shift();
    }else{
        //final
        array.pop();
    }
}

function consultarPais(array,id,num){
    var info="";
    if(id==0){
        //per posicio
        info=array[num];

    }else{
        //per cadena
        info=search(array,num);
    }
    return info;
}

function search(array,cadena){
    var info="";
    var centinela=false;

    for(var i=0;i<array.length;i++){
        if(array[i]==cadena){
            info=array[i];
            centinela=true;
        }
    }
    if(centinela)return info;
    else return "No se ha encontrado la palabra clave"
}

/*Ten en cuenta que el array será una variable global y que se pasará por parámetro en todas las
funciones.
Cuando el usuario cargue la página, se cargará un prompt donde se mostrarán (en el prompt, no en
la página) las opciones:
■ Mostrar número de países.
■ Mostrar listado de países (y le preguntará si quiere mostrarlos en el orden que se
encuentran en el array, del revés u ordenados alfabéticamente).
■ Mostrar un intervalo de países (y le pedirá que introduzca el intervalo en formato inicio-fin;
luego deberás extraer el valor inicio y fin).
■ Añadir un país (y le preguntará si quiere añadir al principio o al final).
■ Borrar un país (y le preguntará si quiere borrar al principio o al final).
■ Consultar un país (y le preguntará si quiere consultar por posición o por nombre).
■ Todas las operaciones que se realicen se irán mostrando en la página con su título.*/