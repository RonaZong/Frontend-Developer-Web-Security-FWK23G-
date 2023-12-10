/* Callbacks */
// Function Sequence - Functions are executed in the sequence they are called. Not in the sequence they are defined.
// Sequence Control - Better control over when to execute a function.

// Callback Function
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}
// Callback Function as an argument
function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}
myCalculator(5, 5, myDisplayer);

const numbers = [4, 1, -20, -7, 5, 9, -6];
// Callback function as an argument
const posNumbers = removeNeg(numbers, (x) => x >= 0);
document.getElementById("demo").innerHTML = posNumbers;
function removeNeg(numbers, Callback) {
    const array = [];
    for (const x of numbers) {
        if (callback(x)) {
            array.push(x);
        }
    }
    return array;
}


/* Asynchronous */



