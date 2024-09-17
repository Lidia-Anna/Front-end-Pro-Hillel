console.log('---------Task 1-------------');
const getFactorial = function (num) {
  if (num === 0 || num === 1) return 1;
  return num * getFactorial(num - 1);
};
console.log(getFactorial(3));

console.log('---------Task 2-------------');
const pow = function (number, degree) {
  if (degree === 0) { return 1; }
  return number * pow(number, degree - 1);
};
console.log(pow(5, 2));

console.log('---------Task 3-------------');
const increment = function (value1, value2) {
  if (value2 === 0) return value1;
  return 1 + increment(value1, value2 - 1);
};
console.log(increment(5, 3));
