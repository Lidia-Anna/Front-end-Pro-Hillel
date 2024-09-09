const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
console.log('---------Task 1-------------');
const result = arr.reduce((acc, item) => {
  if (item < 0) return acc;

  acc.sum += item;
  acc.qty++;

  return acc;
}, { sum: 0, qty: 0 });
console.log(result);

console.log('---------Task 2-------------');
let minItem = arr[0];
let minIndex = 0;
arr.forEach((item, index) => {
  if (item < minItem) {
    minItem = item;
    minIndex = index;
  }
});
console.log(minItem);
console.log(minIndex);

console.log('---------Task 3-------------');
let maxItem = arr[0];
let maxIndex = 0;
arr.forEach((item, index) => {
  if (item > maxItem) {
    maxItem = item;
    maxIndex = index;
  }
});
console.log(maxItem);
console.log(maxIndex);

console.log('---------Task 4-------------');
const counterNegElem = arr.reduce((countNeg, item) => {
  if (item < 0) countNeg++;
  return countNeg;
}, countNeg = 0);
console.log(counterNegElem);

console.log('---------Task 5-------------');
const counterNotParPoz = arr.reduce((countNotPar, item) => {
  if (item >= 0 && (item % 2 !== 0)) countNotPar++;
  return countNotPar;
}, countNotPar = 0);
console.log(counterNotParPoz);

console.log('---------Task 6-------------');
const counterParPoz = arr.reduce((countPar, item) => {
  if (item >= 0 && (item % 2 === 0) && item !== 0) countPar++;
  return countPar;
}, countPar = 0);
console.log(counterParPoz);

console.log('---------Task 7-------------');
const sumParPoz = arr.reduce((sumPar, item) => {
  if (item > 0 && (item % 2 === 0)) sumPar += item;
  return sumPar;
}, sumPar = 0);
console.log(sumParPoz);

console.log('---------Task 8-------------');
const sumNotParPoz = arr.reduce((sumNotPar, item) => {
  if (item >= 0 && (item % 2 !== 0)) sumNotPar += item;
  return sumNotPar;
}, sumNotPar = 0);
console.log(sumNotParPoz);

console.log('---------Task 9-------------');
const dobParPoz = arr.reduce((dobPar, item) => {
  if (item > 0) dobPar *= item;
  return dobPar;
}, dobPar = 1);
console.log(dobParPoz);

console.log('---------Task 10-------------');
arr.forEach((item, index) => {
  if (index !== maxIndex) {
    arr[index] = 0;
  }
});
console.log(arr);
