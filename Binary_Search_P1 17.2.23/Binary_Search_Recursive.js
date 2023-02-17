// in recursiove approch
// Function signature ,base case, logic at every iteration(recursion)
function binarySearch(arr, x, left, right) {
  if (right >= left) {
    let mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === x) return mid;

    if (arr[mid] > x) return binarySearch(arr, x, left, mid - 1);

    return binarySearch(arr, x, mid + 1, right);
  }
  //return "No Such Number In Array";
  return -1;
}

//Invoke
console.log(binarySearch([1, 2, 2, 2, 2, 2, 4], 8, 0, 8));
console.log(binarySearch([1, 4, 6, 8, 9, 10], 10, 0, 5));
