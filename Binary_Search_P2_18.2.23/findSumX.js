//Given a sorted array we need to find the two consecutive number whos sum is equal to given sum X
function sumArray(arr, left, right, sum) {
  if (right >= left) {
    let mid = left + Math.floor((right - left) / 2);

    if (arr[mid] + arr[mid - 1] === sum || arr[mid] + arr[mid + 1] === sum)
      return true;

    if (arr[mid] + arr[mid - 1] > sum || arr[mid] + arr[mid - 1] > sum)
      return sumArray(arr, left, mid - 1, sum);
    else return sumArray(arr, mid + 1, right, sum);
  }
  return false;
}

let arr = [1, 3, 5, 7, 9, 23];
let sum = 16;
console.log(sumArray(arr, 0, arr.length - 1, sum));
