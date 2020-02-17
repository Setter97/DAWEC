let div=document.getElementById('content');

let but=document.createElement('button');
but.textContent="Hola soc un boto"

let p=document.createElement('p');
p.textContent=("Hola soc un paragraf :D")

div.appendChild(but);
div.appendChild(p);

jQuery(but).click(function(){
    jQuery(p).text("El boto ha canviat el contingut  ):")
})
