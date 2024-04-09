// 1. Gör en funktion som heter "findMax" som hittar det största värdet'
const max = findMax([100, 99, 44, 102, 88, 55]);
console.log(max); // 102

function findMax(numbers) {
  let max = -Infinity;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  /* alternativ loop
  numbers.forEach((num) => {
    if (num > max) {
      max = num;
    }
  })
  */
  return max;
}

// 2. Skriv en funktion "merge" som tar 2 objekt och slår ihop dem
// Tips: använd "spread" { ...obj }
const mergedObj = merge({ a: "hej", b: 12 }, { c: true });
console.log(mergedObj); // { a: "hej", b: 12, c: true }

function merge(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

// 3. Skriv en funktion "copyAndDouble" som tar en array
// Tips: använd "spread" [ ...arr ]
//       använd map (ex: numbers.map((n) => n + 1))
const newArr = copyAndDouble([1, 2, 3, 4]);
console.log(newArr); // [1, 2, 3, 4, 2, 4, 6, 8]

function copyAndDouble(arr) {
  return [...arr, ...arr.map((n) => n * 2)];
}