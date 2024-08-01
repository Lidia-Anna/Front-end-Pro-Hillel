'use strict';

let operand1 = prompt("Введіть перший операнд:");
let operand2 = prompt("Введіть другий операнд:");

operand1 = parseInt(operand1,10);
operand2 = parseInt(operand2, 10);

console.log(`Результат: ${operand1} + ${operand2} = ${operand1 + operand2}`);
console.log(`Результат: ${operand1} - ${operand2} = ${operand1 - operand2}`);
console.log(`Результат: ${operand1} * ${operand2} = ${operand1 * operand2}`);
console.log(`Результат: ${operand1} / ${operand2} = ${operand1 / operand2}`);