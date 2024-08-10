'use strict';

let number1 = prompt("Введіть перше число");
if(number1 === null || !number1.trim() || isNaN(+number1)){
    number1 = prompt("Введено некоректне перше число, введіть корекне число");
}

let number2 = prompt("Введіть друге число");
if(number2 === null || !number2.trim() || isNaN(+number2)){
    number2 = prompt("Введено некоректне друге число, введіть друге корекне число");
}

let number3 = prompt("Введіть третє число");
if(number3 === null || !number3.trim() || isNaN(+number3)){
    number3 = prompt("Введено некоректне третє число, введіть третє корекне число");
}

alert(`Середнє арифметичне цих чисел = ${(Number(number1) + Number(number2) + Number(number3))/3}`);


