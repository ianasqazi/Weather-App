$(document).ready(function(){

  $("#currentWeather").append("<div id=cityIconBlock><span id=currentCity></span><img id=icon alt=logo></div>");
  $("#currentWeather").append("<p id=dayDate></p>");
  $("#currentWeather").append("<p id=currentTemp></p>");
  $("#currentWeather").append("<p id=currentHumidity></p>");
  $("#currentWeather").append("<p id=currentWindSpeed></p>");
  $("#currentWeather").append("<div><span id=currentUV>UV Index : </span><span id=uvValue></span><div>");

  if(localStorage.getItem("lastSearchedCity") === null){
    $("#searchCity").text("Toronto");
  }
  else{
    $("#searchCity").val(localStorage.getItem("lastSearchedCity"));
  };
  callAPI();
});

function callAPI(){
  var currentDate = moment().format("MMMM Do YYYY");
  var currentDay = moment().format("dddd");
  var currentCity = $.trim($("#searchCity").val());

  var APIKey = "b72c0d35aba9f0b8c0e9ebb9ec68c3f8";

  // First API Call to get current City Weather
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + currentCity + "&units=metric&appid=" + APIKey;
  
  $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
          $("#currentCity").text(currentCity);
          var iconCode=response.weather[0].icon;
          var iconURL="http://openweathermap.org/img/w/"+iconCode+".png";
          $("#icon").attr("src",iconURL);
          $("#dayDate").text(currentDay+ ", " + currentDate);

          $("#currentTemp").text("Tempreture (C) : " + response.main.temp + " " + String.fromCharCode(176) + "C");
          $("#currentHumidity").text("Humidity : " + response.main.humidity + " %");
          $("#currentWindSpeed").text("Wind Speed : " + response.wind.speed + " m/s");


        // Second API Call to get UV Index Value by using values from the response of First API call

            var latValue=(response.coord.lat);
            var lonValue=response.coord.lon;
            
            var queryURLUV="http://api.openweathermap.org/data/2.5/uvi?appid="+APIKey+"&lat="+ latValue + "&lon=" + lonValue;
              $.ajax({
                url: queryURLUV,
                method: "GET"
                }).then(function(response) {  

                $("#uvValue").text(response.value);
                // Green	  Low	0 - 2
                // Yellow	Moderate	3 - 5
                // Orange	High	6-7
                // Red	    Very High	8-10
                // Fuschia	Extreme	11+
                var checkIndex=Math.round(response.value);
                if(checkIndex>=11){
                  $("#uvValue").attr("class","fuschia");
                }
                else if(checkIndex>=8 && checkIndex>=10){
                  $("#uvValue").attr("class","red");
                }
                else if(checkIndex>=7 && checkIndex>=6){
                  $("#uvValue").attr("class","orange");
                }
                else if(checkIndex>=5 && checkIndex>=3){
                  $("#uvValue").attr("class","yello");
                }
                else {
                  $("#uvValue").attr("class","green");
                }

              });

          // Third API call to get forcast using values from response 1st API call
              var cityID=response.id;
              var queryURLForcast="http://api.openweathermap.org/data/2.5/forecast?appid="+APIKey+"&units=metric&id="+cityID;
              console.log(queryURLForcast);
            
              $.ajax({
                url: queryURLForcast,
                method: "GET"
                }).then(function(response) { 
                  $("#forcast").empty();
                  $("#forcast").append("<div class=row id=forcastBlock></div>")
                  for(i=1,j=0; i<=5; i++){

                    $("#forcastBlock").append("<div class=col id=day"+i+"></div>");
                    $("#day"+i).append("<p id=forcastDate"+i+">p</p>");
                    $("#day"+i).append("<img id=iconForcast"+i+" "+"alt=weatherLogo></img>");
                    $("#day"+i).append("<p id=forcastTemp"+i+">p</p>");
                    $("#day"+i).append("<p id=forcastHumidity"+i+">p</p>");

                    $("#forcastDate"+i).text(response.list[j].dt_txt);

                    var iconCode=response.list[j].weather[0].icon;
                    var iconURL="http://openweathermap.org/img/w/"+iconCode+".png";
                    $("#iconForcast"+i).attr("src",iconURL);

                    $("#forcastTemp"+i).text("Temp : " + response.list[j].main.temp + " " + String.fromCharCode(176) + "C");
                    $("#forcastHumidity"+i).text("Humidity : " + response.list[j].main.humidity + " %");
                    j=j+8;

                  }
              });
        });

        localStorage.setItem("lastSearchedCity",currentCity);

  }