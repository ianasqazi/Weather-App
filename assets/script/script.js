$(document).ready(function(){

  $("#currentWeather").append("<div id=cityIconBlock><span id=currentCity></span><img id=icon alt=logo></div>");
  $("#currentWeather").append("<p id=dayDate></p>");
  $("#currentWeather").append("<p id=currentTemp></p>");
  $("#currentWeather").append("<p id=currentHumidity></p>");
  $("#currentWeather").append("<p id=currentWindSpeed></p>");
  $("#currentWeather").append("<div><span id=currentUV>UV Index : </span><span id=uvValue></span><div>");

  callAPI();
})

function callAPI(){
  var currentDate = moment().format("MMMM Do YYYY");
  var currentDay = moment().format("dddd");
  var currentCity = $.trim($("#searchCity").val());

  var APIKey = "b72c0d35aba9f0b8c0e9ebb9ec68c3f8";
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

      var latValue=(response.coord.lat);
      var lonValue=response.coord.lon;
      var queryUrlUV="http://api.openweathermap.org/data/2.5/uvi?appid="+APIKey+"&lat="+ latValue + "&lon=" + lonValue;
        $.ajax({
          url: queryUrlUV,
          method: "GET"
          }).then(function(response) {  

          $("#uvValue").text(response.value);
          
          var checkIndex=Math.round(response.value);
          console.log(checkIndex);
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

  });

  }




// 

// if (angle >= 90 && angle <= 180) {

/* Green	  Low	0 - 2
Yellow	Moderate	3 - 5
Orange	High	6-7
Red	    Very High	8-10
Fuschia	Extreme	11+ */

// >>>>>> Requirements 

// - Using Openweathermap for cities ( use how to start )
// - Use ajax to call and retrieve in JSON format and save in JSON format 
// - Dynamically create elements to view in browser 

// - DISPLAY : 
//  # city 
//  # date 
//  # icon image ( weather condition)
//  # tempreture 
//  # Humidy 
//  # wind speed 
//  # UV index 
//  ## Future conditions ( 5 day forcast excluding windspeed and humidity)

// - search history of user 
// - clicking on city should perform a new search

// >>>>>>>> HINTS provided 