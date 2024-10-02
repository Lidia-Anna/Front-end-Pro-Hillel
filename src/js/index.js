'use strict';

const randomNumber = () => {
  const number = Math.floor(Math.random() * 10);
  if (number === 0) return 1;
  return number;
};
const generateImg = (imgName) => {
  const img = document.createElement('img');
  img.src = './img/' + `${imgName}` + '.png';
  return img;
};
document.body.append(generateImg(randomNumber()));
