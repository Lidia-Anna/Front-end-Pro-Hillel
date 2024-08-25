function padString(ourString, lengString, addSymbol = '*', add = true) {
  if (typeof ourString !== 'string') {
    return 'The first parameter is missing or it is not of type string.';
  }
  if (lengString === undefined || lengString === null || typeof lengString !== 'number' || Number.isNaN(lengString)) {
    return 'The second parameter is missing or it is not of type number.';
  }
  if (addSymbol === undefined || addSymbol === null || typeof addSymbol !== 'string' || addSymbol.length !== 1) {
    return 'The third parameter is missing or it is not a single character.';
  }
  if (ourString.length === lengString) { return ourString; }
  if (ourString.length > lengString) { return ourString.substring(0, lengString); }
  let result = ourString;
  if (add === true) {
    for (let i = ourString.length; i < lengString; i++) {
      result += addSymbol;
    }
  } else {
    for (let i = ourString.length; i < lengString; i++) {
      result = addSymbol + result;
    }
  }
  return result;
}
console.log(padString('hello', 7, '*', true));
