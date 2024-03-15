// 1. Make a constant variable with the value "hello"
// 1.1 Print variable
const hello = "hello";
console.log(hello);

// 2. Make a mutable variable with the value 7
// 2.1 Print variable
// 2.2 Change variable to 14 by taking previous value * 2
// 2.3 Print variable
let nr = 7;
console.log(nr);
nr = nr * 2;
console.log(nr);

// 3. Create an array "number" with values 1,2,3,4,5
// 3.1 Print length
// 3.2 Print the middle value including [ ]
// 3.3 Print the first value including [ ]
// 3.4 Print the last value including [ ]
// 3.5 Add 100 to the end
const number = [1, 2, 3, 4, 5];
console.log(number.length);
console.log(number[2]);
console.log(number[0]);
console.log(number[number.length - 1]);
number[number.length] = 100;
console.log(number);

// 4. Create a new array "words" with values "hello", "hej", "bonjour", "hola"
// 4.1 Concatenate "word" array and "number" array into a new variable "wordnumber" with concat
// Result: [ 'hello', 'hej', 'bonjour', 'hola', 1, 2, 3, 4, 5, 100 ]
// 4.2 Create a new array "nrOfLetters" with number of letters in each word in "word" with map
// Result: [5, 3, 7, 4]
// 4.3 Create a new array "double" with each number in "number" array doubled with map
// Result: [2, 4, 6, 8, 10, 200]
// 4.4 Create a new array "subtracted" with each number in the "number" array subtracted by 1
// with map
// Result: [0, 1, 2, 3, 4, 99]
// 4.5 Create a new array "objects" with each number in the "numbers" array nested in an object with map
// "nrOfLetters": [3, 5, 7, 4] => "objects": [{ nr: 5 }, { nr: 3 }, { nr: 7 }, { nr: 4 }]
// 4.6 Bonus: Change each element in "nrOfLetters" so that each number is placed in an object
// with forEach
// Origin: [3, 5, 7, 4] => Result: [{ no: 3 }, { no: 5 }, { no: 7 }, { no: 4 }]
const words = ["hello", "hej", "bonjour", "hola"];
const wordsNumber = words.concat(number);
console.log(wordsNumber);
const nrOfLetters = words.map((o) => o.length);
console.log(nrOfLetters);
const double = number.map((t) => t * 2);
console.log(double);
const subtracted = number.map((t) => t - 1);
console.log(subtracted);

// Discuss
const objects = nrOfLetters.map((t) => ({ nr: t }));
console.log(objects);
nrOfLetters.forEach((n, index) => {
nrOfLetters[index] = { nr: n };
});
console.log(nrOfLetters);