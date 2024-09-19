const InsertWordInto = function (myString) {
  myString = myString.trim();
  const insert = function (myToInser) {
    if (myString.length === 0) return myToInser;
    if (myString.length !== 0 && !myString.includes(' ')) {
      const randomNumber01 = Math.round(Math.random());
      if (randomNumber01 === 1) return `${myString} ${myToInser}`;
      return `${myToInser} ${myString}`;
    }
    if (myString.includes(' ')) {
      const randomNumber012 = Math.floor(Math.random() * 3);
      if (randomNumber012 === 0) return `${myToInser} ${myString}`;
      if (randomNumber012 === 1) return myString.replace(' ', ` ${myToInser} `);
      if (randomNumber012 === 2) return `${myString} ${myToInser}`;
    }
  };
  return insert;
};
const result = InsertWordInto('Hello world');
console.log(result('Odesa'));
