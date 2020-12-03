const arr = [3, 5, 6, 7, 8, 4, 5,6];
function dups(array) {
  let dups = [];
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]] != undefined) {
      dups.push(array[i]);
      obj[array[i]] = obj[array[i]] + 1;
    } else {
      obj[array[i]] = (obj[array[i]] || 0) + 1;
    }
  }

  return dups;
}
let result = dups(arr);
console.log(result);
