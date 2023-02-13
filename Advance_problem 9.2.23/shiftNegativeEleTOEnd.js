//shift -ve element to the end of array

function rearrangeNegElemnt(arr) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    if (arr[left] < 0 && arr[right] < 0) right--;
    else if (arr[left] < 0 && arr[right] > 0) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    } else if (arr[left] > 0 && arr[right] > 0) {
      left++;
    } else {
      left++;
      right--;
    }
  }
  return arr;
}

console.log(rearrangeNegElemnt([1, 2, -4, 3, -5, 0, 3]));
