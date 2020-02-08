var d = new Date();
thisDay = d.getDay();
friday = "It is Friday don't forget the pancake breakfast!!";
var date = (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();
document.getElementById("date").innerHTML = date;

    if (thisDay == 6) {
        document.getElementById("thisDay").innerHTML = friday;
    }
