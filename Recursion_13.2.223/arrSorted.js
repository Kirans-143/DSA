function isArrSorted(arr, index) {
  if (index === arr.length - 1) return true;
  return arr[index] <= arr[index + 1] && isArrSorted(arr, index + 1);
}

console.log(isArrSorted([1, 2, 3, 4], 0));
console.log(isArrSorted([1, 2, 3, 4, 1], 0));
