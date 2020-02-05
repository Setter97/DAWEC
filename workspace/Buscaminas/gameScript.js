let arrayNumeros=['img/white.png','img/uno.png','img/dos.png','img/tres.png','img/cuatro.png','img/cinco.png','img/seis.png','img/siete.png','img/ocho.png',]

function creaTaula(){
    let columns=parseInt(document.getElementById("columnas").value)
    let rows=parseInt(document.getElementById("filas").value)
    let porcentaje=Math.floor((document.getElementById("filas").value*document.getElementById("columnas").value)*0.45);
    let numMinas=parseInt(document.getElementById("minas").value)

    if(numMinas<=porcentaje){

        //Creacion del array de minas
        let minas=ponerMinas(new Array(numMinas),rows,columns);

        document.getElementById("taula").innerHTML="";
        let table=document.createElement("table");
        
        for(let i=0;i<rows;i++){
            let tr=document.createElement("tr");

            for(let j=0;j<columns;j++){
                let td=document.createElement("td");
                let img=document.createElement("img");
                if(minas.includes(i+" "+j)){
                    img.className="mina";
                    img.addEventListener('click',explotaMina);

                }else{
                    img.addEventListener('click',calcularNumero);
                }
                img.src="img/negro.png"
                img.id=i+" "+j;
                
                td.appendChild(img);
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        document.getElementById("taula").appendChild(table);
    }

}

function calcularNumero(){
    let id=""+this.id;
    let sp=id.split(" ");
    let row=parseInt(sp[0]);
    let col=parseInt(sp[1]);
    //alert(document.getElementById("filas").value)
    let rowMin=0;
    let rowMax=0;

    let colMin=0;
    let colMax=0;

    if(row==0){
        rowMin=row;
        rowMax=row+2;
    }else if(row==document.getElementById("filas").value-1){
        rowMin=row-1;
        rowMax=row+1;   
    }else{
        rowMin=row-1;
        rowMax=row+2;
    }

    if(col==0){
        colMin=col;
        colMax=col+2;
    }else if(col==document.getElementById("columnas").value-1){
        colMin=col-1;
        colMax=col+1;
    }else{
        colMin=col-1;
        colMax=col+2;
    }
    let num=ponerNumeros(rowMin,rowMax,colMin,colMax)
    this.src=arrayNumeros[num];
}

function ponerMinas(arrayMinas,row,col){
    let randomColumn=0;
    let randomRow=0;
    let combinacion
    let i=0;

    do{
        randomColumn=Math.floor(Math.random()*col)
        randomRow=Math.floor(Math.random()*row)
        combinacion=randomRow+" "+randomColumn

        if(!arrayMinas.includes(combinacion)){
            arrayMinas[i]=combinacion;
            i++
        }

   }while(i<arrayMinas.length)
   //alert(arrayMinas);
   return arrayMinas;
}

function explotaMina(){
    alert("Has perdido");
    $(".mina").each(function(){
        $(this).attr("src","img/mina.png")
    });
}

function ponerNumeros(rowMin,rowMax,colMin,colMax){
    let cont=0;
    for(let i=rowMin;i<rowMax;i++){
        for(let j=colMin;j<colMax;j++){
            //alert(i+" "+j);
            if(document.getElementById(i+" "+j).className!=""){
                cont++;
            }
        }
    }
    return cont;
}