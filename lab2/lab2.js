//the program wont run because the call functions are in a comment in the end of the code.
var year;
var monthNumber; //used to convert month's names to numbers
var month;
var day;

function getMonthNumber(year, month)
{
  if (month == "april" || month == "july")
            {
              monthNumber = 0;
            }
  else if (month == "january" || month == "october")
            {
              monthNumber = 1;
            }
            if (month == "may")
            {
              monthNumber = 2;
            }
  else if (month == "august")
            {
              monthNumber = 3;
            }
            if (month == "november" || month == "february" || month == "march")
            {
              monthNumber = 4;
            }
  else if (month == "jun")
            {
              monthNumber = 5;
            }
            if (month == "september" || month == "december")
            {
              monthNumber = 6;
            }

  if ((itsLeapYear(year) == true) && ((month == "january") || (month = "february")))
  {
    monthNumber = monthNumber - 1;
  }

   if (Math.floor(year / 100) == 16 || Math.floor(year / 100) == 20)
  {
    monthNumber = monthNumber + 6;
  }

  else if (Math.floor(year / 100) == 17 || Math.floor(year / 100) == 21)
  {
    monthNumber = monthNumber + 4;
  }
  else if (Math.floor(year / 100) == 18 )
  {
    monthNumber = monthNumber +  2;
  }



    return monthNumber;



}

function getMonth(monthNumber)
{
  if ( monthNumber == 1 )
    return "january";

    else if ( monthNumber == 2)
    return "february";

     else if ( monthNumber == 3)
    return "march";

     else if ( monthNumber == 4)
    return "april";
     else if ( monthNumber == 5)
    return "may";
     else if ( monthNumber == 6)
    return "june";
     else if ( monthNumber == 7)
    return "july";
     else if ( monthNumber == 8)
    return "august";
     else if ( monthNumber == 9)
    return "september";
     else if ( monthNumber == 10)
    return "october";
     else if ( monthNumber == 11)
    return "november";
     else if ( monthNumber == 12)
    return "december";
}

function getDayOfTheWeek(year, month, day)
{
      var countTwelves = 0;
      var remainder = 0;
      var countFours = 0;

          LastTwoDigits = (Math.floor(year / 100));
          LastTwoDigits = LastTwoDigits * 100;
          LastTwoDigits = year - LastTwoDigits;


            countTwelves = Math.floor(LastTwoDigits / 12);
            remainder = LastTwoDigits - countTwelves*12;
            countFours = Math.floor(remainder / 4);

          monthNumber = getMonthNumber(year, month);


            var dayOfTheWeek = countTwelves + remainder + countFours + day + monthNumber;

            dayOfTheWeek = dayOfTheWeek % 7;

            if (dayOfTheWeek == 0)
            {
              dayOfTheWeek = "saturday";
            }
            else if (dayOfTheWeek == 1)
            {
              dayOfTheWeek = "sunday";
            }
            else if (dayOfTheWeek == 2)
            {
              dayOfTheWeek = "monday";
            }
            else if (dayOfTheWeek == 3)
            {
              dayOfTheWeek = "tuesday";
            }
            else if (dayOfTheWeek == 4)
            {
              dayOfTheWeek = "wednesday";
            }
            else if (dayOfTheWeek == 5)
            {
              dayOfTheWeek = "thursday";
            }
            else if (dayOfTheWeek == 6)
            {
              dayOfTheWeek = "friday";
            }



            return(dayOfTheWeek);

}

function itsLeapYear(year)
{
  if  (year % 4 != 0) {
      return false;
  }
  else if (year % 100 != 0) {
    return true;
  }
  else if ( year % 400 != 0) {
    return false;
  }
  else {
    return true;
  }

}

function makeCalendar()
{

  var i;
  var j;

  for(i = 1; i <= 12; i++)
  {

      if(i == 1)
        {

          for(j = 1; j <= 31; j++)

              {
                console.log(i + " - " + j + " - 2021 " + "is a " + getDayOfTheWeek(2021, getMonth(i), j));

              }


        }


          else if (i == 3)
          {

            for(j = 1; j <= 31; j++)
            {
              console.log(i + " - " + j + " - 2021 " + "is a " + getDayOfTheWeek(2021, getMonth(i), j));
            }

          }
             else if (i == 5)
          {

            for(j = 1; j <= 31; j++)
            {
              console.log(i + " - " + j + " - 2021 " + "is a " + getDayOfTheWeek(2021, getMonth(i), j));
            }

          }
             else if (i == 12)
          {

            for(j = 1; j <= 31; j++)
            {
              console.log(i + " - " + j + " - 2021 " + "is a " + getDayOfTheWeek(2021, getMonth(i), j));
            }

          }
             else if (i == 7)
          {

            for(j = 1; j <= 31; j++)
            {
              console.log(i + " - " + j + " - 2021 " + "is a " + getDayOfTheWeek(2021, getMonth(i), j));
            }

          }
             else if (i == 8)
          {

            for(j = 1; j <= 31; j++)
            {
              console.log(i + " - " + j + " - 2021 " + "is a " + getDayOfTheWeek(2021, getMonth(i), j));
            }

          }

          else if (i == 10)
          {

            for(j = 1; j <= 31; j++)
            {
              console.log(i + " - " + j + " - 2021 " + "is a " + getDayOfTheWeek(2021, getMonth(i), j));
            }

          }

          else if (i == 4)
          {

            for(j = 1; j <= 30; j++)
            {
              console.log(i + " - " + j + " - 2021 " + "is a " + getDayOfTheWeek(2021, getMonth(i), j));
            }

          }

          else if (i == 6 )
          {

            for(j = 1; j <= 30; j++)
            {
              console.log(i + " - " + j + " - 2021 " + "is a " + getDayOfTheWeek(2021, getMonth(i), j));
            }

          }
          else if (i == 9 )
          {

            for(j = 1; j <= 30; j++)
            {
              console.log(i + " - " + j + " - 2021 " + "is a " + getDayOfTheWeek(2021, getMonth(i), j));
            }

          }
          else if (i == 11)
          {

            for(j = 1; j <= 30; j++)
            {
              console.log(i + " - " + j + " - 2021 " + "is a " + getDayOfTheWeek(2021, getMonth(i), j));
            }

          }
       

            else if(i == 2 )
            {

              for(j = 1; j <= 29; j++)
              {
                console.log(i + " - " + j + " - 2021 " + "is a " + getDayOfTheWeek(2021, getMonth(i), j));
              }

            }

    }
}

//console.log(getDayOfTheWeek(2020, "january", 1));  test

//console.log(makeCalendar());

module.exports = {getDayOfTheWeek, makeCalendar};