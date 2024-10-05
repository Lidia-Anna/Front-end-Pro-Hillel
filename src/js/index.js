'use strict';

const appendHTMLElement = (parentEl = null, elementToAppend = null) => {
  if (!parentEl || !elementToAppend) return;
  parentEl.prepend(elementToAppend);
};

const createTagElement = (tagName) => {
  if (tagName === 'input') {
    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    return inputElement;
  }
  if (tagName === 'div') {
    const divElement = document.createElement('div');
    divElement.classList.add('invisible');
    divElement.innerHTML = 'Text';
    return divElement;
  }
};

const inputElement = createTagElement('input');
const divElement = createTagElement('div');
appendHTMLElement(document.body, divElement);
appendHTMLElement(document.body, inputElement);

inputElement.addEventListener('focus', () => {
  divElement.classList.toggle('visible');
});
inputElement.addEventListener('blur', () => {
  divElement.classList.toggle('visible');
});
