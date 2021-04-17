// CHAPTER NO.1
// Task no .1

alert("Greetings, Welcome to our website")

// Task no .2

alert ("Error! Please enter a valid password")

// Task no .3

alert("Welcome to JS Land...\nHappy Coding!");

// Task no .4

alert("Welcome to JS Land...");
alert("Happy Coding!");

// Task no .5
// Open to chrome brower's and press F12 the developer console is now open..
// In console click second tab called console and type:
alert("hello... i can run JS through my web browser's console")


 // Task no .6 
window.alert("welcome to Revolution Designer!");

// Task no .7
// A: Head

//<html>
// <head>
//    <script src="app.js"></script>
// </head>
//    <body>
//    <h1>Assignment No.1</h1>
//    
//    </body>
//</html>

// B: Body (before your page’s HTML)

//<html>
// <head>
// </head>
//    <script src="app.js"></script>
//    <body>
//    <h1>Assignment No.1</h1>
//    
//    </body>
//</html>

// C: Body (inside your page’s HTML)

//<html>
// <head>
// </head>
//    <body>
//    <h1>Assignment No.1</h1>
//    
//    <script src="app.js"></script>
//    </body>
//</html>

// D: Body (After your page’s HTML)

//<html>
// <head>
// </head>
//    <body>
//    <h1>Assignment No.1</h1>
//    
//    </body>
//    <script src="app.js"></script>
//</html>




//********************-------------------*****************Chapter 2********************-------------------*****************//
//CHAPTER 2 :
// Task no .1 :

var userName;

// Task no .2 :

var myName = "Tasbia Tahir";

// Task no .3 :


var message = "Hello World!" ;
alert(message)


// Task no .4 :
var studentName = "Tasbia awan" ;
var studentAge = "20 year old" ;
var studentCousre = "Certified Web and mobile app development" ;
alert (studentName)
alert (studentAge)
alert (studentCousre)


// Task no .5 :

var eat = "PIZZA \nPIZZ \nPIZ \nPI \nP" ;
alert (eat)

// Task no .6 :
var email = "example123@gmail.com";
alert ("my email address is" + " " + email )

// Task no .7 :
var book = "A smarter way to learn JavaScript";
alert ("I am trying to learn from the Book" + " " + book)

// Task no .8 :
var myMessage ="Yah! I can write HTML content through Javascript";
document.write (myMessage) 

// Task no. 9 :
var  myDesign = " ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬ ";
alert (myDesign)


//********************-------------------*****************Chapter 3********************-------------------*****************//
// CHAPTER NO.3 :
// Task no. 1 :

var age = 20 ;
alert ("I am " + age + "years old")


// Task no. 2 :

var numVisited = 14 ;
alert ("you have visited this site " + numVisited + " times" )


//task no. 3 :
var birthYear = 1999 ;
document.write ("My birth year is " + birthYear + "<br> Data types of my Decleared variable is number")

//task no. 4 :


var visitorName = "tasbia";
var productTitle = "T-shirt" ;
var quantity = 5 ;
document.write (visitorName + " ordered " + quantity  + " " + productTitle +"(s) on XYZ Clothing store"  )

//********************-------------------*****************Chapter 4********************-------------------*****************//
// CHAPTER NO.4
//task no. 1 :

var a = "Hello World!", 
b = "Testing",
c = 42;
document.write (a + b +c)



//Task no. 2
//var _number, $result, myApp, student_name, a;      //Legal
// var 1number,? result, !myapp, @student,-name;  //Illegal


//task no.3


document.write("<h3> Rules for naming JS variable </h3>");
document.write("Variable names can only contain letters, numbers, dollarSign and underScore. Forexampel $my_1stVariable");
document.write("<br>Variable names must begin with a letter, $, or _. Forexampel $name, _name or name");
document.write("<br>Variable names are Case Sensitive");
document.write("<br>Variable name should not be JS keyword");




//********************-------------------*****************Chapter 5********************-------------------*****************//
//CHAPTER NO.5 :
//task no. 1 :


var firstNum = 3 ;
var secondNum = 5 ;
var add = firstNum + secondNum;
document.write ("sum of addition " + firstNum + " and " + secondNum + " is " + add + "<br>")

// task no .2 :
// subtraction

var sub = firstNum - secondNum;
document.write ("sum of subtraction " + firstNum + " and " + secondNum + " is " + sub + "<br>")

// multiplication
var multiple = firstNum * secondNum;
document.write ("sum of multiplication " + firstNum + " and " + secondNum + " is " + multiple + "<br>" )

// division

var division = firstNum / secondNum;
document.write ("sum of division " + firstNum + " and " + secondNum + " is " + division + "<br>")

// module

var mod = firstNum % secondNum;
document.write ("sum of module " + firstNum + " and " + secondNum + " is " + mod + "<br>")


//task no. 3 :
// a
var num ;
//b
document.write("Value after variable declaration is undefined <br>") ;
//c 
var num = 5;
//d
document.write ("Initial Value: " + num + "<br>")
//e
num++ ;
//f
document.write("Value after increment is: " + num + "<br>");
//g 
num += 7;
//h
document.write("Value after addition is: " + num + "<br>");
//i
num--;
//j
document.write("Value after decrement is: " + num + "<br>");
// k
num %= 3;
// l
document.write("The remainder is: " + num + "<br>");

//task no.4 :
var ticket = 600 ;
var total = ticket * 5 ;
document.write ("Total cost to buy 5 tickets to a movie is " + total+"PKR" + "<br>")


//task no.5 :

var table = 6;
count = 0 ;
document.write("Table of " + table + "<br>");
document.write(table + " x " + ++count + " = " + table*count + "<br>" );
document.write(table + " x " + ++count + " = " + table*count + "<br>" );
document.write(table + " x " + ++count + " = " + table*count + "<br>" );
document.write(table + " x " + ++count + " = " + table*count + "<br>" );
document.write(table + " x " + ++count + " = " + table*count + "<br>" );
document.write(table + " x " + ++count + " = " + table*count + "<br>" );
document.write(table + " x " + ++count + " = " + table*count + "<br>" );
document.write(table + " x " + ++count + " = " + table*count + "<br>" );
document.write(table + " x " + ++count + " = " + table*count + "<br>" );
document.write(table + " x " + ++count + " = " + table*count + "<br>" );

//task no.6 :
//a
var  celsius = 25 ;
//b
var  fahrenheit = (celsius * 9/5) + 32;
//c
document.write(celsius+ "°C is "+ fahrenheit+"°F" + "<br>")
//d
var fahrenheit = 70 ;
var celsius = (fahrenheit - 32) * 5/9 ;
document.write (fahrenheit +"°F is " + celsius+"°C ")



//task no.7
var Price_item_1 = 650;
var quantity_item_1 = 3;
var Price_item_2 = 100 ;
var quantity_item_2 = 7;
var shippingCharges = 100;

var totalCost= (Price_item_1 * quantity_item_1) + (Price_item_2 * quantity_item_2) + shippingCharges;

document.write("<h1>Shopping Cart</h1>")

document.write("Price of item 1 is"+ Price_item_1  + "<br>")
document.write("quantity of item 1 is " + quantity_item_1 + "<br>")
document.write("Price of item 2 is " + Price_item_2 + "<br>")
document.write("quantity of item 2 is " + quantity_item_2 + "<br>")
document.write("Shipping charges is " + shippingCharges + "<br>")
document.write ("<br>")
document.write ("Total cost of your order is " + totalCost )



//task no.8 :

var totalMarks = 980 ;
var studentMarks = 804 ;
var per =  (studentMarks * 100 ) / totalMarks;

document.write("<h1> Marks Sheet</h1>")
document.write ("Total marks: " + totalMarks + "<br>" )
document.write ("Marks obtained: " + studentMarks + "<br>" )
document.write ("percentage: "+ per + "<br>" )

//task no.9 :

var doller = 104.80;
var riyal = 28 ;
var pkr = (10 * doller) + (25 * riyal);
document.write("<h3> Currency Conversion in PKR </h3>");
document.write("Total Currency in PKR: " + pkr);

//task no.10 :
var num = 10;
num +=  5,
num *= 10,
num /= 2;

alert(num)

//task no.11 :
var year = 2016;
var birthYear = 1992;
var age = year - birthYear;

document.write("<h1> Age Calculator </h1>"); 
document.write("Current Year: " + year + "<br/>");
document.write("Birth Year: " + birthYear + "<br/>");
document.write("They are " + age  + " years old");

//task no.12 :

document.write("<h1> The Geometrizer </h1>");

var radius = 20;
//(Circumference of a circle = 2 π r , π = 3.142)
var  circumference = 2 * 3.142 * radius;  
var area = 3.142 * radius * radius;

document.write("Radius of a Circle: " + radius + "<br/>");
document.write("The circumference is: " + circumference + "<br/>");
document.write("The area is: " + area);


//task no .13 :

var snack = "lays" ;
var currentAge = 15 ;
var estAge = 65 ;
var perDay= 5
// year means 365days and 65 - 15 is 50 so 365 * 50 is 18250. total days 18250 * per day 3 = 54750 
var total = 54750;

document.write("Favorite snacks is: "+snack+"<br>")
document.write("Current age is: "+currentAge+"<br>")
document.write("Estimated maximum age is: "+estAge+"<br>")
document.write("Ammount of snacks per day: "+perDay+"<br>")
document.write("You will need "+total+" "+snack+" to last you until the ripe old age of "+currentAge+"<br>")


//********************-------------------*****************Chapter 6-9********************-------------------*****************//
//CHAPTER NO.6-9 :
//task no .1 :



var a = +prompt("Input a number: ");

document.write("<h3>" + "Pre and Post Increment/ Decrement Operation" + "</h3>");
document.write("Result" + "<br>");
document.write("The value of a is: " + a + "<br>");
document.write("<br>");

document.write("The value of ++a is: " + ++a + "<br>");
document.write("Now the value of a is: " + a + "<br>");
document.write("<br>");

document.write("The value of a++ is: " + a++ + "<br>");
document.write("Now the value of a is: " + a + "<br>" )
document.write("<br>");

document.write("The value of --a is: " + --a + "<br>");
document.write("Now the value of a is: " + a + "<br>");
document.write("<br>");


document.write("The value of a-- is: " + a-- + "<br>");
document.write("Now the value of a is: " + a + "<br>" );



//task no .2 :
var a = 2, b = 1;
document.write("<b>" + "Explain Solution" + "</b>" + "<br>" );
document.write("a = 2, b = 1" + "<br>");
document.write("--a  -  --b  +  ++b  +  b--"  + "<br>");
document.write("--2  -  --1  +  ++1  +  1--" + "<br>");
document.write("1  -  0  +  1  +  1" + "<br>");
document.write(" 1 + 1 + 1 " + "<br>");
document.write("3" + "<br>");

document.write("The value of a is " + a + "<br>");
document.write("The value of b is " + b + "<br>");
var result = --a - --b + ++b + b--;
document.write("The result is " + result + "<br>" + "<br>");


//task no .3 :

var name = prompt("Enter your name: ");
alert("Hello " + name );


//task no .4 :

var count = 0;
num = +prompt("Enter Number for Table Multiplication: ");
document.write(num + " x " + ++count + " = " + (num * count) + "<br>");
document.write(num + " x " + ++count + " = " + (num * count) + "<br>");
document.write(num + " x " + ++count + " = " + (num * count) + "<br>");
document.write(num + " x " + ++count + " = " + (num * count) + "<br>");
document.write(num + " x " + ++count + " = " + (num * count) + "<br>");
document.write(num + " x " + ++count + " = " + (num * count) + "<br>");
document.write(num + " x " + ++count + " = " + (num * count) + "<br>");
document.write(num + " x " + ++count + " = " + (num * count) + "<br>");
document.write(num + " x " + ++count + " = " + (num * count) + "<br>");
document.write(num + " x " + ++count + " = " + (num * count) + "<br>");


//task no .5 :

document.write("<h3>" + "Marksheet" + "</h3>");

subjectName1 = prompt("Enter Name of Subject 1: ");
subjectName2 = prompt("Enter Name of Subject 2: ");
subjectName3 = prompt("Enter Name of Subject 3: ");

var totalMarks = 300;

subjectMarks1 = +prompt("Enter Marks of " + subjectName1);

subjectMarks2 = +prompt("Enter Marks of " + subjectName2);
subjectMarks3 = +prompt("Enter Marks of " + subjectName3);

var obtainedMarks = (subjectMarks1 + subjectMarks2 + subjectMarks3);
var percentage = (obtainedMarks / totalMarks) * 100;
percentage = percentage.toFixed(2);
var percentage1 = (subjectMarks1 / 100) * 100;
var percentage2 = (subjectMarks2 / 100) * 100;
var percentage3 = (subjectMarks3 / 100) * 100;

document.write("<Table>");

document.write("<tr>");
    document.write("<th>" + "Subject"  + "</th>");
    document.write("<th>" + "Total Marks"  + "</th>");
    document.write("<th>" + "Obtained Marks"  + "</th>");
    document.write("<th>" + "Percentage"  + "</th>");
document.write("</tr>");

document.write("<tr>");
    document.write("<td>" + subjectName1  + "</td>");
    document.write("<td>" + 100  + "</td>");
    document.write("<td>" + subjectMarks1  + "</td>");
    document.write("<td>" + percentage1 + "%" + "</td>");
document.write("</tr>");

document.write("<tr>");
    document.write("<td>" + subjectName2  + "</td>");
    document.write("<td>" + 100  + "</td>");
    document.write("<td>" + subjectMarks2  + "</td>");
    document.write("<td>" + percentage2 + "%" + "</td>");
document.write("</tr>");

document.write("<tr>");
    document.write("<td>" + subjectName3  + "</td>");
    document.write("<td>" + 100  + "</td>");
    document.write("<td>" + subjectMarks3  + "</td>");
    document.write("<td>" + percentage3 + "%" + "</td>");
document.write("</tr>");

document.write("<tr>");
    document.write("<th>" + "</th>");
    document.write("<th>" + 300  + "</th>");
    document.write("<th>" + obtainedMarks  + "</th>");
    document.write("<th>" + percentage + "%" + "</th>");
document.write("</tr>");

document.write("</Table>");





//********************-------------------*****************Chapter 9-11********************-------------------*****************//
//CHAPTER NO.9-11 :
//task no .1 :


var city = prompt("Enter a city: ")
if(city === "karachi"){
    alert("Welcome to city of lights")
}

else {
  alert("This not the city of lights")
}

//task no .2 :
var gender = prompt("Enter Your Gender");
if (gender === "male"){
    alert("Good Morning Sir");
}
if (gender === "female"){
    alert("Good Morning Ma'am");
}

//task no .3 :
var color = prompt("Enter the color of traffic road signal: \n Red, Yellow or Green");
if (color === "red"){
    alert("Must Stop");
} 
if (color === "yellow"){
    alert("Ready to Move");
} 
if (color === "green"){
    alert("Move Now");
} 

//task no .4 :
 var fuel = +prompt("Enter remaining fuel in litre: ");
 if(fuel >= 0.25){
     alert("Please refill the fuel in your car")
 }
 else{
    alert("Let's drive enough fuel")
 }


//  task no.5 :
var a = 4; 
if (++a === 5){ 
    alert("given condition for variable a is true");
    }


var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
    }

if (c === 13){ 
    alert("condition 2 is true"); 
    }

if (++c < 14){ 
    alert("condition 3 is true"); 
    } 

if(c === 14){ 
    alert("condition 4 is true"); 
    }


var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
    alert("The cost equals"); 
    }


if (true){ 
    alert("True"); 
    } 

if (false){ 
    alert("False"); 
    }


if("car" < "cat"){ 
    alert("car is smaller than cat"); 
}
//Upper code is correct



// task No.6 :


var obtainedMarks = +prompt("Enter your  Marks in three subjects: ");
var totalMarks = +prompt("Enter total Marks: ");
var percentage = (obtainedMarks / totalMarks) * 100;

document.write("<h2>" + "Mark Sheet" + "</h2>");
document.write("Total Marks: " + totalMarks + "</br>");
document.write("Marks Obtained: " + obtainedMarks + "</br>");
document.write("Percentage: " + percentage + "</br>");

if (percentage >= 80 && percentage < 100){
    document.write("Grade: A-one" + "<br>");
    document.write("Remarks: Excellent" + "<br>");
}

else if (percentage >= 70 && percentage < 80){
    document.write("Grade: A" + "<br>");
    document.write("Remarks: Good" + "<br>");
}

else if (percentage >= 60 && percentage < 70){
    document.write("Grade: B" + "<br>");
    document.write("Remarks: You need to improve" + "<br>");
}

else if (percentage < 60){
    document.write("Grade: Fail" + "<br>");
    document.write("Remarks: Sorry" + "<br>");
}

else{
    document.write("Invalid Input" + "<br>");
}

// task No.7:
var snum = 4;
var guess = +prompt("Guess any number from 1 - 10")

if(guess === snum){
    alert("Bingo! Correct answer")
}
else if(guess === snum+1 || guess === snum-1){
    alert("Close enough to the correct answer")
}
else{
    alert("Try Again")
}

// task No.8 :
var num = +prompt("Enter any number: ");
if(num % 3 === 0){
    alert("number is divisible by 3")
}
else{
    alert("number do not divisible by 3")
}


// task No.9 :
var num = +prompt("Enter number to check number is even or odd");
if (num % 3 === 0){
    alert(num + " is odd number");
}
else{
    alert(num + " is even number");
}




// task No.10 :
var temperature = +prompt("Enter your city temperature: ");
if (temperature > 40){
    alert("It is too hot outside");
}
else if (temperature > 30){
    alert("The weather today is Normal");
}
else if(temperature > 20){
    alert("Today's Weather is cool");
}
else{
    alert("OMG! Today's weather is so Cool");
}



// task No.11 :
var firstNumber = +prompt("Enter First Number: ");
var secondNumber = +prompt("Enter Second Number: ");
var operator = prompt("Choose your operator: \n( + , - , * , / , % )");
document.write("<h3>" + "Calculator" + "</h3>");
document.write("First Number: " + firstNumber + "</br>");
document.write("Second Number: " + secondNumber + "</br>");
if (operator === "+"){
    document.write("Result: " + firstNumber + " + " + secondNumber + " = " + (firstNumber + secondNumber));
}

else if (operator === "-"){
    document.write("Result: " + firstNumber + " - " + secondNumber + " = " + (firstNumber - secondNumber));
}

else if (operator === "*"){
    document.write("Result: " + firstNumber + " x " + secondNumber + " = " + (firstNumber * secondNumber));
}

else if (operator === "/"){
    document.write("Result: " + firstNumber + " / " + secondNumber + " = " + (firstNumber / secondNumber));
}

else if (operator === "%"){
    document.write("Result: " + firstNumber + " % " + secondNumber + " remainder is: " + (firstNumber % secondNumber));
}

else{
    document.write("Wrong Input");
}





//********************-------------------*****************Chapter 12-13********************-------------------*****************//
//CHAPTER NO.12-13 :
//task no .1 :
var character = prompt("Please enter your character to checks whether the given input is a number, uppercase letter or lower case letter");
var value = character.charCodeAt(0);

//Checking for Number
if (value >= 48 && value <= 57){
    alert(character + " is number");
}

//Checking for UpperCase Letters
else if (value >= 65 && value <= 90 ){
    alert(character + " is Uppercase Letter");
}

//Checking for LowerCase Letters
else if (value >= 97 && value <= 122 ){
    alert(character + " is Lowercase Letter");
}

else{
    alert("Given input is not a number or letter");
}


//task no .2 :

var firstNumber = +prompt("Enter First Number: ");
var secondNumber = +prompt("Enter Second Number: ");

if(firstNumber > secondNumber){
    alert(firstNumber + " is larger than " + secondNumber);
}

else if(firstNumber < secondNumber){
    alert(secondNumber + " is larger than " + firstNumber);
}

else{
    alert(firstNumber + " and " + secondNumber + " both are eqaul");
}




//task no .3 :
var num = +prompt("Enter a number to check its state: ");

if (num > 0){
    alert(num + " is Positive");
}

else if (num < 0){
    alert(num + " is Negative");
}
else if (num == 0){
    alert(num + " is zero");
}

else{
    alert("The number is " + num);
}




//task no .4  :

var character = prompt("Enter character to check vowel or not");

if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u"){
    alert(character + " is vowel");
}

else if (character === "A" || character === "E" || character === "I" || character === "O" || character === "U"){
    alert(character + " is vowel");
}

else{
    alert(character + " is not vowel");
}



//task no .5 :
var password = "0345";
var check = prompt("Enter your password: ");
if (check === password){
    alert("Correct! password");
}
else{
    alert("Incorrect Password");
}




//task no .6 :
var greeting;
var hour = 13;
if (hour < 18){
    greeting = "Good day";
    alert(greeting);
}
else{
    greeting = "Good evening";
    alert(greeting);
}

//working



//task no .7 :
var time = +prompt("Enter any hour ");
if(time >= 0000 && time < 1200){
    alert("Good Morning!")
 }
else if(time >= 1200 && time < 1700){
    alert("Good Afternoon!")
 }
else if(time >= 1700 && time < 2100){
    alert("Good Evening!")
 }
else if(time >= 2100 && time < 2359){
    alert("Good Night!")
 }


