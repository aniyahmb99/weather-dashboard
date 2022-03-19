var currentTemp = document.getElementById("#temp");
var currentWind = document.getElementById("#wind");
var currentHumidity = document.getElementById("#humidity");
var UVIndex = document.getElementById("#UVIndex");
var searchHistory = JSON.parse(localStorage.getItem("#city")); // ??
var btn = document.querySelector("#btn");

// save user's city into a variable? 
var saveCity = function () {
    event.preventDefault();
    var city = document.getElementById("city").value;
    localStorage.setItem("city", city);
};

var getCoords = function (cityName) {
    var lat = ;
    var lon = ;
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=974fa9cd5b93c10b8e96c09931208dc7');
        .then(response => response.json())
    .then(data => console.log(data))

}

getCoords();

btn.addEventListener("click", saveCity);



