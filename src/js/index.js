const ourCounter = function () {
  let sumValue = 0;
  const count = function (value) {
    sumValue += value;
    return sumValue;
  };
  return count;
};
const sum = ourCounter();
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
