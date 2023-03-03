//this arr only contains +ve integers
// this is only for positive integers

function countSort(arr) {
  let max = arr.reduce((a, b) => Math.max(a, b));
  let countArray = new Array(max + 1).fill(0);
  let outputArry = new Array(arr.length);
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    countArray[arr[i]] = countArray[arr[i]] + 1;
  }

  //Naive approch (time complexity n2)
  // for (let i = 0; i < countArray.length; i++) {
  //   if (countArray[i] > 0) {
  //     let count = countArray[i];
  //     while (count > 0) {
  //       outputArry[index] = i;
  //       count--;
  //       index++;
  //     }
  //   }
  // }
  for (let i = 1; i < arr.length; i++) {
    countArray[i] = countArray[i] + countArray[i - 1];
  }

  //iterate over the original array from the end
  for (let i = arr.length - 1; i >= 0; i--) {
    let pos = countArray[arr[i]] - 1;
    outputArry[pos] = arr[i];
    countArray[arr[i]] = pos;
  }
  return outputArry;
}

console.log(countSort([2, 2, 1, 3, 4, 1, 0, 1, 9, 0]));
