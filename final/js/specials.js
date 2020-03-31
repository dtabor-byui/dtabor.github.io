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

if (iDay != 6 && iDay != 5 ) {
    let main = document.createElement('div');
    let para = document.createElement('li')
    main.classList.add('spec-1');
    
    para.textContent = 'If you ride with us today you will recieve a 20% discount';
    
    main.appendChild(para);
    document.querySelector('div.text-2').appendChild(main);
} else if (iMonth != 05 && iMonth != 06 && iMonth != 07 && iMonth != 08) {
    let main = document.createElement('div');
    let para = document.createElement('li')
    main.classList.add('spec-1');
    
    para.textContent = 'If you book and pay for a trip today you will recieve a 20% discount';
    
    main.appendChild(para);
    document.querySelector('div.text-2').appendChild(main);
} else {
    let main = document.createElement('div');
    let para = document.createElement('li')
    main.classList.add('spec-1');
    
    para.textContent = 'Call today for optional discounts';
    
    main.appendChild(para);
    document.querySelector('div.text-2').appendChild(main);
}


// delete before Production
console.log(day);
console.log(month);
console.log(date);
console.log(mMonth);
console.log(dDay);
console.log(iMonth);
console.log(iDay);