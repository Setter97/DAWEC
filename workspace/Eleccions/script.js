//Guardar objectes dins array
let arrayObj = [];
let arrayColegis = ["", "Claustre", "Verge del Carme", "Verge de Gracia", "Sa Graduada"];
let arrayPolitics = ["", "PSOE", "PP", "IU", "Ciudadanos", "Podemos", "Mes"];

//CLASS
function Colegios() {
    this.nomCol = "";
    this.PSOE = 0
    this.PP = 0
    this.IU = 0
    this.Ciudadanos = 0
    this.Podemos = 0
    this.totalPunts=0;

    Colegios.prototype.addColegi = function (flag) {
        let num = "5";
        let centinela = false;

        if (flag == "") {

            do {
                num = prompt("1) Claustre \n2) Verge del Carme \n3) Verge de Gracia \n4) Sa Graduada")
                if (num == "1" || num == "2" || num == "3" || num == "4") {
                    this.nomCol = arrayColegis[num]
                    centinela = true;
                } else {
                    alert("Por favor introduce el valor correcto...")
                }
            } while (!centinela);

            centinela = false;
        }

        do {
            num = prompt("1) PSOE \n2) PP \n3) IU \n4) Ciudadanos\n5) Podemos\n6) Més")
            if (num == "1") {
                this.PSOE = prompt("Introdueix el valor de vots al PSOE: ");

                centinela = true;

            } else if (num == "2") {
                this.PP = prompt("Introdueix el valor de vots al PP: ");
                centinela = true;

            } else if (num == "3") {

                this.IU = prompt("Introdueix el valor de vots al IU: ");

                centinela = true;

            } else if (num == "4") {

                this.Ciudadanos = prompt("Introdueix el valor de vots al Ciudadanos: ");

                centinela = true;

            } else if (num == "5") {

                this.Podemos = prompt("Introdueix el valor de vots a Podemos: ");
                centinela = true;

            } else {
                alert("Por favor introduce el valor correcto...")
            }
        } while (!centinela);

        if (centinela && flag == "") {
            arrayObj.push(this);
        }

    }

    Colegios.prototype.toString = function () {
        return "Nom colegi: " + this.nomCol + "\nPSOE: " + this.PSOE + "\nPP: " + this.PP + "\nIU: " + this.IU + "\nCiudadanos: " + this.Ciudadanos + "\nPodemos: " + this.Podemos + "\n"
    }
}

function clonaArray(){
    let clonaArray=new Array();
    arrayObj.map(obj=>{
        clonaArray.push(obj);
    })
    return clonaArray;
}

function arraySort(){
    let clonat=clonaArray()
    clonat.sort((a,b)=>a.PSOE>b.PSOE)
   
    alert(clonat)
}

function contaVotsPartits(){
    let partit=prompt("Quin partit vols cercar? \n1) PSOE\n2) PP\n3) IU\n4) Ciudadanos\n5) Podemos\n")
    let suma=0;
    if(partit=="1"){
        arrayObj.map(obj=>{
            suma+=parseInt(obj.PSOE)
        })
    }else if(partit=="2"){
        arrayObj.map(obj=>{
            suma+=parseInt(obj.PP)
        })
    }else if(partit=="3"){
        arrayObj.map(obj=>{
            suma+=parseInt(obj.IU)
        })
    }else if(partit=="4"){
        arrayObj.map(obj=>{
            suma+=parseInt(obj.Ciudadanos)
        })
    }else if(partit=="5"){
        arrayObj.map(obj=>{
            suma+=parseInt(obj.Podemos)
        })
    }
    alert(suma);
}

function contaVotsColegis(){
    let colegi=prompt("Quin partit vols cercar? \n1) Claustre\n2) Verge del Carme\n3) IU\n4) Verge de Gracia\n5) Sa Graduada\n")
    let suma=0;
    if(colegi=="1"){
        arrayObj.map(obj=>{
            if(obj.nomCol=="Claustre"){
                suma+=parseInt(obj.PSOE)+parseInt(obj.PP)+parseInt(obj.IU)+parseInt(obj.Ciudadanos)+parseInt(obj.Podemos)
            }
        })
    }else if(colegi=="2"){
        arrayObj.map(obj=>{
            suma+=parseInt(obj.PP)
        })
    }else if(colegi=="3"){
        arrayObj.map(obj=>{
            suma+=parseInt(obj.IU)
        })
    }else if(colegi=="4"){
        arrayObj.map(obj=>{
            suma+=parseInt(obj.Ciudadanos)
        })
    }else if(colegi=="5"){
        arrayObj.map(obj=>{
            suma+=parseInt(obj.Podemos)
        })
    }
    alert(suma);
}


function llistaMayorCandidatos(){
    let cadasd ="a : b";
    let cosita=cadasd.split(':')
    alert(cosita[1])
    let arrayClonat=clonaArray();
    let psoe=0;
    let pp=0;
    let iu=0;

    arrayClonat.map(obj=>{
        psoe+=parseInt(obj.PSOE)
        pp+=parseInt(obj.PP)
        iu+=parseInt(obj.IU)
    })
    let prova=new Array();
    prova.push("PSOE: "+psoe)
    prova.push("PP: "+pp)
    prova.push("IU: "+iu)
    prova.sort((a,b)=>a>b);
    alert(prova[0]);
}
//JQuery
$(document).ready(function () {
    $(".add").click(function () {
        let colegi1 = new Colegios();
        colegi1.addColegi("");
    })

    $(".creaTaula").click(function () {
        $(".taula").text("");
        let table = document.createElement('table')

        let votosPSOE = 0;
        let votosPP = 0;
        let votosIU = 0;
        let votosCiuda = 0;
        let votosPodem = 0;

        for (let i = 0; i < arrayObj.length; i++) {
            let tr = document.createElement('tr');

            if (i == 0) {
                let tr = document.createElement('tr');

                let td = document.createElement('td')
                td.align = "center"
                td.appendChild(document.createTextNode(`Colegi`))
                tr.appendChild(td);


                let td1 = document.createElement('td')
                td1.align = "center"
                td1.appendChild(document.createTextNode(`PSOE`))
                tr.appendChild(td1);

                let td2 = document.createElement('td')
                td2.align = "center"
                td2.appendChild(document.createTextNode(`PP`))
                tr.appendChild(td2);

                let td3 = document.createElement('td')
                td3.align = "center"
                td3.appendChild(document.createTextNode(`IU`))
                tr.appendChild(td3);

                let td4 = document.createElement('td')
                td4.align = "center"
                td4.appendChild(document.createTextNode(`Ciudadanos`))
                tr.appendChild(td4);

                let td5 = document.createElement('td')
                td5.align = "center"
                td5.appendChild(document.createTextNode(`Podemos`))
                tr.appendChild(td5);

                let td6 = document.createElement('td')
                td6.align = "center"
                td6.appendChild(document.createTextNode(`C. Total`))
                tr.appendChild(td6);


                table.append(tr);
            }

            let td = document.createElement('td')
            td.align = "center"
            td.appendChild(document.createTextNode(`${arrayObj[i].nomCol}`))
            tr.appendChild(td);
            

            let td1 = document.createElement('td')
            td1.align = "center"
            td1.appendChild(document.createTextNode(`${arrayObj[i].PSOE}`))
            tr.appendChild(td1);
            votosPSOE +=parseInt(arrayObj[i].PSOE);

            let td2 = document.createElement('td')
            td2.align = "center"
            td2.appendChild(document.createTextNode(`${arrayObj[i].PP}`))
            tr.appendChild(td2);
            votosPP +=parseInt(arrayObj[i].PP);

            let td3 = document.createElement('td')
            td3.align = "center"
            td3.appendChild(document.createTextNode(`${arrayObj[i].IU}`))
            tr.appendChild(td3);
            votosIU +=parseInt(arrayObj[i].IU);

            let td4 = document.createElement('td')
            td4.align = "center"
            td4.appendChild(document.createTextNode(`${arrayObj[i].Ciudadanos}`))
            tr.appendChild(td4);
            votosCiuda +=parseInt(arrayObj[i].Ciudadanos);

            let td5 = document.createElement('td')
            td5.align = "center"
            td5.appendChild(document.createTextNode(`${arrayObj[i].Podemos}`))
            tr.appendChild(td5);
            votosPodem +=parseInt(arrayObj[i].Podemos);

            let result = parseInt(arrayObj[i].PSOE) + parseInt(arrayObj[i].PP) + parseInt(arrayObj[i].IU) + parseInt(arrayObj[i].Ciudadanos) + parseInt(arrayObj[i].Podemos)

            let td6 = document.createElement('td')
            td6.align = "center"
            td6.className = "cTotal";
            td6.appendChild(document.createTextNode(`${result}`))
            tr.appendChild(td6);

            let button = document.createElement('button');
            button.textContent = "Edita"
            button.addEventListener('click', function () {
                arrayObj[i].addColegi("f")
            })
            tr.appendChild(button);
            table.appendChild(tr);

            if (i == arrayObj.length-1) {
                let tr = document.createElement('tr');
                let td = document.createElement('td')
                td.align = "center"
                td.appendChild(document.createTextNode(`TOTAL`))
                tr.appendChild(td);
                

                let td1 = document.createElement('td')
                td1.align = "center"
                td1.appendChild(document.createTextNode(`${votosPSOE}`))
                tr.appendChild(td1);

                let td2 = document.createElement('td')
                td2.align = "center"
                td2.appendChild(document.createTextNode(`${votosPP}`))
                tr.appendChild(td2);

                let td3 = document.createElement('td')
                td3.align = "center"
                td3.appendChild(document.createTextNode(`${votosIU}`))
                tr.appendChild(td3);

                let td4 = document.createElement('td')
                td4.align = "center"
                td4.appendChild(document.createTextNode(`${votosCiuda}`))
                tr.appendChild(td4);

                let td5 = document.createElement('td')
                td5.align = "center"
                td5.appendChild(document.createTextNode(`${votosPodem}`))
                tr.appendChild(td5);


                let result = parseInt(votosPSOE) + parseInt(votosPP) + parseInt(votosIU) + parseInt(votosCiuda) + parseInt(votosPodem)

                let td6 = document.createElement('td')
                td6.align = "center"
                td6.className = "SuperTotal";
                td6.appendChild(document.createTextNode(`${result}`))
                tr.appendChild(td6);
                table.appendChild(tr);
            }
        }
        $(".taula").append(table);
    })


    $('.ordena').click(function () { 
        arraySort();
     })

     $('.contaVotsPartits').click(function (){
         contaVotsPartits();
     })

     $('.contaVotsColegis').click(function (){
        contaVotsColegis();
    })
     $('.ordenaMayorCandidatos').click(function (){
        llistaMayorCandidatos();
    })

})