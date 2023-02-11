function reverseArr(arr) {
  let start = arr[0];
  let end = arr.length - 1;
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}
let arr = [5, 9, 2, 6, 7];
console.log(reverseArr(arr));
