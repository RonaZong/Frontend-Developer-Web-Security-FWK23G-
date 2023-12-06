/* Escape Characters:
\' = ' Single quote
\" = " Double quote
\\ = \ Backslash
\b Backspace
\f Form Feed
\n New Line
\r Carriage Return
\t Horizontal Tabulator
\v Vertical Tabulator */

/* Strings are for storing and manipulating text,
is zero or more characters written inside quotes */
// Strings as Objects, https://www.w3schools.com/jsref/jsref_obj_string.asp
let t = new String("Rona");

/* String Methods: String length, String slice(), String substring(), String substr(), 
String replace(), String replaceAll(), String toUpperCase(), String toLowerCase(), 
String concat(), String trim(), String trimStart(), String trimEnd(), String padStart(), String padEnd(),
String charAt(), String charCodeAt(), String split() */

let text1 = "Apple, Banana, Kiwi";

//  String Length
let length = text1.length;

// Extract String Parts: slice(start, end), subsreing(start, end), substr(start,length)
// Start from index 0
let part1 = text1.slice(7, 13); // Banana
let part2 = text1.substring(7, 13);
let part3 = text1.substr(7, 6); // Second parameter specifies the length of the extracted part

// If omit second parameter, will lice out the rest of string
let part4 = text1.slice(7); // Banana, Kiwi
let part5 = text1.substring(7);
let part6 = text1.substr(7);

// If parameter is negative, the position is ocunted form the end of string
let part7 = text1.slice(-12); // Banana, Kiwi
let part8 = text1.substring(-12); //If parameter is negative, is treated as 0.
let part9 = text1.substr(-12);

// Replace String Content
/* does not change the string it is called on,
    returns a new string,
    replaces onlt the first march. */
let newText1 = text1.replace("Kiwi", "Grape");
// Replace case insensitive, use a regular expression with an /i flag (insensitive).
let newText3 = text1.replace(/KIWI/i, "Grape");
// Replace all matches, use a regular expression with the /g flag (global match).
let newText2 = text1.replace(/Kiwi/g, "Grape");
// Replace all
let newText4 = text1.replaceAll("Kiwi", "Grape");

// Convert to Upper and Lower Case
let text2 = "Hello World!";
let case1 = text2.toUpperCase();
let case2 = case1.toLowerCase();

// String concat joins two or more strings
let cat1 = "Hello";
let cat2 = "World";
let cat3 = cat1.concat(" ", cat2); // Hello World

// String trim removes whitespace from both sides of a string
let text3 = "     Hello World!     ";
let tri1 = text3.trim();
// trimStart removes whitespace only from the start of a string
let tri2 = text3.trimStart();
// trimEnd removes whitespace only from the end of a string
let tri3 = text3.trimEnd();

// String Padding
let text4 = "b";
// padStart pads a string from the start, with another string (multiple times) until it reaches a given length
let pad1 = text4.padStart(4, "a"); // aaab
// padEnd pads a string from the end, with anoterh string (multiple times) until it reaches a given length
let pad2 = text4.padEnd(4, "a"); // baaa
// it is a string method, to pad a number, convert the number to a string first
let text5 = 5;
let num1 = text5.toString();
let num2 = num1.padStart(4, "0"); // 0005
let num3 = num1.padEnd(4, "0"); // 5000

// Extract String Characters
let text6 = "Hello World";
// return the character at a specified index (position) in a string
let cha1 = text6.charAt(0); // H
// return the unicode of the character at a specified index in a string
// return a UTF-16 code (an integer between 0 ~ 65535)
let cha2 = text6.charCodeAt(0); // 72
// Property Access
/* might be unpredictable, 
makes strings look like arrays, but they are not
if no character is found, [] returns undefined, while charAt() returns an empty string,
it is read only, str[0] = "A" gives no error, but does not work */
let cha3 = text6[0]; // H

// Convert a String to an Array
// split convert a string to an array
let text7 = "a,b,c,d,e,f,g";
const array1 = text7.split(",");
let text8 = "a b c d e f g";
const array2 = text8.split(" ");
let text9 = "a|b|c|d|e|f|g";
const array3 = text9.split("|");
// if the separator is omitted, the returned array will contain the whole string in index [0]
// if the separator is "", the returned array will be an array of single characters


/* String Search Methods: String indexOf(), String lastIndexOf(), String search(), String match(), String matchAll(), String includes(), String startsWith(), String endsWith() */

let text10 = "Please locate where 'locate' occurs!";
// indexOf returns the index (position) the first occurrence of a string in a string
let index1 = text10.indexOf("locate"); // 7
// lastIndexOf returns the index of the last occurrence of a specified text in a string
let index2 = text10.lastIndexOf("John");
// both return -1 if the text is not found
let index3 = text10.lastIndexOf("John");
// both accept a second parameter as the starting position for the search
let index4 = text10.indexOf("locate", 15); // 21
// search searches a string for a string (or a regular expression) and returns the position of the match
let index5 = text10.search("locate"); // 7
let index6 = text10.search(/locate/); // 7

let text11 = "The rain is SPAIN stays mainly in the plain";
// match returns an array containg the results of matching a string against a string (or a regular expression)
const arr1 = text11.match("ain");
const arr2 = text11.match(/ain/);
let index7 = arr1.length;
console.log(index7);
// matchAll returns an iterator containing the results of matching a string against a string (or a regular expression)
const iterator = text11.matchAll("rain");
// document.getElementById("demo").innerHTML = Array.from(iterator);
// console.log(Array.from(iterator));

// includes returns true if a string contains a specified value, otherwise it returns false
let in1 = text11.includes("rain");
let in2 = text11.includes("rain", 12) // check if a string start at certain position
console.log(in1);
console.log(in2);

// startsWith returns true if a string begins with a specified value, otherwise it returns false
let start1 = text11.startsWith("The");
let start2 = text11.startsWith("rain", 4) // true
// endsWith returns true if a string ends with a specified value, otherwise it returns false
let end1 = text11.endsWith("plain");
let end2 = text11.endsWith("rain", 8); // check if the 8 first characters of a stirng ends with 


/* Template Literals */
// Template Literals use back-ticks `` rather than the quotes "" to define a string, can use both single, allows multiline strings
let text12 = `Hello World!`;
let text13 = 
`The quick brown fox
jumps over the lazy dog`;
// Interpolation ${}
// Variable Substitutions
let text14 = `${text12}, ${text13}`;
// Expression Substitution
let price = 10;
let VAT = 0.25;
let text15 = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
// Template
let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];
let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
    html += `<li>${x}</li>`;
}
html += `</ul>`;
// document.getElementById("demo").innerHTML = html;