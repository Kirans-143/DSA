// Iterative approch for bionary search
function binarySearch(arr, x) {
  let left = 0,
    right = arr.length - 1;
  let mid;
  while (right >= left) {
    mid = left + Math.floor((right - left) / 2);

    if (arr[mid] == x) return mid;

    if (arr[mid] > x) right = mid - 1;
    else left = mid + 1;
  }
  return -1;
}

//invoke
console.log(binarySearch([-5, -1, 2, 3, 7, 8, 10, 27], 7));
// Time complexity O(logn)
