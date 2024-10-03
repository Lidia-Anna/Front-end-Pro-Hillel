'use strict';

const appendHTMLElement = (parentEl = null, elementToAppend = null) => {
  if (!parentEl || !elementToAppend) return;
  parentEl.append(elementToAppend);
};

const generateTable = (rows, cols) => {
  const arrayNumber = [];
  const counterNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    if (!arrayNumber.includes(randomNumber)) {
      arrayNumber.push(randomNumber);
      return randomNumber;
    }
    return counterNumber();
  };
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  table.append(tbody);
  for (let i = 1; i <= rows; i++) {
    const tr = document.createElement('tr');

    for (let j = 1; j <= cols; j++) {
      const td = document.createElement('td');
      td.innerHTML = `${counterNumber()}`;
      tr.append(td);
    }

    tbody.append(tr);
  }
  return table;
};
appendHTMLElement(document.body, generateTable(10, 10));
