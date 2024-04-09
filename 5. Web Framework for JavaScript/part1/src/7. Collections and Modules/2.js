const people = [
    { name: "Patrik", age: 41 },
    { name: "Benjamin", age: 27 },
    { name: "Carro", age: 27 },
    { name: "Irene", age: 30 },
    { name: "Jonas", age: 32 },
    { name: "Singh", age: 34 },
  ];
  
  const sum = people
    .map((person) => person.age) // [41, 27, 24, 50, 30...]
    .filter((age) => age > 25 && age < 40) // [27, 30...]
    .reduce((prev, nr) => prev + nr, 0); // 191
  console.log(sum);
  
  /// 1. Övningar
  
  const input1 = [1, 2, 3, 4, 5];
  function double(nr) {
    return nr * nr;
  }
  const result = input1.map(double);
  console.log(result);
  
  /// 2. Övningar
  
  const input2 = [1, -4, 12, 0, -3, 29, -150];
  const total = input2.filter((nr) => nr > 0).reduce((prev, nr) => prev + nr);
  console.log(total);