let table=document.createElement('table');
let tr=document.createElement('tr');
let td=document.createElement('td');

let butInText=document.createElement('button');
butInText.addEventListener('click',creaInputText)
td.appendChild(butInText)

let butInPwd=document.createElement('button');
butInPwd.addEventListener('click',creaInputPwd);
td.appendChild(butInPwd)

let butTextArea=document.createElement('button');
butTextArea.addEventListener('click',creaTextArea);
td.appendChild(butTextArea)

let butLabel=document.createElement('button');
butLabel.addEventListener('click',creaLabel);
td.appendChild(butLabel)

let butImg=document.createElement('button');
butImg.addEventListener('click',creaImg);
td.appendChild(butImg)

let butCheck=document.createElement('button');
butCheck.addEventListener('click',creaCheck);
td.appendChild(butCheck)

let butRad=document.createElement('button');
butRad.addEventListener('click',creaRadio);
td.appendChild(butRad)

let butSub=document.createElement('button');
butSub.addEventListener('click',creaSubmit);
td.appendChild(butSub)


//Funciones

function creaInputText(){
    let inText=document.createElement('input');
}
function creaInputPwd(){let inPwd=document.createElement('input');}
function creaTextArea(){let inTextArea=document.createElement('textarea');}
function creaLabel(){let label=document.createElement('label');}
function creaImg(){let img=document.createElement('img');}
function creaCheck(){let check=document.createElement('input');}
function creaRadio(){let radio=document.createElement('input');}
function creaSubmit(){let submit=document.createElement('button');}