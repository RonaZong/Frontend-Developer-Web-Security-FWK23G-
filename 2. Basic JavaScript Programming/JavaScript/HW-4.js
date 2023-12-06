// Exercise 1 
// 1. Create a list of people (company)
// Where person is an object
// { name, age, length, weight }

// 2. Create a function (validPerson) that tells if the person object is valid
// validPerson(person) => true, false
// age < 0 or > 120
// length < 0 or > 300
// weight < 0 or > 500
// name must be a string (hint: typeof)

// 3. Create a function (validCompany) that says
// * if the entire list consists of valid persons (hint: use validPerson)
// * check that the list has a length > 10
// * and that all employees are > 18 years old

// Write psudo code before writing the functions
// 1.5 hrs

const company = [
    {name: "Rona", age: 24, length: 163, weight: 55}, 
    {name: "Wyn", age: 24, length: 173, weight: 62}
];

function validPerson(person) {
    if (person.age < 0 || person.age > 120) {
        return false;
    }
    else if (person.length < 0 || person.length > 300) {
        return false;
    }
    else if (person.weight < 0 || person.weight > 500) {
        return false;
    }
    else if (typeof person.name != "string") {
        return false;
    }
    else {return true;}
};

function validCompany(company) {
    for (let i = 0; i < company.length; i++) {
        if (validPerson(company[i]) == false) {
            return false;
        }
        else if (company.length >= 10) {
            return false;
        }
        else if (company[i].age < 18) {
            return false;
        }
        else {return true;}
    }
}

console.log(validPerson(company[0]));
console.log(validCompany(company));


// Exercise 2
// 1. create person
function createPerson(name, age, phone) {
    return {name: name, age: age, phone: phone};
  }
  
const person1 = createPerson("Patrik", 40, "087347373");
const person2 = createPerson("Sandra", 60, "070898763");
console.log(person1);
 
// 2. Add spouse
function addSpouse(person, spouse, year) {
    // add a property spouse to person
    person.spouse = spouse;
    person.married = year;
}

addSpouse(person1, person2, 2007);
console.log(person1);
  
// 3. Calculate
function isMarried(p1, p2) {
    // check that p1 has a property spouse equal to p2
    if (p1.spouse.name == p2.name && p1.spouse.age == p2.age) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isMarried(person1, person2)); // true
console.log(isMarried(person1, { name: "Berit", age: 77 })); // false
  
// 3. increaseAge
function increaseAgeOfSpose(person) {
    // if person has spouse increase spouse age
    // else do nothing
    if ("spouse" in person == true) {
        person.spouse.age++;
    }
}
  
increaseAgeOfSpose(person1);
console.log(person2);