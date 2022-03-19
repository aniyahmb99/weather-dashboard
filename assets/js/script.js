var currentTemp = document.getElementById("#temp");
var currentWind = document.getElementById("#wind");
var currentHumidity = document.getElementById("#humidity");
var UVIndex = document.getElementById("#UVIndex");

var btn = document.querySelector("#btn");

// save user's city into a variable?
var saveCity = function () {
    event.preventDefault();
    var city = document.getElementById("city").value;
    localStorage.setItem("city", city);
};

var getCoordinates = function (coordinates) {

    var geocodingUrl = "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={APIkey}";

    fetch(geocodingUrl).then(function (respone) {
        // if request is successful
        if (Response.ok) {
            Response.json().then(function (data) {
                secondFunction(data); // fix name later
            }
            )
        }
    })
};
btn.addEventListener("click", saveCity);



// var oneCallUrl = https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={APIkey}

// // cityname to lat/long converter API
// var geocodingUrl = http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={APIkey}