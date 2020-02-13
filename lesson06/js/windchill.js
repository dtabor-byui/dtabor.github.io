function calculate () {
    var temp = parseFloat (document.getElementById('temp').value);
    var wind = parseFloat (document.getElementById('wind').value);
    var itsCold = windChill(temp,wind);
    if (temp >= 50 && wind >= 4.8) {
        document.write
    } 
    var div = document.getElementById ('').textContent =
        div.textContent = itsCold;
    }


function windChill (temp,wind) {
    var a = Math.pow(v,.16);
    var windChill = 35.74 + 0.6215 * t -35.75* a + .4275 * t * a;
    return windChill;
    
    }