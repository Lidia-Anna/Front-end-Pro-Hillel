const myArray = function () {
  const lengthArr = parseInt(prompt('Enter length Array'));
  const myArr = [];
  for (let i = 0; i < lengthArr; i++) {
    myArr.push(prompt(`Enter ${i + 1} element of Array`));
  }
  console.log(myArr);
  console.log('-----------Sort----------');
  for (let i = 0; i < lengthArr; i++) {
    let minIndex = i;
    for (let j = i + 1; j < lengthArr; j++) {
      if (myArr[j] < myArr[minIndex]) {
        minIndex = j;
      }
    }
    [myArr[i], myArr[minIndex]] = [myArr[minIndex], myArr[i]];
  }
  console.log(myArr);
  console.log('-----------Delete for 2 to 4----------');
  myArr.splice(1, 3);
  console.log(myArr);
};
myArray();
