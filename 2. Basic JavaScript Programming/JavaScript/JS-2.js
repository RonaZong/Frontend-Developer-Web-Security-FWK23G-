/* Syntax */
/* 
Hyphens not allowed in JS: first-name
Underscore: first_name
Upper Camel Case (Pascal Case): FirstName
Lower Camel Case use the most: firstName
Unicode Character Set 
Dollar Sign $, often use as alias for the main function in JS library
*/

/* Operators:
Arithmetic Operators: + Addition, - Subtraction, * Multiplicaton, ** Exponentiation, / Division, % Modulus, ++ Increment, -- Decrement.

Assignment Operators: = Assignment, += Addition Assignment, -= Subtraction Assignment, *= Multiplication Assignment, /= Division Assignment, 
%= Modulus Assignment, **= Exponentiation Assignment, <<=, >>=, >>>=, &=, ^=, !=, &&=, ||=, ??=.

Comparison & String Operators: == equal to, === equal value and equal type, != not equal, !== not equal value or not equal type, 
> greater than, >= greater or equal to, > less than, <= less or equal to, ? ternary.

Logical Operators: && logical and, || logical or, ! logical not.

Bitwise Operators: & AND, | OR, ~ NOT, ^ XOR, << left shift, >> right shift, >>> unsigned right shift.

Type Operators:
typeof: returns the type of a variable
instanceof: return true if an object is an instance of an object type
*/

/* Keywords: */
/* var declares a variable, only be used in code written for older browsers */
/* let declares a block variable, cannot be redeclared, must be declared before use */
/* const declares a block constant, cannot be redeclared, must be assigned a value when declare, cannot be reassigned, 
use if the value / type (Array, Object, Function, RegExp) should not be changed*/
// const array
const cars = ["Saab", "Volvo", "BMW"];
// change element
cars[0] = "Toyota";
// add element
cars.push("Audi");

// const object
const car = {type:"Fiat", model:"500", color:"white"};
// change property
car.color = "red";
// add property
car.owner = "Rona"

/* if marks a block of statements to be excuted on a condition */
let hour = 3;
if (6 < hour && hour < 18) {console.log("It is light")}
else {console.log("It is dark")}

if (hour > 18 || hour < 6) {console.log("It is dark")}
else {console.log("It is light")}

const x = parseInt(prompt("x"));
const y = parseInt(prompt("y"));
const operation = prompt("+-*/"); // string
if (operation == "+") {console.log(x + y);}
else if (operation == "-") {console.log(x - y);}
else if (operation == "*") {console.log(x * y);}
else if (operation == "/") {console.log(x / y);}
else {console.log("No such operation: " + operation)}

/* switch marks a block of statements to be excuted in a different cases */
switch(operation) {
    case "+":
        console.log(x + y);
        break;
    case "-":
        console.log(x - y);
        break;
    case "*":
        console.log(x * y);
        break;
    case "/":
        console.log(x / y);
        break;
    default:
        console.log("No such operation: " + operation)
}

/* for marks a block of statements to be excuted in a loop */
let text = "a";
for (let i = 0; i < 5; i++) {
    // text += "The number is " + i + "<br>";
}
// document.getElementById("p1").innerHTML = text;

/* function declares a function */
// Function Expression
const name1 = function(parameter1, parameter2, parameter3) {};
// Function Declaration, it is hoisted, and processed in the beginning
function name2(parameter1, parameter2, parameter3) {
    // code to be executed
    let local = ""; //local variables can only be accessed from within the function
}
// Arrow Function
const name3 = (parameter1, parameter2, parameter3) => output;

function F1() {
    document.getElementById("h1").innerHTML = "function"
}

/* return exits a function */
function randomNrBetween0And10() {
    return Math.floor(Math.random() * 10);
}

/* try implements error handling to a block of statements */



// Exercise
// Syntax
const a = 2;
let b = 3 * a + 4;
console.log("b = " + b);
b *= 2;
console.log("b = " + b);
const c = "Hello world";
console.log(c);
let allowedToEnter = true;
console.log(allowedToEnter);
allowedToEnter = false;
console.log(allowedToEnter);
// put a number in quotez, will be treated as strings, and concatenated
let d = b + c;
console.log(d);
d = c + allowedToEnter;
console.log(d);

let firstName = "Rona";
let other = "Xingrong";
console.log(firstName === other);
other = "Rona";
console.log(firstName === other);

let e = 5, f = 2;
console.log(e > f);
console.log(f < e);
f = 5;
console.log(e !== f);

// if - else
let age = 15;
if (age < 15) {console.log("saft");}
else if (age < 18) {console.log("kan smaka");}
else if (age < 21) {console.log("ol");}
else {console.log("Tequila, arriba!!!");}

// for
for (let i = 0; i < 10; i++) {console.log(firstName);}

let sum = 0;
for (let i = 0; i < 2; i++) {
    sum += parseInt(prompt());
}
console.log(sum);

// 1 - 10 times table
let accumulator = 0;
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i + " * " + j, i * j);
        // document.getElementById("container").innerHTML += `${i} * ${j} = ${i * j}, `;
        accumulator += i * j;
    }
    console.log("\n"); // new row
    // document.getElementById("container").innerHTML += "<br>"; // new row
}
console.log(accumulator);

// 1 - 5 times table
for (let i = 1; i <= 5; i++) {
    let accumulator = "";
    for (let j = 1; j <= 10; j++) {
        accumulator += `${i} * ${j} = ${i * j}`;
    }
    console.log(accumulator)
}

// function
const square = function (x) {return x * x;};
console.log(square(12));

function hello1(name) {return `Hi ${name}, how are you?`;}
console.log(hello1("Rona"));
function hello2(name) {console.log(`Hi ${name}, how are you?`);}
hello2("Rona");

function sayMyName(name, nr) {
    for (let i = 0; i < nr; i++) {
        console.log(name);
    }
}
sayMyName("Rona", 10);

function add(x, y) {
    console.log(x + y);
}
add(3,3);

function printName(firstName, lastName) {
    console.log(firstName + " " + lastName);
}
printName("Rona", "Zong");

function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
let myName = fullName("Rona", "Zong");
console.log(myName);