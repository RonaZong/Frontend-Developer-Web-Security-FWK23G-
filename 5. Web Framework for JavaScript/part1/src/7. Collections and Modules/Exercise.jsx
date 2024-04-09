import { useState } from "react";

// 1.
function sum(x, y) {
  return x + y;
}
console.log(sum(4, 5));

// 2.
function size(array) {
  return array.length;
}
console.log(size([100, 200, 300])); // 3

// 3.
function getProperty(obj, prop) {
  return obj[prop];
}
const res = getProperty({ a: "test" }, "a");
console.log(res); // test

// 4.
function last(list) {
  return list[list.length - 1];
}
const elem = last([100, 200, 300, 400, 500]);
console.log(elem); // 500

const Excercise = () => {
  const [value, setValue] = useState(10);

  const increase = () => setValue(value + 1);
  const reset = () => setValue(0);

  return (
    <div>
      {value}
      <br />
      <button onClick={reset}>reset</button>
      <button onClick={increase}>increase</button>
    </div>
  );
};

export default Excercise;