{
    creaTaula()
}
function creaTaula(){
    
    document.getElementById("taula").innerHTML="";
    let table=document.createElement("table");
    
    for(let i=0;i<document.getElementById("filas").value;i++){
        let tr=document.createElement("tr");

        for(let j=0;j<document.getElementById("columnas").value;j++){
            let td=document.createElement("td");
            let text=document.createTextNode(i+""+j);

            td.appendChild(text);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.getElementById("taula").appendChild(table);
}