var date = new Date();
var discount = 0;


var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";



let day = new Array();
day[0] = "Sunday";
day[1] = "Monday";
day[2] = "Tuesday";
day[3] = "Wednesday";
day[4] = "Thursday";
day[5] = "Friday";
day[6] = "Saturday";

var dDay = day[date.getDay()];
var mMonth = month[date.getMonth()];
var iMonth = month.indexOf(mMonth);
var iDay = day.indexOf(dDay);

if (iDay != 6 && iDay != 5) {
    let main = document.createElement('div');
    let para = document.createElement('p')

   /* h2.textContent = town[i].name;
    p.textContent = 'Motto: ' + town[i].motto;
    pop.textContent = 'Population: ' + town[i].currentPopulation;
    year.textContent = 'Year Founded: ' + town[i].yearFounded;
    rain.textContent = 'Average Rainfall: ' +town[i].averageRainfall;
    */
    
}


// delete before Production
console.log(date);
console.log(mMonth);
console.log(dDay);
console.log(iMonth);
console.log(iDay);