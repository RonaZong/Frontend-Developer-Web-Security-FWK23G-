// Own Modules

// exports.dateTime = function() {
//     return Date();
// };

// module.exports = "Hello Word";
// module.exports.message = "Hello World"

// Function
// module.exports = (msg) => console.log(msg);

// Object
// module.exports = {name: "Rona", age: 24};

// Class
// module.exports = class Person {};

// Exercise
const info = function (info) {
    console.log("Info: " + info);
}
const warn = function (info) {
    console.warn("Warning: " + info);
}
const error = function (info) {
    console.error("Error: " + info);
}

const SECRET = "QWERT123";
const printName = function (name, nr) {
    for (let i = 0; i < nr; i++) {
        console.log(name);
    }
}
const isPasswordCorrect = function (pwd) {
    if(pwd == SECRET) {return true;}
    else {return false;}
}
const printNameIfPasswordIsCorrect = function (name, pwd) {
    if (isPasswordCorrect(pwd)) {
        printName(name, 10);
    }
}

const person = {name: "Rona", age: 24};
const sum = function (x, y) {return x + y;}
const names = ["Rona", "Wyn", "Yun", "Alexandra", "Bill", "Emelie", "Omani", "Kaoru", "Melinda", "Yoka"];

module.exports = {dateTime() {return Date()}, info, warn, error, 
    printName, isPasswordCorrect, printNameIfPasswordIsCorrect, 
    person, sum, names};


// ES6 Modules
// function info (info) {
//     console.log("Info: " + info);
// }
// function warn (info) {
//     console.warn("Warning: " + info);
// }
// function error (info) {
//     console.error("Error: " + info);
// }
// export {info, warn, error};



