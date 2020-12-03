const arrayUnique = [4, 2, -3, -1, 0, 4];

function subArrayV1(array) {
  let res = [];
  let sum = 0;
  let a = [];
  for (let i = 0; i < array.length; i++) {
    sum = 0;
    a = [];
    for (let j = i; j < array.length; j++) {
      console.log(i, j);
      a.push(array[j]);
      sum += array[j];
      if (sum == 0) {
        res.push(a);
      }
    }
  }
  return res;
}

function subArrayV2(input) {
  let sum = 0,
    map = { 0: [-1] };

  for (let i = 0; i < input.length; i++) {
    sum += input[i];

    if (!map[sum]) {
      map[sum] = [i];
    } else {
      map[sum].push(i);

      let val = map[sum];
      for (let j = 0; j < val.length; j++) {
        console.log(val[j]);
      }
    }
  }
  return map;
}

let result = subArrayV2(arrayUnique);
console.log(result);
