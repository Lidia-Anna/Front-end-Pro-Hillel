'use strict';

//Task 1
let name= prompt("Як Вас звати?");
let age = prompt("Скільки Вам років?");
let likesProgramming = confirm('Вам подобається програмувати?');

//Task 2
console.log(name);
console.log(age);
console.log(likesProgramming);

console.log(typeof name);
console.log(typeof age);
console.log(typeof likesProgramming);

//Task 3
let greeting = `Привіт, ${name}!`;
alert(greeting);

//Task 4
let numericAge = Number(age);
let nextAge = numericAge + 1;
console.log(nextAge);

//Task 5
let isAdult = numericAge >= 18;
console.log(isAdult);
