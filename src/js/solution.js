'use strict';

const ulElement = document.querySelector('ul');

const showAllTags = (tag) => {
  console.log('========Task 1===========');
  const listLi = document.getElementsByTagName(tag);
  Array.from(listLi).forEach((item) => {
    console.log(item);
  });
};

const arraysNameAndValueAndName = () => {
  const ulElemente = document.getElementById('ulId');
  const attributesArray = Array.from(ulElemente.attributes);
  const arrAttributeULValue = [];
  const arrAttributeULName = [];
  for (const attr of attributesArray) {
    arrAttributeULValue.push(attr.value);
    arrAttributeULName.push(attr.name);
  }
  console.log('========Task 2===========');
  console.log(arrAttributeULValue);
  console.log('========Task 3===========');
  console.log(arrAttributeULName);
};

const changeTextInLastLi = () => {
  //= =======Task 4===========
  const lastLi = ulElement.querySelector('li:last-child');
  lastLi.textContent = 'Привіт, мене звуть Лідія';
};

const addAttributeToFirstLI = () => {
  //= ========Task 5===========
  const firstLi = ulElement.querySelector('li:first-child');
  firstLi.setAttribute('data-my-name', 'Лідія');
};
const removeAttribute = (tag, attribut) => {
  //= ========Task 6===========
  const tagElement = document.querySelector(tag);
  tagElement.removeAttribute(attribut);
};

showAllTags('li');
arraysNameAndValueAndName();
changeTextInLastLi();
addAttributeToFirstLI();
removeAttribute('ul', 'data-dog-tail');
