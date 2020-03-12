$('button').click(function () { 

    prediccio(this.textContent.toLowerCase())
 })

function prediccio(city){
    let idApi="906a992f434bb3aca14ffb6ff41010fa"
    let url="http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid="+idApi
    fetch(url,{
        method:"GET"
    }).then(response=>response.json())
    .then(response=>{
        console.log(response);
        //document.getElementById("prediccio5dies").innerHTML=response.name+" "+response.id
    })
}