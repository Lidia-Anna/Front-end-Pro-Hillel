const mainFunction = function (callback) {
  const value1 = parseInt(prompt('Enter the first number:'));
  const value2 = parseInt(prompt('Enter the second number:'));
  callback(value1, value2);
};
// -------------exponentiation------------
mainFunction((value1, value2) => {
  const result = value1 ** value2;
  alert(`The result of raising ${value1} to the power of ${value2}  =  ${result}`);
});
// -------------multiplay------------
mainFunction((value1, value2) => {
  const result = value1 * value2;
  alert(`The result ${value1} * ${value2}  =  ${result}`);
});
// -------------division------------
mainFunction((value1, value2) => {
  const result = value1 / value2;
  alert(`The result ${value1} / ${value2}  =  ${result}`);
});
// -------------modulo------------
mainFunction((value1, value2) => {
  const result = value1 % value2;
  alert(`The result ${value1} % ${value2}  =  ${result}`);
});
