'use strict';

const appendHTMLElement = (parentEl = null, elementToAppend = null) => {
  if (!parentEl || !elementToAppend) return;
  parentEl.prepend(elementToAppend);
};

const createTagElement = (tagName) => {
  const element = document.createElement(tagName);
  if (tagName === 'input') {
    element.type = 'text';
  } else if (tagName === 'div') {
    element.classList.add('invisible');
    element.innerHTML = 'Text';
  }
  return element;
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
