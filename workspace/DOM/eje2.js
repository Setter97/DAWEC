let table = document.createElement('table');
let tr = document.createElement('tr');
let td = document.createElement('td');

let butInText = document.createElement('button');
butInText.addEventListener('click', creaInputText)
butInText.textContent = 'input Text'
td.appendChild(butInText)

let butInPwd = document.createElement('button');
butInPwd.addEventListener('click', creaInputPwd);
butInPwd.textContent = 'input Pwd'
td.appendChild(butInPwd)

let butTextArea = document.createElement('button');
butTextArea.addEventListener('click', creaTextArea);
butTextArea.textContent = 'Text area'
td.appendChild(butTextArea)

let butLabel = document.createElement('button');
butLabel.addEventListener('click', creaLabel);
butLabel.textContent = 'Label';
td.appendChild(butLabel)

let butImg = document.createElement('button');
butImg.addEventListener('click', creaImg);
butImg.textContent = 'Img'
td.appendChild(butImg)

let butCheck = document.createElement('button');
butCheck.addEventListener('click', creaCheck);
butCheck.textContent = 'Checkbox'
td.appendChild(butCheck)

let butRad = document.createElement('button');
butRad.addEventListener('click', creaRadio);
butRad.textContent = 'Radio'
td.appendChild(butRad)

let butSub = document.createElement('button');
butSub.addEventListener('click', creaSubmit);
butSub.textContent = 'Submit button'
td.appendChild(butSub)
tr.appendChild(td);
table.appendChild(tr);
document.getElementById('taula').appendChild(table);


//Funciones

function creaInputText() {
    let inText = document.createElement('input');
    inText.name = prompt("Quin nom d'atribut vols posar al input Text?");
    inText.type = 'text';
    document.getElementById('form').appendChild(inText);
    document.getElementById('form').appendChild(document.createElement('br'));
}

function creaInputPwd() {
    let inPwd = document.createElement('input');
    inPwd.type = 'password'
    inPwd.name = prompt("Quin nom d'atribut vols posar al input Pwd?");
    document.getElementById('form').appendChild(inPwd);
    document.getElementById('form').appendChild(document.createElement('br'));
}

function creaTextArea() {
    let inTextArea = document.createElement('textarea');
    inTextArea.name = prompt("Quin nom d'atribut vols posar al TextArea?");
    inTextArea.rows=5;
    inTextArea.cols=40;
    document.getElementById('form').appendChild(inTextArea);
    document.getElementById('form').appendChild(document.createElement('br'));
}

function creaLabel() {
    let label = document.createElement('label');
    let name=prompt("A quin input es refereix aquest Label");
    label.htmlFor = name
    label.textContent=name
    document.getElementById('form').appendChild(label);
    document.getElementById('form').appendChild(document.createElement('br'));
}

function creaImg() {
    let img = document.createElement('img');
    img.src=prompt('Indica la ruta de la imatge ')
    document.getElementById('form').appendChild(img);
    document.getElementById('form').appendChild(document.createElement('br'));
}

function creaCheck() {
    let check = document.createElement('input');
    check.type='checkbox'
    check.name=prompt('Introdueix el nom del checkbox')
    check.value=prompt('Introduexo el valor del checkbox')
    document.getElementById('form').appendChild(check);
    document.getElementById('form').appendChild(document.createElement('br'));
}

function creaRadio() {
    let radio = document.createElement('input');
    radio.type='radio'
    radio.name=prompt('Introdueix el nom del radio button')
    let value=prompt('Introdueix el valor del radio button')
    radio.value=value
    //radio.innerText=value
    document.getElementById('form').appendChild(radio);
    document.getElementById('form').appendChild(document.createElement('br'));
}

function creaSubmit() {
    let submit = document.createElement('button');
    submit.type='submit'
    submit.name=prompt('Introdueix el nom del submit')
    submit.value=prompt('Introdueix el valor del submit')
    submit.textContent='Envia'
    document.getElementById('form').appendChild(submit);
    document.getElementById('form').appendChild(document.createElement('br'));
}