'use strict';

// Option 1
const focusOnInput = document.getElementsByTagName('input');
focusOnInput[0].addEventListener('focus', () => {
  const div = document.getElementsByClassName('invisible');
  div[0].classList.toggle('visible');
});
focusOnInput[0].addEventListener('blur', () => {
  const div = document.getElementsByClassName('invisible');
  div[0].classList.toggle('visible');
});

// Option 2
// const focusOnInput = document.getElementsByTagName('input');
// const div = document.getElementsByClassName('invisible');

// focusOnInput[0].addEventListener('focus', () => {
// div[0].style.display = 'inline';
// });
// focusOnInput[0].addEventListener('blur', () => {
// div[0].style.display = 'none';
// });
