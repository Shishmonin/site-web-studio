let ar = [1, 2, 3, 4, 5];

// for (let i = 0; i < ar.length; i++) {
//   console.log(ar[i]);
// }
console.log(ar);

ar.forEach(function(item, i, arr) {
  console.log(i + ': ' + item + " (массив: " + arr + ')');
});