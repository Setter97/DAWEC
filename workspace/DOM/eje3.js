let div=document.getElementById('div')
let textArea=document.createElement('textarea');
let añadir=document.createElement('button');
añadir.addEventListener('click',añadirParrafo)
añadir.textContent='Añadir parrafo'

div.appendChild(textArea);
div.appendChild(añadir);
div.appendChild(document.createElement('br'));

function añadirParrafo() {  
    
    if(textArea.value!=""){
        let p=document.createElement('p');
        p.textContent=textArea.value
        textArea.value=""
        div.appendChild(p);
    }else{
        alert('Error')
    }
    
}