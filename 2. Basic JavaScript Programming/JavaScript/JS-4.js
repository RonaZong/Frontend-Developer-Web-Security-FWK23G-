/* Data Types:
String - Sequence of characters
Number - Floating point numbers
Boolean - Logical type that can only be true or false
Object - 
Undefined - Value taken by a variable that is not yet defined ("empty value")
Null - Also means ("empty balue")
Bigint - Larger integers than the Number type can hold
Symbol - Value that is unique and cannot be changed */

/* Object Datatype: Object, Array, Date */
// Objects use name indexes, Arrays use numbered indexes

/* Object */
// object = {(properties) key: value}
// Method is a function stored as a property
const object = {
    property1: "value1",
    property2: "value2",
    property3: function() {
        return this.property1 + " " + this.property2; // this refers to the object
    }
};
let data1 = object.property1; // objectName.propertyName
let data2 = object["property2"]; // objectName["propertyName"]
let data3 = object.property3(); // objectName.propertyName()
// {property3()} = object;

const user = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
};
user.firstName;
user["lastName"];
user.fullName();

// When JS variable is declared with the keyword "new", the variable is created as a object
// Avoid String, Number, and Boolean objects.

// This refores to the global object
// In an object method, this refers to the object
// In a function, this refers to the global object
// In a function, in strict mode, this is undefined
// In an event, this refers to the element that received the event
// Methods like call(), apply(), and bind() can refer this to any object

/* Array */
// An array is a special variable, which can hold more than one value
const array_name = ["item1", "item2", "item3"]; // array literal
const array = new Array("item1", "item2", "item3");

// Recognize an array
let type = typeof array_name; // object
Array.isArray(array_name); // true
array_name instanceof Array; // true

// Access an array element by referring to the index number
// Array indexes start with 0, [0] is the first element, [1] is the second element
let item1 = array_name[0]; // item1

// Change an array element
array_name[0] = "item0"; // item0, item2, item3

// Add an array element with length property
array_name[3] = "item 4"; // item0, item2, item3, item4
// Adding elements with high indexes can create undefined holes
// array_name[8] = "item9"; // item0, item2, item3, item4, , , , , item9

// An array can have variables of different types: object, function, array
array_name[4] = Date.now; // item0, item2, item3, item4, date


/* Array properties and methods, built-in: Array length, Array toString(), Array join(), 
Array pop(), Array push(), Array shift(), Array unshift(), Array delete(), 
Array concat(), Array flat(), Array splice(), Array slice(), 
Array sort(), Array reverse(), 
Array forEach(), Array map(), Array flatMap(), Array reduce(), Array reduceRight(), 
Array filter(), Array every(), Array some(), Array find(), Array findIndex(), 
Array indexOf(), Array lastIndexOf(), Array includes(), 
Array from(), Array keys(), Array entries(), Array ...  */

const arr1 = ["Banana", "Orange", "Apple", "Mango"];
// length property returns the length (size) of an array
arr1.length; // 4
let lastItem = arr1[arr1.length - 1]; // Mango

// toString() method converts an array to a string of (comma separated) array values
arr1.toString(); // Banana,Orange,Apple,Mango

// join() method joins all array elements into a string
arr1.join(" * "); // Banana * Orange * Apple * Mango

// pop() method removes the last element from an array, and returns the value that was "popped out"
let pop = arr1.pop(); // Mango = Banana, Orange, Apple

// push() method adds a new element to an array (at the end), and returns the new array length
let length = arr1.push("Kiwi"); // 5 = Banana, Orange, Apple, Mango, Kiwi

// shift() method removes the first array element and "shifts" all other elements to a lower index, and returns the value that was "shifted out"
let shift = arr1.shift(); // Banana = Orange, Apple, Mango, Kiwi

// unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements, and returns the length of the new array
let unshift = arr1.unshift("Lemon"); // 5 = Lemon, Orange, Apple, Mango, Kiwi

// delete() leaves undefined holes in the array
delete arr1[0]; // undefined, Orange, Apple, Mango, Kiwi

// concat() method creates a new array by merging (concatenating) existing arrays
const arr2 = ["Cecilie", "Lone"];
const arr3 = ["Emil", "Tobias", "Linus"];
const arr4 = arr2.concat(arr3);
const arr5 = arr4.concat("Peter");

// flat() method creates a new array with sub-array elements concatenated to a specified depth, reduce the dimensionality
const arr6 = [[1,2], [3,4], [5,6]];
const arr7 = arr6.flat(); // 1,2,3,4,5,6

// splice() method adds new items to an array, and returns an array with the deleted items
const arr8 = ["Banana", "Orange", "Apple", "Mango"];
// first parameter defines the position where new elements should be added (spliced in)
// second parameter defines how many elements should be removed
arr8.splice(2, 0, "Lemon", "Kiwi"); // Banana,Orange,Lemon,Kiwi,Apple,Mango
let removed = arr8.splice(2, 2, "Lemon", "Kiwi"); // Apple,Mango
arr8.splice(0, 1); // Orange,Apple,Mango

// slice() method slices out a piece of an array into a new array
const arr9 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// creates a new array, does not remove any elements from the source array
const arr10 = arr9.slice(1); // Orange,Lemon,Apple,Mango
// selects elements fomr the start argument, and up to (but not including) the end argument
const arr11 = arr9.slice(1, 3); // Orange,Lemon

// sort() method sorts the array
arr9.sort(); // Apple,Banana,Lemon,Mango,Orange

// reverse() method reverses the elements in an array
arr9.reverse(); // Orange,Mango,Lemon,Banana,Apple 

// Numeric sort with compare function
const arr12 = [40, 100, 1, 5, 25, 10];
// Ascending - if the result is negative, a is sorted before b
arr12.sort(function(a, b) {return a - b;}); // 1, 5, 10, 25, 40, 100
// Descending - if the result is positive, b is sorted before a
arr12.sort(function(a, b) {return b - a;}); // 100, 40, 25, 10, 5, 1
// Sort in random order
arr12.sort(function() {return 0.5 - Math.random();}); // not accurate
// Fisher Yates Method
for (let i = arr12.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let k = arr12[i];
    arr12[i] = arr12[j];
    arr12[j] = k;
}

// Math.max.apply() finds the highest number in an array
Math.max.apply(null, arr12);
Math.max(40, 100, 1, 5, 25, 10);

// Math.min.apply() finds the lowest number in an array
Math.min.apply(null, arr12);
Math.min(40, 100, 1, 5, 25, 10);

// Fastest solution is "home made" method
function arrayMax(arr) {
    let len = arr.length;
    let max = -Infinity;
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
}

function arrayMin(arr) {
    let len = arr.length;
    let min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
}

// Sort Object Arrays
const arr13 = [
    {type: "Volvo", year: 2016},
    {type: "Saab", year: 2001},
    {type: "BMW", year:2010}
]
// Compare function to compare the property values
arr13.sort((a, b) => {return a.year - b.year;}); // Saab, BMW, Volvo
// Compare string properties
arr13.sort((a, b) => {
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {return -1;}
    else if (x > y) {return 1;}
    else {return 0;}
}); // Volvo, Saab, BMW

// Array iteration methods operate on every array item
// forEach() method calls a function (a callback function) once for each array element
const arr14 = [45, 4, 9, 16, 25];
let txt1 = "";
// Item value, item index, array itself
arr14.forEach((value, index, array) => {txt1 += value + "<br>"});

// map() method creates a new array by performing a function on each array element, does not execute the funtion for array elements without values, does not change the origial array
const arr15 = arr14.map((value) => {return value * 2;}); // 90, 8, 18, 32, 50

// flatMap() method first maps all elements of an array and then creates a new array by flattening the array
const arr16 = [1, 2, 3, 4, 5, 6];
const arr17 = arr16.flatMap((x) => x * 2); // 2, 4, 6, 8, 10, 12

// reduce() methods runs a function on each array element to produce (reduce it to) a single value, works from left-to-right in the array, does not reduce the original array
let sum1 = arr14.reduce((total, value) => {return total + value;}); // 99
// can accept an initial balue
let sum2 = arr14.reduce((total, value) => {return total + value;}, 100); // 199

// reduceRight() method runs a function on each array element to produce (reduce it to) a single value, works from right-to-left in  the array, does not reduce the original array
let sum3 = arr14.reduceRight((total, value) => {return total + value;}); // 99

// filter() method creates a new array with array elements that pass a test
const over18 = arr14.filter((value) => {return value > 18;}); // 45, 25

// every() method checks if all array values pass a test
let allOver18 = arr14.every((value) => {return value > 18;}); // false

// some() method checks if some array values pass a test
let someOver18 = arr14.some((value) => {return value > 18;}); // true

// find() method returns the value of the first array element that passes a test function
const arr18 = [4, 9, 16, 25, 29];
let first = arr18.find((value) => {return value > 18;}); // 25

// findIndex() method returns the index of the first array element that passes a test function
let firstIndex = arr18.findIndex((value) => {return value > 18;}); // index 3

// indexOf() method searches an array for an element value and returns its position
// array.indexOf(item, start), item is required, start is optional
// returns -1 if item is not found
const arr19 = ["Apple", "Orange", "Apple", "Mango"];
let position1 = arr19.indexOf("Apple") + 1; // position 1

// lastIndexOf() method searches an array for an element value and returns its position of last occurrence
let position2 = arr19.lastIndexOf("Apple") + 1; // position 3

// includes() method checks if an element is present in an array, allows ti check for NaN values
arr19.includes("Mango"); // true

// from() method returns an Array object from any object with a length property or any iterable object
const arr20 = Array.from("ABCDEFG"); // A, B, C, D, E, F, G

// keys() method returns an Array Iterator object with the keys of an array
const arr21 = ["Banana", "Orange", "Apple", "Mango"]
const keys = arr21.keys();
let txt2 = "";
for (let x of keys) {
    txt2 += x + "<br>"
} // vertical - 0; 1; 2; 3 

// entries() method returns an Array Iterator object with key/value pairs
const entries = arr21.entries();
let txt3 = "";
for (let x of entries) {
    txt3 += x + "<br>";
} // [0, "Banana"]; [1, "Orange"]; [2, "Apple"]; [3, "Mango"]

// ... operator expands an iterable (like an array) into more elements
const arr22 = ["Jan", "Feb", "Mar"];
const arr23 = ["Apr", "May", "Jun"];
const arr24 = ["Jul", "Aug", "Sep"];
const arr25 = ["Oct", "Nov", "Dec"];
const arr26 = [...arr22, ...arr23, ...arr24, ...arr25]; // Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec

// Loop array elements
let array_length = array_name.length;
let text = "<ul>";
// for loop
for (let i = 0; i < array_length; i++) {
    text += "<li>" + array_name[i] + "<li>";
}
text += "</ul>";
// Array.forEach()
let element = "<ul>";
array_name.forEach(myFunction);
element += "</ul>";
function myFunction(value) {
    element += "<li>" + value + "</li>";
}


// Exercise
// Array
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]); // 5

let list = [10, 12, 9, 8, 7];
console.log(list.length);
let wins = [true, false, true, true, false, true];
console.log(wins.length);
let heros = ["hulk", "superman", "spiderman", "ironman"];
console.log(heros.length);

let family = ["Rona", "Yun", "Suzhen"];
console.log(family.length);
for (let i = 0; i < family.length; i++) {
    console.log(family[i]);
}
for (let i = family.length - 1; i >= 0; i--) {
    console.log(family[i]);
}
console.log(family[family.length - 1]);
family[0] = "Xingrong";
console.log(family[0]);


// Object
const rona = {name: "Xingrong Zong", age1: 24, gender: "female", alive: true};
console.log(rona);
console.log(rona.name);
console.log(rona["name"]);

// Destructuring
const {name, age1} = rona;
console.log(name, age1);

const mallorcaFlight = {departure: "Mallorca", destination: "Gothenburg", departureDate: "2023-10-28", destinationDate: "2023-10-29"};
console.log(mallorcaFlight);
const gothenburgFlight = {departure: "Gothenburg", destination: "Mallorca", departureDate: "2023-11-28", destinationDate: "2023-11-29"};
console.log(gothenburgFlight);
const vacationInfo1 = {
    person: rona, 
    departureFlight: mallorcaFlight, 
    homeFlight: gothenburgFlight, 
    hotel: "asd", 
    days: 30};
console.log(vacationInfo1);
const vacationInfo2 = {
    rona,
    mallorcaFlight,
    gothenburgFlight,
};
console.log(vacationInfo2);

const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
console.log(board);
board[1][1] = "X";
console.log(board);

const person = {name: "Xingrong", age: 24, gender: "female"};
console.log(person);
const adress = {adress: "asdasdasd 11", city: "Gothenburg", postalcode: "1234"};
console.log(adress);
const personInfo = {person: "Xingrong", location: "Gothenburg", student: true};
console.log(personInfo);

const player = {sign: "X", points: 30};
player.hasWon = false; // create a property
console.log(player);
delete player.hasWon; // delete a property
console.log(player);

const batman = {name: "Bruce Wayne", workDays: ["Mon", "Tue", "Wed"]};
console.log(batman.name);
console.log(batman.isHero); // undefined
batman.isHero = true;
console.log(batman.isHero); // true
delete batman.name; // delete property
console.log(batman.name); // undefined
console.log("name" in batman); // false
console.log("workDays" in batman); // true
console.log(Object.keys(batman)); // check all keys
Object.assign(batman, {workDays:["Sat", "Sun"], capitalist: true}); // change object
console.log(batman);

const wonderWoman = {hero: true, name:"...", age2: 34, workDays: ["Mon", 
"Wed"]};
console.log(wonderWoman.hero); // true
console.log(wonderWoman["name"]); // ...
console.log({age2} = wonderWoman); // 34
wonderWoman.superPower = true;
console.log(wonderWoman);
delete wonderWoman.age2;
console.log(wonderWoman);
console.log("age2" in wonderWoman); // undefined
console.log(Object.keys(wonderWoman)); // properties
Object.assign(wonderWoman, {name: "Diana Prince", origin: "Themyscira"});

function deepEqual(o1, o2) {
    if (o1 == o2) {
        // for(let i = 0; i < o1.length; i++) {
        //     console.log(Object.keys(o1));
        //     if (o1[i] == o2[i]) {
        //         continue;
        //     }
        //     else {
        //         return false;
        //     }
        // }
        return true;
    }
    else {
        return false;
    }
}
const object1 = {a:1, b:2};
const object2 = object1;
const object3 = {a:3, b:2};
console.log(deepEqual(object1, object2)); // true

console.log(deepEqual({a:1, b:2}, {a:1, b:2})); // true
console.log(deepEqual({a:1, b:2}, {a:3, b:2})); // false
console.log(deepEqual({a:1, b:2}, {a:1, b:2, c:3})); // false
const x = {a:1, b:2};
const y = {a:1, b:2};
console.log(deepEqual(x, y)); // false
const arr = Object.keys(x);
console.log(x[0] == y[arr[0]]); // true


function percentage(population) {
    return (population / 7900 * 100).toFixed(2);
}
const populations = [1223, 73737, 7373, 99];
console.log(populations.length == 4); // 4
const percentages = [
    percentage(populations[0]),
    percentage(populations[1]),
    percentage(populations[2]),
    percentage(populations[3]),
];
console.log(percentages);