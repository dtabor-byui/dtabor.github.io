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
console.log(dDay);
var mMonth = month[date.getMonth()];
var iMonth = month.indexOf(mMonth);
var iDay = day.indexOf(dDay);
console.log(iDay);
let main = document.createElement('div');
let ul = document.createElement('ul');
let li = document.createElement('li');
main.classList.add('spec-1');

main.appendChild(ul);
ul.appendChild(li);

if (iDay != 6 && iDay != 5 && iMonth != 05 && iMonth != 06 && iMonth != 07 && iMonth != 08) {
    li.textContent = 'If you ride with us today you will recieve a 20% discount';
}
else if (iMonth != 05 && iMonth != 06 && iMonth != 07 && iMonth != 08) {
    li.textContent = 'If you book and pay for a trip today you will recieve a 20% discount';
} else {
    para.textContent = 'Call today for other potential discounts';
}

document.querySelector('div.text-2').appendChild(main);