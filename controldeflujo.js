/* 
Exercise #1
We'll build the industry plant calendar from the opening exercise.

Part 1
First, build a function called "businessHours". Similar to the day of the week class exercise, this function should accept two parameters: dayNumber and hourNumber.

By reading the dayNumber and the hourNumber, your program should print whether it is business hours or not. It should return true if it is business hours, and false if not.

Obs: consider business hours 9am - 6pm. Use the 24-hour clock system (6pm = 18). */

//function businessHours (dayNumber, hourNumber)

var dayNumber = parseInt(prompt("Give me a number day, -consider 0 is sunday, 1 is monday and so on-: "));

if (dayNumber == 0) {
alert("false, not a business day");
}else if (dayNumber==1){
    alert("true = monday, business day");
}else if(dayNumber ==2){
    alert("true = tuesday, business day");
} else if(dayNumber==3){
    alert("true = wednesday, business day");
}else if(dayNumber==4){
    alert("true = thursday, business day");
}else if(dayNumber==5){
    alert("true = friday, business day");
}else if(dayNumber==6){
    alert("false, saturday, not a business day");
}else{
    alert("false");
}

//9am-18:00hrs business hours

var hourNumber = parseInt(prompt("Give me an hour, -consider the 24-hour clock system i.e. 6pm = 18 and so on-: "));

if (hourNumber == 00 && hourNumber <= 9) {
alert("false = not business hours");
}else if (hourNumber>=9 && hourNumber <=18){
    alert("true = business hours");
}else{
    alert("false");
}

businessHours();

/*
Part 2
Now, create the function getDayNumber.

It should accept two parameters: janFirstDayNumber and yearDayNumber.

The yearDayNumber will be an int ranging from 0 to 365.

janFirstDayNumber will be an int ranging from 0 to 6, representing the day of the week of January 1st.

Your function should then calculate and return the day of the week corresponding to the yearDayNumber passed.

Hint: use the remainder operator (%), dividing your yearDayNumber by 7. */

function getDayNumber(janFirstDayNumber, yearDayNumber)
var janFirstDayNumber = parseInt(prompt("What, numbered 0 to 6, day is it?")); //1er semana
var yearDayNumber = parseInt(prompt("What day of the year is it?"));
alert("the day corresponding of the week is: " + ((yearDayNumber)/7)); 

/* function age (year) {
var year = prompt("What's your year of birth?");
alert(2022-year);
}
age();*/



/*Part 3
Finally, build a function that, from a yearDayNumber (int, 0-365) and an hourNumber (int, 0-23), returns true if it is business hours.
*/
