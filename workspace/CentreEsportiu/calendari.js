function calendari(){
    var diesArray=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","setiembre","octubre","noviembre","diciembre"];
    var data=new Date();
    var table = document.createElement('table');
    
    for(var i=0;i<3;i++){
        var tr=document.createElement("tr");
        var td=document.createElement("td");
        td.style.border="1px solid black";
        td.align="center"
        td.style.backgroundColor="green";
        if(i==0){
            td.appendChild(document.createTextNode(diesArray[data.getMonth()]));
        }else if(i==1){
            var dia=document.createTextNode(data.getDate());
            td.style.fontSize="40px";
            
            td.style.color="black"
            td.style.backgroundColor="yellowgreen"
            td.appendChild(dia);
            
        }else{
            td.appendChild(document.createTextNode(data.getFullYear()));
        }
        tr.appendChild(td);
        table.appendChild(tr);
        
    }
    
   table.style.width="110px";
    table.style.border="1px solid black"
    document.getElementById('calendari').appendChild(table);
}
