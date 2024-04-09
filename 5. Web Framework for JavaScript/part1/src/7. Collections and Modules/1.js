const people = [
  { name: "Patrik", age: 41 },
  { name: "Benjamin", age: 27 },
  { name: "Carro", age: 27 },
  { name: "Irene", age: 30 },
  { name: "Jonas", age: 32 },
  { name: "Singh", age: 34 },
];

const ages = people.map(({ age, name }) => {
  return age;
});

const middleage = people.filter(({ age }) => {
  return age > 29 && age < 40;
});
console.log(middleage);