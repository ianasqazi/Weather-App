$(document).ready(function(){

  // var currentCity = "Toronto";
  // var currentDate = moment().format("MMMM Do YYYY");
  // var currentDay = moment().format("dddd");

  $("#currentWeather").append("<div id=cityIconBlock><span id=currentCity> Toronto </span> <img id=icon alt=logo></div>");
  $("#currentWeather").append("<p id=dayDate></>");
  $("#currentWeather").append("<p id=currentTemp>Temp</>");
  $("#currentWeather").append("<p id=currentHumidity>H</>");
  $("#currentWeather").append("<p id=currentWindSpeed>S</>");
  $("#currentWeather").append("<p id=currentUV>U</>");

  callAPI();

})

function callAPI(){
  var currentDate = moment().format("MMMM Do YYYY");
  var currentDay = moment().format("dddd");
  var currentCity = "Toronto";

  var APIKey = "b72c0d35aba9f0b8c0e9ebb9ec68c3f8";
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + currentCity + "&units=metric&appid=" + APIKey;
  
  $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
    $("#currentCity").text(currentCity);
    $("#dayDate").text(currentDay+ ", " + currentDate);
    $("#currentTemp").text("Tempreture (C) : " + response.main.temp);
    $("#currentHumidity").text("Humidity : " + response.main.humidity);
    $("#currentWindSpeed").text("Wind Speed : " + response.wind.speed);
    
        // $(".wind").text("Wind Speed: " + response.wind.speed);
        // $(".humidity").text("Humidity: " + response.main.humidity);
        // $(".temp").text("Temperature (F) " + response.main.temp);
      // console.log(queryURL);
      console.log(response);
    });
}


// 




// Preview details in the title 
// map to point location 
// can we find your current location ? 

// Calling api and logging details 



// Current weather to look like google current with forcast 




// add sun and moon photo or time 


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