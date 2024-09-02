// Task 1
console.log('----------Task1---------------');
const sum = function (arr) {
  let counter = 0;
  let arrSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      counter += 1;
      arrSum += arr[i];
    }
  }
  return arrSum / counter;
};

const array = [1, 't', 2, 3, 4, 5];
sum(array);
console.log(sum(array));

// Task 2
console.log('----------Task2---------------');
const doMath = function (x, znak, y, callback) {
  let result;

  switch (znak) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    case '/':
      result = x / y;
      break;
    case '%':
      result = x % y;
      break;
    case '^':
      result = x ** y;
      break;
    default:
      result = 'Unknown operator';
  }
  callback(result);
};
const getUserInput = function () {
  const x = parseFloat(prompt('Enter the first number:'));
  const znak = prompt('Enter a mathematical operator (+, -, *, /, %, ^):');
  const y = parseFloat(prompt('Enter the second number:'));

  doMath(x, znak, y, (result) => {
    console.log(`Result: ${result}`);
  });
};
getUserInput();

// Task 3
const fillArr = function () {
  const arr = [];
  console.log('----------Task3---------------');
  const lengthArr1 = parseInt(prompt('Enter the length of the main array'), 10);
  const lengthArr2 = parseInt(prompt('Enter the length of the second array'), 10);
  for (let i = 0; i < lengthArr1; i++) {
    arr[i] = [];
    for (let j = 0; j < lengthArr2; j++) {
      arr[i][j] = prompt(`Enter the ${j + 1} element of the inner array for row ${i + 1}`);
    }
  }
  console.log(arr);
};
fillArr();

// Task 4
console.log('----------Task4---------------');
function removeCharacters(str, charsToRemove) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (!charsToRemove.includes(str[i])) {
      result += str[i];
    }
  }
  return result;
}
const inputString = prompt('Enter the string:');
const inputChars = prompt('Enter the characters to delete separated by commas:').split(',');
const cleanedString = removeCharacters(inputString, inputChars);
console.log(cleanedString);
