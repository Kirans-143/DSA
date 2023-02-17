// Time Complexity O(n)
function search(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) return i;
  }
  return -1;
}

// invoke
console.log(search([3, 4, 8, 1, 2, 0, -1], 2));
console.log(search([3, 4, 8, 1, 2, 0, -1], 10));
