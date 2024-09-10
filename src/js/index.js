const MIN_BALANCE = 2000;

const removeSymbols = (str, symbolToRemove = []) => {
  if (typeof str !== 'string') throw new Error('str must be a string');
  const result = [];
  for (let i = 0; i < str.length; i++) {
    if (symbolToRemove.includes(str[i])) continue;
    result.push(str[i]);
  }
  return result.join('');
};

const findPhoneNumbersByMinBalance = (arr, minBalance = 0, balanceFielKey = 'balance', phoneFieldKey = 'phone') => {
  if (!Array.isArray(arr)) return [];
  if (typeof minBalance !== 'number') return [];
  const results = [];

  arr.forEach((item) => {
    if (minBalance <= 0) {
      results.push(item[phoneFieldKey]);
      return;
    }

    const normalizedBalance = Number(removeSymbols(item[balanceFielKey], ['$', ',']));
    if (normalizedBalance > minBalance) results.push(item[phoneFieldKey]);
  });
  return results;
};

const numbers = findPhoneNumbersByMinBalance(users, MIN_BALANCE);
console.log(numbers);

const getAvgBalance = (arr, balanceKey = 'balance') => {
  if (!Array.isArray(arr)) throw new Error('arr must be a array');
  if (typeof balanceKey !== 'string') throw new Error('balanceKey must be a string');
  const sum = arr.reduce((acc, item) => {
    const normalizedBalance = Number(removeSymbols(item[balanceKey], ['$', ',']));
    const currentBalance = acc + normalizedBalance;
    return Number(currentBalance.toFixed(2));
  }, 0);
  return sum;
};
console.log(getAvgBalance(users));
