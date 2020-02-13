
for(let i=0;i<2;i++){
    let div1=document.createElement('div');
    let button=document.createElement('button');
    button.textContent='Esconde div'
    button.addEventListener('click',e=>{
       $(button).parent().hide();
    })
    div1.appendChild(button)
    document.body.appendChild(div1);
}