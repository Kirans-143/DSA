//this arr only contains +ve integers

function countSort(arr) {
  let max = arr.reduce((a, b) => Math.max(a, b));
  let countArray = new Array(max + 1).fill(0);
  let outputArry = new Array(arr.length);
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    countArray[arr[i]] = countArray[arr[i]] + 1;
  }

  //Naive approch (time complexity n2)
  for (let i = 0; i < countArray.length; i++) {
    if (countArray[i] > 0) {
      let count = countArray[i];
      while (count > 0) {
        outputArry[index] = i;
        count--;
        index++;
      }
    }
  }
  return outputArry;
}

console.log(countSort([2, 2, 1, 3, 4, 1, 0, 1, 9, 0]));
