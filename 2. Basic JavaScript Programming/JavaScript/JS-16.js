/* JS has only one type of number. Always store as double precision floating point numbers in 64 bits */
// Numbers can be written with or without decimals
let a = 3.14; // A number with decimals
let b = 3; // A number without decimals
// Extra large or small numbers can be written with scientific (exponent) notation
let c = 123e5; // 12300000
let d = 123e-5; // 0.00123

// Integer Precision
// Integers (numbers without a period or exponent notation) are accurate up to 15 digits
// The maximum number of decimals is 17

// Floating Precision
let e = 0.2 + 0.1;
let f = (0.2 * 10 + 0.1 * 10) / 10;

// Adding Numbers and Strings
// Numbers are added. Strings are concatenated

// Numeric Strings
// JS will try to convert strings to numbers in all numeric operatioins, except addition

// NaN - Not a Number
// NaN type is number
let g = 100 / "Apple";
isNaN(g);

// Infinity is the value JS will return if calculate a number outside the largest possible number
// Infinity type is number
let h = 2;
while (h != Infinity) {
    h *= h;
}

// Hexadecimal - JS interprets numeric constants as hexadecimal if they are proceded by 0x
let i = 0xFF;

// Number as Object
let j = 123;
let k = new Number(123);
console.log(j == k); // true
console.log(j === k); // false

/* BigInt variables are used to store big integer values that are too big to be represented by a normal Number */
// Integer Accuracy
// BigInt type is "bigint"
// BigInt can not have decimals
// BigInt can also be written in hexadecimal, octal, or binary notation

/* Number Methods: toString(), toExponential(), toFixed(), toPrecision(), ValueOf()
All number methods can be used on any type of numbers (literals, variables, or expressions) */
// toString() returns a number as a string
let l = 123;
l.toString();
(123).toString();
(100+23).toString();

// valueOf() returns a number as a number
l.valueOf(); // 123
(123).valueOf();
(100+23).valueOf();

// toExponential() returns a string, with a number rounded and written using exponential notation
// A parameter defines the number of characters behind the decimal point
let m = 9.656;
m.toExponential(2); // 9.66
m.toExponential(4); // 9.6560

// toFixed() returns a string, with the number written with a specified number of decimals
m.toFixed(0); // 10
m.toFixed(2); // 9.66

// toPrecision() returns a string, with a number written with a specified length
m.toPrecision(2); // 9.7

/* Converting Variables to Numbers:
Number() returns anumber converted from its argument
parseInt() parses its argument and returns a whole number
parseFloat() parses its argument and returns a floating point number */
// Number() can be used to convert JS variables to numbers
let n = Number(true); // 1
let o = Number(false); // 0
let p = new Date("2017-09-30");
Number(p); // 1506729600000

// parseInt() parses a string and returns a whole number
// spaces are allowed, only the first number is returned
let q = parseInt("-10.33"); // -10
let r = parseInt("10 6"); // 10

// parseFloat() parses a string and returns a number
// spaces are allowed, only the first number is returned
let s = parseFloat("10.33"); // 10.33
let t = "10 6"; // 10

/* Number object methods: Number.isInteger(), Number.isSafeInteger(), Number.parseFloat(), Number.parseInt() */
// isInteger returns true if the argument is an integer
let u = Number.isInteger(10); // true

// isSafeInteger returns true if the argument is a safe integer
// A safe integer is an integer that can be exactly represented as a double precision number
// Safe integers are all integers from -(2^53 - 1) to +(2^53 - 1)
let v = Number.isSafeInteger(10); // true

/* Number Properties: EPSILON, MAX_VALUE, MIN_VALUE; MAX_SAFE_INTEGER, MIN_SAFE_INTEGER, POSITIVE_INFINITY, NEGATIVE_INFINITY, NaN */
// Number.EPSILON is the difference between the smallest floating point number greater than 1 and 1
let w = Number.EPSILON; // 2.220446049250313e-16

// Number.MAX_VALUE is a constant representing the largest possible number in JS
let x = Number.MAX_VALUE; // 1.7976931348623157e+308
// Number.MIN_VALUE is a constant representing the lowest possible number in JS
let y = Number.MIN_VALUE; // 5e-324

// MAX_SAFE_INTEGER represents the maximum safe integer in JS
let z = Number.MAX_SAFE_INTEGER; // 9007199254740991
// MIN_SAFE_INTEGER represents the minimum safe integer in JS
let A = Number.MIN_SAFE_INTEGER; // -9007199254740991

// POSITIVE_INFINITY
let B = Number.POSITIVE_INFINITY; // Infinity
let C = 1 / 0; // Infinity
// NEGATIVE_INFINITY
let D = Number.NEGATIVE_INFINITY; // -Infinity

// NaN is not a legal number
let E = Number.NaN; // NaN

