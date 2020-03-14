const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=d84c1685f942afd6215201b789f554fa";

fetch(apiURL)
  .then((response) => response.json())

  .then((jsObject) => {
    console.log(jsObject); //remove this LINE for production!
    document.getElementById('currently').textContent = jsObject.weather[0].main;
    document.getElementById('high').textContent = jsObject.main.temp_max + " ˚F";
    document.getElementById('humidity').textContent = jsObject.main.humidity + " %";
    document.getElementById('wind').textContent = jsObject.wind.speed + " mph";

    var t = jsObject.main.temp;
    var s = jsObject.wind.speed;

    if (t <= 50 && s >= 3) {
      var windchills = windChill(t, s);
      document.getElementById('windchill').textContent = windchills;
    } else {
      var windchills = " N/A ";
      document.getElementById('windchill').textContent = windchills;
    }

    function windChill(t, s) {
      var f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, .16) + 0.4275 * t * Math.pow(s, .16);
      var l = Math.round(f * 100) / 100;
      return l;
    }
  });

