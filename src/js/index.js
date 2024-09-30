const rendomNumber = () => {
  const num = Math.floor(Math.random() * 10);
  if (num === 0) return 1;
  return num;
};
const generateImg = (imgName) => {
  const img = document.createElement('img');
  img.src = './img/' + `${imgName}` + '.png';
  return img;
};
document.body.append(generateImg(rendomNumber()));
