const arrayUnique = [8, 7, 9, 4, 6, 2, 1, 3, 5];
const arrayDuplicate = [8, 7, 9, 8, 5, 4, 2, 3, 1];
const sum = 10;

//M1 nested loop results into O(n^2)
function sumMatchv1(array) {
  let sumData = [];
  for (let i = 0; i < array.length; i++) {
    // O(n)
    for (let j = 0; j < array.length; j++) {
      // O(n)
      if (array[i] + array[j] == sum) {
        sumData.push([i, j]);
      }
    }
  }
  return sumData;
}

//M2 nested loop results into O(nlogn)
function sumMatchv2(array) {
  let res = [];
  let sortedArray = array.sort();
  let low = 0;
  let high = sortedArray.length - 1;

  while (low < high) {
    console.log(low, high);
    if (sortedArray[low] + sortedArray[high] == sum) {
      res.push([low, high]);
    }
    if (sortedArray[low] + sortedArray[high] < sum) {
      low++;
    } else {
      high--;
    }
  }
  //console.log(sortedArray);
  return res;
}
//M3 using objects trying for O(n)
function sumMatchv3(array) {
  let sumData = [];
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    console.log(obj);
    if (obj[array[i]] != undefined) {
      sumData.push([obj[array[i]], i]);
    } else {
      obj[sum - array[i]] = i;
    }
  }
  return sumData;
}

let result = sumMatchv2(arrayUnique);
console.log(result);
