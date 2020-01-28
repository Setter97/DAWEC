function comprueba(){
    //Date 
    let date=document.getElementById("date").value;
    date=date.split("/").reverse()
    let date2=new Date(date);

    //Cocinero
    let cocinero=document.getElementById("cocinero").value
    let regexCocinero=new RegExp('^[A-Z]{2}[!"·$%&()=?¿;:_,.*][0-9]{4}')
    if(!regexCocinero.test(cocinero)){
        alert("Error en cocinero")
    }
    //Destinatario
    let destinatario=document.getElementById("destinatario").value
    let regexDestinatario=new RegExp('^[A-Z]{1,3}_[a-z]{0,}:[0-9]{4}$')

    if(!regexDestinatario.test(destinatario)){
        alert("Error en el destinatario")
    }

    //Gramo
   //let gramo=document.getElementById("gramo").value
    

    //Composicion
    let composicion=document.getElementById("composicion").value
    let regexComposicion=new RegExp('^[0-9]{0,}g[A-Z0-9]{1,2}[A-Z0-9]{1,2}$')
    if(!regexComposicion.test(composicion)){
        alert("Error en composicion")
    }

    //Cuenta
    let cuenta=document.getElementById("cuenta").value
    let regexCuenta = new RegExp('^([a-z]{2})([0-9]{2})-([0-9]{6})([0-9]{6})-([0-9]{2})$');

    if(!regexCuenta.test(cuenta)){
        alert("Error en cuenta ")
    }else{
        let tag=cuenta.match(regexCuenta);
        let suma=(tag[1].charCodeAt(0)-96)+(tag[1].charCodeAt(1)-96)
        if(suma<10){
            suma=`0${suma}`
        }else{
            suma=`${suma}`
        }

        if(suma!=tag[2]){
            alert("Error en la cuenta")
        }else{
            let num1=tag[3]
            let num2=tag[4]
            let suma1=0;
            let suma2=0;
            for(let i=0;i<6;i++){
                suma1=suma1+parseInt(num1.charAt(i))
                suma2=suma2+parseInt(num2.charAt(i))
            }

            let resultado=Math.floor(suma1/6)+""+Math.floor(suma2/6)
            
            if(tag[5]!=resultado){
                alert("Error en la cuenta")
            }else{
                alert("Cuenta correcta")
            }
        }
    }

}