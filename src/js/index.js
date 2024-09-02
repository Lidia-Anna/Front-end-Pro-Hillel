function removeElement(arr, item) {
  const index = arr.indexOf(item);
  if (index !== -1) {
    arr.splice(index, 1);
  }
  return arr;
}
const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 1);
console.log(array);
