/*Exercise #1
Maria has to calculate the cost of her payments for the month. For every transation there is a $3 fee and a 0.1% (0.01) interest fee. Can you help her calculate her costs?

Return the value of what she should be paying.*/

function payment(transactions, total){
    var transactions = parseInt(prompt("Number of transactions "));
    var total = parseInt(prompt("Total cost of payments: "));
    alert("The final payment is: "+ ((transactions*3)+total)*1.01);
}
payment();

/*Exercise #2
Part 1
Ed would like a way to input 3 names of his friends. The output should be a console greeting to his friends saying: Welcome {name1}, {name2}, {name3}. */
function names (a,b,c) {
    var a = prompt("What is your name?");
    var b =prompt("What's the second name?");
    var c = prompt("What's the third name?");
    console.log("Welcome " +a +", "+ b +", " + c);
}
names();

/*Part 2
Ed would like to create a function that takes in a birth year and returns the age.

i.e. 1990 returns 30*/

function age (year) {
var year = prompt("What's your year of birth?");
alert(2022-year);
}
age();

/*Part 3
Ed would like to create a function that prints out, Welcome {name1}, you are {age1}. Welcome {name2}, you are {age2}. Welcome {name3}, you are {age3}.*/

function nameAge(n1, n2, n3, a1, a2, a3) {
    var n1 = prompt("What's the first name?");
    var a1 = prompt("Tell me " +n1 + "s age:");
    var n2 = prompt("What's the second name?");
    var a2 = prompt("Tell me " +n2 + "s age:");
    var n3 = prompt("What's the third name?");
    var a3 = prompt("Tell me " +n3 + "s age:");
    alert("Welcome " +n1 +" you are " +a1 + " years old " + " WElcome " +n2 +" you are " +a2 + " years old." +"Welcome " +n3 +" you are " +a3 + " years old.");
}

nameAge();

/*Challenge Yourself
A teacher wants to create a rubric for grading. The rubric is from 0 - 11.

Part 1
A student passes if they have a score greater than or equal to 5. Create a function that returns a boolean true or false.*/
function grade() {
    var grade = parseInt(prompt ("What are the grades: "));
    if(grade >= 5 && grade <= 8){
        alert(true);
    }
    else if(grade > 8 && grade < 11) {
        alert ("Excellent")
    }
    else if (grade == 11) {
        alert("Perfect")
    }
    else if(grade >= 0 && grade < 5){
        alert(false);
    }
    else{
        alert("out of range")
    }
}
grade();