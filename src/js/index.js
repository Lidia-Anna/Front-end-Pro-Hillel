// Task1
console.log('Task 1');
let stsNumbers = '';
for (let i = 10; i <= 20; i++) {
  stsNumbers += `${i}, `;
}
console.log(stsNumbers);

// Task2
console.log('Task 2');
let square = '';
for (let i = 10; i <= 20; i++) {
  square = `${square + i * i}, `;
}
console.log(square);

// Task3
console.log('Task 3');
for (let i = 1; i <= 10; i++) {
  console.log(`7 * ${i} = ${7 * i}`);
}

// Task4
console.log('Task 4');
let sum = 0;
for (let i = 1; i <= 15; i++) {
  sum += i;
}
console.log(`Sum = ${sum}`);

// Task5
console.log('Task 5');
let quer = 1;
for (let i = 15; i <= 35; i++) {
  quer *= i;
}
console.log(`Sum = ${quer}`);

// Task6
console.log('Task 6');
let average = 0;
for (let i = 1; i <= 500; i++) {
  average += i;
}
console.log(`Average = ${average / 500}`);

// Task7
console.log('Task 7');
let division = 0;
for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) { division += i; }
}
console.log('Sum of Division vor 2 =', division);

// Task8
console.log('Task 8');
let division3 = '';
console.log('Numbers of Division vor 3');
for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    division3 += `${i}, `;
  }
}
console.log(division3);

// Task9
console.log('Task 9');
const inputNumber = 8;
for (let i = inputNumber; i >= 1; i--) {
  if (inputNumber % i === 0) { console.log(i); }
}

// Task10
console.log('Task 10');
const number = 8;
let amount = 0;
for (let i = number; i >= 1; i--) {
  if (number % i === 0 && number % 2 === 0) { amount += 1; }
}
console.log('Amount =', amount);

// Task11
console.log('Task 11');
let sumValue = 0;
for (let i = number; i >= 1; i--) {
  if (number % i === 0 && number % 2 === 0) {
    sumValue += i;
  }
}
console.log('Sum of Value =', sumValue);

// Task12
console.log('Task 12');
for (let j = 1; j <= 10; j++) {
  console.log(`-----------------${j}--------------`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${j} * ${i} = ${j * i}`);
  }
}
