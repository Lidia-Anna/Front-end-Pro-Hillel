'use strict';

//Task 1
const name= prompt("Як Вас звати?");
const age = prompt("Скільки Вам років?");
const likesProgramming = confirm('Вам подобається програмувати?');

//Task 2
console.log(name);
console.log(age);
console.log(likesProgramming);

console.log(typeof name);
console.log(typeof age);
console.log(typeof likesProgramming);

//Task 3
const greeting = `Привіт, ${name}!`;
alert(greeting);

//Task 4
const numericAge = Number(age);
const nextAge = numericAge + 1;
console.log(nextAge);

//Task 5
const isAdult = numericAge >= 18;
console.log(isAdult);
