var getDayOfTheWeek = require("./lab2").getDayOfTheWeek;
var makeCalander = require("./lab2").makeCalendar;

var readline = require('readline-sync');


var year =readline.question('input the year: ');
var month =readline.question('input the month: ');
var day =readline.question('input the day: ');

    console.log(makeCalendar());

    console.log("You typed: ");
    console.log(getDayOfTheWeek(year, month, day));

 