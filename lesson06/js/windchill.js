var t = parseFloat(document.getElementById("temp").textContent);
var s = parseFloat(document.getElementById("wind").textContent);
if (t <= 50 && s >= 4.8) {
    var windchills = windChill(t, s);
    document.getElementById('windchill').textContent = windchills;
} else {
    var windchills = " N/A ";
    document.getElementById('windchill').textContent = windchills;
}


function windChill(t, s) {
    var f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, .16) + 0.4275 * t * Math.pow(s, .16);
    var l = Math.round(f * 100) / 100
    return l;
}