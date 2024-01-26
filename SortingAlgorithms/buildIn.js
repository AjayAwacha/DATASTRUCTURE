const arr1 = ['Dfd', 'Cy', 'Aoiu', 'Bsdas', 'Esadasd'];
const arr2 = [4, 5, 2, 6, 1, 9, 7, 0];

function sortByLength(a, b) {
  return a.length - b.length;
}
console.log(arr1.sort(sortByLength));