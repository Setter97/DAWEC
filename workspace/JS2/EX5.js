var cadena=prompt("Introdueix una cadena");

var arrayCadenes=cadena.split(" ");
alert("Numero de paraules: "+arrayCadenes.length+"\n"+
        "Primera paraula i darrera paraula: "+arrayCadenes[0]+", "+arrayCadenes[arrayCadenes.length-1]+"\n"+
        "Ordre invers: "+arrayCadenes.reverse()+"\n"+
        "Ordenades de la A la Z: "+arrayCadenes.sort((a,b) => a>b)+"\n"+
        "Ordenades de la Z la A: "+arrayCadenes.sort((a,b) => a<b)
);