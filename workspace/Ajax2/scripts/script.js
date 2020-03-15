let apiKey = "906a992f434bb3aca14ffb6ff41010fa";

$(".btn").click(function() {
  lanzarClima($(this));
});

function lanzarClima(button) {
  let city = $(button).text();

  fetch(
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&appid=" +
      apiKey +
      "&units=metric",
    {
      method: "GET"
    }
  )
    .then(res => res.json())
    .then(city => {
      console.log(city.list);
      let anterior="";
      $("#5dies").empty()
      for (let i = 0; i < city.list.length; i++) {
       //console.log(anterior.split(" ")[0])
        let div = document.createElement("div");
        if(anterior.split(" ")[0]!=(city.list[i].dt_txt).split(" ")[0]){
          $(div)
          .attr("id", "prediccio5dies")
          .append([
            $(document.createElement("h6")).text(
              new Date(city.list[i].dt_txt).toLocaleDateString()
            ),
            $(document.createElement("ul"))
              .addClass("list-unstyled list-inline")
              .append([
                $(document.createElement("li")).append(
                  $(document.createElement("div"))
                    .addClass("well well-sm text-center")
                    .append([
                      $(document.createElement("b")).text(
                        new Date(city.list[i].dt_txt).toLocaleTimeString()
                      ),
                      $(document.createElement("br")),
                      $(document.createElement("img")).attr({
                        src:
                          "http://openweathermap.org/img/w/" +
                          city.list[i].weather[0].icon +
                          ".png"
                      }),
                      $(document.createElement("p")).text(
                        city.list[i].weather[0].main
                      ),
                      $(document.createElement("p")).append(
                        $(document.createElement("span"))
                          .addClass("badge")
                          .text(city.list[i].main.temp + "ºC")
                      )
                    ])
                )
              ])
          ]);
        }else{
          $(div)
          .attr("id", "prediccio5dies")
          .append([
            $(document.createElement("h6")).text(
              //new Date(city.list[i].dt_txt).toLocaleDateString()
            ),
            $(document.createElement("ul"))
              .addClass("list-unstyled list-inline")
              .append([
                $(document.createElement("li")).append(
                  $(document.createElement("div"))
                    .addClass("well well-sm text-center")
                    .append([
                      $(document.createElement("b")).text(
                        new Date(city.list[i].dt_txt).toLocaleTimeString()
                      ),
                      $(document.createElement("br")),
                      $(document.createElement("img")).attr({
                        src:
                          "http://openweathermap.org/img/w/" +
                          city.list[i].weather[0].icon +
                          ".png"
                      }),
                      $(document.createElement("p")).text(
                        city.list[i].weather[0].main
                      ),
                      $(document.createElement("p")).append(
                        $(document.createElement("span"))
                          .addClass("badge")
                          .text(city.list[i].main.temp + "ºC")
                      )
                    ])
                )
              ])
          ]);
        }
        anterior=city.list[i].dt_txt;
        $("#5dies").append(div);
      }
    });

  fetch(
    "http://api.openweathermap.org/data/2.5/forecast/daily?q=" +
      city +
      "&cnt=16&appid=" +
      apiKey +
      "&units=metric",
    {
      method: "GET"
    }
  )
    .then(res => res.json())
    .then(city => {
      $("#prediccio16dies").empty()
      for (let i = 0; i < city.list.length; i++) {
        let li = document.createElement("li");
        $(li).append(
          $(document.createElement("div"))
            .append([
              $(document.createElement("p")).append(
                $(document.createElement("b")).text(
                  new Date(city.list[i].dt * 1000).toLocaleDateString()
                )
              ),
              $(document.createElement("img")).attr({
                src:
                  "http://openweathermap.org/img/w/" +
                  city.list[i].weather[0].icon +
                  ".png"
              }),
              $(document.createElement("p")).text(city.list[i].weather[0].main),
              $(document.createElement("span"))
                .attr({
                  class: "label label-warning"
                })
                .text(city.list[i].temp.max + "ºC"),

              $(document.createElement("span"))
                .attr({
                  class: "label label-default"
                })
                .text(city.list[i].temp.min + "ºC")
            ])
            .addClass("well well-sm text-center ")
        );
        $("#prediccio16dies").append($(li));
      }
    });
}
