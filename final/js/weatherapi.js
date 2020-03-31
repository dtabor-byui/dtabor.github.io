const URL = "https://api.openweathermap.org/data/2.5/weather?q=Riggins,Idaho&units=imperial&APPID=0e1c5890080d8be0649a1a1afc5f0d52";

const URL1 = "https://api.openweathermap.org/data/2.5/forecast?q=Riggins,Idaho&units=imperial&APPID=0e1c5890080d8be0649a1a1afc5f0d52";

fetch(URL)
  .then((response) => response.json())

  .then((jsWeather) => {
    document.getElementById('currently').textContent = jsWeather.weather[0].main;
    document.getElementById('high').textContent = jsWeather.main.temp + "˚F";
    document.getElementById('humidity').textContent = jsWeather.main.humidity + "%";
    document.getElementById('wind').textContent = jsWeather.wind.speed + " mph";

    var t = jsWeather.main.temp;
    var s = jsWeather.wind.speed;

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
  })

fetch(URL1)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsForecast) {
    const forecast = jsForecast['list'];
    var a = 0;
    

    for (let i = 0; i < forecast.length && a <= 2; i++) {
      if (forecast[i].dt_txt.includes("18:00:00")) {
        let main = document.createElement('div');
        let title = document.createElement('div');
        let temperature = document.createElement('div');
        let temp = document.createElement('p')
        let h3 = document.createElement('h3');
        let image = document.createElement('img');
        const src = 'https://openweathermap.org/img/w/' + jsForecast.list[i].weather[0].icon + '.png';


        let nd = new Date(forecast[i].dt_txt);
        let day = new Array();
        day[0] = "Sunday";
        day[1] = "Monday";
        day[2] = "Tuesday";
        day[3] = "Wednesday";
        day[4] = "Thursday";
        day[5] = "Friday";
        day[6] = "Saturday";
        var newdayname = day[nd.getDay()];
        h3.textContent = newdayname;

        main.classList.add('forecast-day');
        title.classList.add('forecast-title');
        temperature.classList.add('forecast-temperature');

        temp.textContent = forecast[i].main.temp;

        image.setAttribute('src', src);
        main.appendChild(title);
        main.appendChild(temp);
        main.appendChild(image)
        title.appendChild(h3);
        ;
        a++;

        document.querySelector('div.weather-forcast').appendChild(main);
      }
    }
  })

