// Task1
console.log('Task 1');
let stsNumbers = '';
for (let i = 20; i <= 30; i += 0.5) {
  stsNumbers += `${i} `;
}
console.log(stsNumbers);

// Task2
console.log('Task 2');
const exchange = 27;
for (let dollars = 10; dollars <= 100; dollars += 10) {
  const cost = dollars * exchange;
  console.log(`${dollars} dollars = ${cost} grn`);
}

// Task3
console.log('Task 3');
const number = 56;
for (let i = 1; i <= 100; i++) {
  if (i * i > number) break;
  console.log(i);
}

// Task 4
console.log('Task 4');
const ourNumber = 56;
let marker = true;
for (let i = 2; i < ourNumber; i++) {
  if (ourNumber % i === 0) { marker = false; }
}
console.log(marker === true ? `This number ${ourNumber} is a prime number` : `This number ${ourNumber} is not a prime number`);

// Task 5
console.log('Task 5');
let powerNumber = 56;
if (powerNumber <= 1) console.log('Number <= 1'); else {
  while (powerNumber % 3 === 0) {
    powerNumber /= 3;
  }
  console.log(powerNumber === 1 ? 'Our number is power of tree' : 'Our number is not power of tree');
}
