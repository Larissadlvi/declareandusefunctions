/* 
Exercise #1
We'll build the industry plant calendar from the opening exercise.
Part 1
First, build a function called "businessHours". Similar to the day of the week class exercise, this function should accept two parameters: dayNumber and hourNumber.
By reading the dayNumber and the hourNumber, your program should print whether it is business hours or not. It should return true if it is business hours, and false if not.
Obs: consider business hours 9am - 6pm. Use the 24-hour clock system (6pm = 18).
Mayor >
Menor <
*/

//function businessHours (dayNumber, hourNumber)


function businessHours(dayNumber,hourNumber) {
    //var dayNumber=parseInt(prompt("Ingresa el día con número "))
    var hourNumber=parseInt(prompt("Ingresa la hora en horario del sistema de reloj de 24 hrs"))
    
    if (hourNumber >= 9 && hourNumber <= 18 && dayNumber >= 1 && dayNumber <= 5){
        window.alert(true);
    }else  {
        
        window.alert(false)
    }   
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

function getDayNumber(janFirstDayNumber,yearDayNumber){
    var res = yearDayNumber % 7; 
    var final = (janFirstDayNumber+res)%7;
    return final;
}

//alert("El dia de la semana en el que cayo fue el : " + getDayNumber(parseInt(prompt("Que dia del año fue el 1ro de Enero?(Dom0-6Sab)")),parseInt(prompt("Que dia te gustaría saber?(0-365)"))));

//ACTV IS HERE https://github.com/generation-org/JS/tree/master/JS-03%20-%20Control%20Flow 



/*Part 3
Finally, build a function that, from a yearDayNumber (int, 0-365) and an hourNumber (int, 0-23), returns true if it is business hours.
*/
function workingHours() {
    getDayNumber();
    businessHours();
}
    workingHours();
    alert("El dia de la semana en el que cayo fue el : " + getDayNumber(parseInt(prompt("Que dia cayo el 1ro de Enero?(0-6)")),parseInt(prompt("Que dia quieres conocer?(0-365)"))));