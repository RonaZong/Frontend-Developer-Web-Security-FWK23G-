// 1. Make an object that contains your name, age, and address
// 1.1 Change your name
// 1.2 Print the object
// 1.3 Change your address
// 1.4 Print the object
const person = {
name: "Patrik",
age: 41,
address: "Jordhyttegatan 16A",
};
person.name = "Alexia";
console.log(person);
person.address = "Jordhyttegatan 16D";
console.log(person);

// 2. Make an array with multiple person objects as above (at least 3 people).
const persons = [
    {
        name: "Patrik",
        age: 41,
        address: "Jordhyttegatan 16A",
    },
    {
        name: "Kristoffer",
        age: 38,
        address: "Jordhyttegatan 16A",
    },
    {
        name: "Alexia",
        age: 23,
        address: "Jordhyttegatan 16A",
    },
];

// 3. Make a function that takes an array of people and returns one array with everyone's ages (hint: use map)
// 3.1 Call the function and print the resulting array
const ageFinder = (persons) => persons.map((p) => p.age);
console.log(ageFinder(persons));

// 4. Make a function that takes name, age and address as input and returns a person object like those above
// 4.1 Call the function and print resulting object
const createPerson = (name, age, address) => {
    return {
        name,
        age,
        address,
    };
};
console.log(createPerson("Thomas", 68, "Klintmossevägen 18"));

// 5. Make a function that takes an array of person objects and sums them all people's age in array (hint: use forEach)
// 5.1 Call the function and print the resulting sum
const sumOfAges = (persons) => {
    let sum = 0;
    persons.forEach((person) => {
        sum += person.age;
    });
    return sum;
};
console.log(sumOfAges(persons));

// 6. Make a function that takes an array of people and returns one array with everyone's address (tip: use map)
// 6.1 Call the function and print the resulting array
const allAddresses = (persons) => {
    const addresses = persons.map((person) => person.address);
    return addresses;
};
console.log(allAddresses(persons));

// 7. Make a function that takes array of objects (any) and a property eg "name" and prints that property for each object (hint: obj["name"])
// 7.1 Call the function and test with different properties
const propertyPrinter = (objects, property) => {
    objects.forEach((obj) => {
        console.log(obj[property]);
    });
};
propertyPrinter(persons, "age");

// 8. Make a function that takes an array of people and returns the people who are older than 40 (i.e. those who own) (tip: use filter)
// 8.1 Call the function and test that you get the right people back
// 8.2 Rewrite the function so that it also takes the age as an argument and test
const filteredAges = (persons, age) => {
    const older = persons.filter((p) => {
        return p.age > age;
    });
    return older;
};
console.log(filteredAges(persons, 30));