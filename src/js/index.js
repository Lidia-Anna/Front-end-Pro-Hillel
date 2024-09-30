const generateTable = () => {
  const tableSize = 10;
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  table.append(tbody);
  for (let i = 1; i <= tableSize; i++) {
    const tr = document.createElement('tr');

    for (j = 1; j <= tableSize; j++) {
      const td = document.createElement('td');
      td.innerHTML = `${j}`;
      tr.append(td);
    }

    tbody.append(tr);
  }
  return table;
};
document.body.append(generateTable());
