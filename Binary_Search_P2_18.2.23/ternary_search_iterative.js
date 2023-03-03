function ternarySearch(arr, x) {
  let left = 0,
    right = arr.length - 1;
  while (right >= left) {
    let mid1 = left + Math.floor((right - left) / 3);
    let mid2 = right - Math.floor((right - left) / 3);

    if (arr[mid1] === x) return mid1;

    if (arr[mid2] === x) return mid2;

    if (x < arr[mid1]) right = mid1 - 1;
    else if (x > arr[mid2]) left = mid2 + 1;
    else {
      left = mid1 + 1;
      right = mid2 - 1;
    }
  }
  return -1;
}

console.log(ternarySearch([0, 1, 2, 6, 6, 6, 6, 7, 8, 9], 6));
