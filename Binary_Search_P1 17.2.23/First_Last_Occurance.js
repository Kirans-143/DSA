//Find the first and last occurance of an element in an sorted array

// first Occurance
function firstOccurance(arr, left, right, x) {
  if (right >= left) {
    let mid = left + Math.floor((right - left) / 2);
    if (mid == 0 || (arr[mid - 1] < x && arr[mid] === x)) return mid;
    else if (arr[mid] < x) return firstOccurance(arr, mid + 1, right, x);
    else return firstOccurance(arr, left, mid - 1, x);
  }
  return -1;
}

console.log(firstOccurance([-5, -2, 1, 3, 5, 5, 5, 5, 5, 9, 10], 0, 10, 5));

console.log("------------------------------------------------------");

//Last Occurance
function lastOccurance(arr, left, right, x) {
  if (right >= left) {
    let mid = left + Math.floor((right - left) / 2);
    if ((mid === arr.length - 1 || arr[mid + 1] > x) && arr[mid] === x)
      return mid;
    else if (arr[mid] > x) return lastOccurance(arr, left, mid - 1, x);
    else return lastOccurance(arr, mid + 1, right, x);
  }
  return -1;
}

let arr = [-1, 0, 1, 2, 5, 5, 5, 5, 5, 5, 10, 15];
console.log(lastOccurance(arr, 0, arr.length - 1, 5));
