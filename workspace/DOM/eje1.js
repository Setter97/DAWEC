let button=document.createElement('button');
button.innerText='Añadir li'
button.addEventListener('click',e=>{
    añadirLi();
})


let primero=document.createElement('button');
primero.innerText='Borra primer li'
primero.addEventListener('click',e=>{
    borrarPrimero();
})


let ultimo=document.createElement('button');
ultimo.innerText='Borrar ultimo li'
ultimo.addEventListener('click',e=>{
    borrarUltimo();
})


let div=document.getElementById("llista")
div.appendChild(button);
div.appendChild(primero);
div.appendChild(ultimo);
let ul=document.createElement('ul');
ul.className="llista";
div.appendChild(ul);

function añadirLi(){
    let text=prompt("Introduce un texto: ")
    let li=document.createElement('li');
    li.innerText=text;
    ul.appendChild(li);
}

function borrarPrimero(){
    ul.firstChild.remove();
}
function borrarUltimo(){
    ul.lastChild.remove();
}