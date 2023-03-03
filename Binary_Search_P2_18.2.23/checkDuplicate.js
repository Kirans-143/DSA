//in sorted arr, given K ...ur task is to find is K is duplicate value or not
function isDuplicate(arr, k) {
  let left = 0,
    right = arr.length - 1;
  let mid;
  while (right >= left) {
    mid = left + Math.floor((right - left) / 2);
    if (arr[mid === k] && (arr[mid - 1] === k || arr[mid + 1] === k)) {
      return true;
    } else if (k < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
}

let arr = [1, 2, 3, 5, 5, 6, 7];
console.log(isDuplicate(arr, 6));
console.log(isDuplicate(arr, 5));
