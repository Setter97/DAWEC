function temps(){
    let city=document.getElementById("citys").value
    $.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=906a992f434bb3aca14ffb6ff41010fa",function (obj,status) { 
        if(status=="success"){
            document.getElementById("cosa").innerHTML="Ciutat: "+obj.name+"<br>Temps: "+obj.weather[0].main
        }else{
            console.log("Error")
        }
     })
}
