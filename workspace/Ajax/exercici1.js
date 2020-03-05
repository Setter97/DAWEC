function temps(){
    let city=document.getElementById("citys").value
    let xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            let obj=JSON.parse(this.responseText)
            let name=obj.name
            let weather=obj.weather[0].main
            document.getElementById("cosa").innerHTML="Ciutat: "+name+"<br>Temps: "+weather
            //console.log(obj);
        }
    }
    xhttp.open("GET","http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=906a992f434bb3aca14ffb6ff41010fa",true)
    xhttp.send()
}
