let generar=document.createElement('button');
generar.textContent='Generar planta'
generar.addEventListener('click',generaPlanta);
document.getElementById('gen').appendChild(generar);

let table=document.createElement('table');

let count=document.createElement('button');
count.addEventListener('click',e=>{
    alert(table.childElementCount)
})
count.textContent='Contador filas'
document.body.appendChild(count);

function generaPlanta(){
    let tr=document.createElement('tr');

    let td0=document.createElement('td');
    let nombre=prompt('Indica el nombre de la planta');
    td0.textContent=nombre;
    tr.appendChild(td0);

    let td1=document.createElement('td');
    let ubicacion=prompt('Indica la ubicacion de la planta')
    td1.textContent=ubicacion;
    tr.appendChild(td1);

    let td2=document.createElement('td');
    let ejemplares=prompt('Indica el numero de ejemplares de la planta')
    td2.textContent=ejemplares;
    tr.appendChild(td2);

    let td3=document.createElement('td');
    let flor=prompt('Indica la flor de la planta')
    td3.textContent=flor;
    tr.appendChild(td3);

    table.appendChild(tr);
    document.getElementById('table').appendChild(table);

    let erase=document.createElement('button')
    erase.textContent='Borrar fila'
    erase.addEventListener('click',e=> {
        table.lastChild.remove();
        if(table.childElementCount<1){
            erase.remove();
        }
    })

    if(table.childElementCount==1){
        document.getElementById('gen').appendChild(erase);
    }
}