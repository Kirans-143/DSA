function ternarySearch(arr, left, right, x) {
  if (right >= left) {
    let mid1 = left + Math.floor((right - left) / 3);
    let mid2 = right - Math.floor((right - left) / 3);

    if (arr[mid1] === x) return mid1;
    if (arr[mid2] === x) return mid2;

    if (x < arr[mid1]) return ternarySearch(arr, 1, mid1 - 1, x);
    else if (x > arr[mid2]) return ternarySearch(arr, mid2 + 1, right, x);
    else return ternarySearch(arr, mid1 + 1, mid2 - 1, x);
  }
  return -1;
}

let arr = [-1, 1, 2, 3, 5, 89, 90, 999];
console.log(ternarySearch(arr, 0, arr.length - 1, 90));
