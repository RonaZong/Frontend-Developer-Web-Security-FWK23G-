// Define a Function
function calculate(x, operation, y) {
    x = parseInt(prompt("Enter the first number"));
    operation = prompt("Specify the operator");
    y = parseInt(prompt("Enter the second number"));
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
}
calculate("1", "+", "3");
calculate("2", "*", "4");

// Bindings and Scope
// function thiefControl1(isThief) {
//     if (isThief) {let message = "You're a thief.";}
//     else {let message = "You're fine.";}
//     return message;
// }
// console.log(thiefControl1(true));

function thiefControl2(isThief) {
    let message;
    if (isThief) {message = "You're a thief.";}
    else {message = "You're fine.";}
    return message;
}
console.log(thiefControl2(true));

// Nested Scope
const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};

// Functions as Values
let launchMissiles = function() {
    missileSystem.launch("now");
};
let safeMode = true;
if (safeMode) {
    launchMissiles = function() {};
}

let isMyLuckyDay = true;
function mysteryFunction() {
    if(isMyLuckyDay){
        isMyLuckyDay = false;
    }
    else {
        isMyLuckyDay = true;
    }
    console.log(isMyLuckyDay);
}
mysteryFunction();
mysteryFunction();

// Form of Function Definition
let hours;
// Function Declaration
function hoursBeforeNewYear1(weeks, days) {return weeks * 7 * 24 + days * 24;}
hours = hoursBeforeNewYear1(3,3);
console.log(hours);
// Function Expression
const hoursBeforeNewYear2 = function (weeks, days) {return weeks * 7 * 24 + days * 24;};
hours = hoursBeforeNewYear2(3,3);
console.log(hours);
// Arrow Function
const hoursBeforeNewYear3 = (weeks, days) => {return weeks * 7 * 24 + days * 24;};
hours = hoursBeforeNewYear3(3,3);
console.log(hours);
const hoursBeforeNewYear4 = (weeks, days) => weeks * 7 * 24 + days * 24;
hours = hoursBeforeNewYear4(3,3);
console.log(hours);

// CallvStack
function chicken() {
    return egg();
}
function egg() {
    return chicken();
}
// console.log(chicken() + " came first.")

// Optional Arguments
function square(x) {return x*x;}
console.log(square(4, true, "hedgehog"));

function Date(day, month, year) {
    return `Today is ${day} / ${month} / ${year}.`;
}
console.log(Date(16, 10, 2023));
console.log(new Date().toString());

// Closure
function multiplier(factor) {
    return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5)); // 10

// Recursion
function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}
console.log(power(2, 3)); // 8

// Growing Function

// Exercise
function BMI(mass, height) {
    return mass / height ** 2;
}
markBMI1 = BMI(78, 1.69);
johnBMI1 = BMI(92, 1.95);
markBMI2 = BMI(95, 1.88);
johnBMI2 = BMI(85, 1.76);
function compare(markBMI, johnBMI) {
    let markHigherBMI;
    if (markBMI > johnBMI) {
        markHigherBMI = true;
    }
    else {markHigherBMI = false;}
    return markHigherBMI;
}
console.log(compare (markBMI1, johnBMI1));
console.log(compare (markBMI2, johnBMI2));
const markHigherBMI2 = markBMI1 > johnBMI1;
console.log(markHigherBMI2);
const markHigherBMI3 = markBMI2 > johnBMI2;
console.log(markHigherBMI3);

function averageScore() {
    let averageScore = 0;
    for (let i = 0; i < 3; i++) {
        let score = Math.round(Math.random() + 100);
        averageScore += score;
    }
    return averageScore / 3;
}
function compare(dolphins, koalas) {
    if (dolphins > koalas) {
        console.log("Winner is Dolphins!");
    }
    else if (dolphins < koalas) {
        console.log("Winner is Kaolas!");
    }
    else {        
        console.log("No winners!");
    }
}
// console.log(score());

let data1, data2, data3;
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
data1 = describeCountry("China", "1425", "Beijing");
data2 = describeCountry("Sweden", "10", "Stockholm")
data3 = describeCountry("United States", "339", "Washington, D.C.")
console.log(data1);
console.log(data2);
console.log(data3);

function percentageOfWorld1(population) {
    return (population / 7900 * 100).toFixed(2);
}
data1 = percentageOfWorld1(1441);
data2 = percentageOfWorld1(10);
console.log(data1);
console.log(data2);
const percentageOfWorld2 = function(population) {
    return (population / 7900 * 100).toFixed(2);
}
const percentageOfWorld3 = (population) => (population / 7900 * 100).toFixed(2);

function describePopulation(country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)} of the world.`;
}
data1 = describePopulation("China", "1441");
data2 = describePopulation("Sweden", "10")
console.log(data1);
console.log(data2);

// Homework
function min(x, y) {
    if (x < y) {return x;}
    else if (x > y) {return y;}
    else {return `No minimum, they are the same.`}
}
console.log(min(0, 10)); // → 0
console.log(min(0, -10)); // → -10

function isEven(x) {
    if (x % 2 == 0) {return true;}
    else if (x % 2 == 1) {return false;}
    else {return isEven(x) == isEven(x-2);}
}
console.log(isEven(50)); // → true
console.log(isEven(75)); // → false
// console.log(isEven(-1)); // → ??

function countBs(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == "B") {
            count ++;
        }
    }
    return count;
}
function countChar(string, character) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == character) {
            count ++;
        }
    }
    return count;
}
console.log(countBs("BBC")); // → 2
console.log(countChar("kakkerlak", "k")); // → 4

function cook(ingredient) {
    console.log(`Open the package with ${ingredient} and steak it for 5 minutes`);
}
function cookRecepie(ingredient1, ingredient2, ingredient3) {
    cook(ingredient1);
    cook(ingredient2);
    cook(ingredient3);
}
cookRecepie("Milk", "Egg", "Salmon");