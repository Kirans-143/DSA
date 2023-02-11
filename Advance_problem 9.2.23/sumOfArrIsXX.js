function subArrayWithSumN(arr, n) {
  let start = 0;
  let curr_sum = 0;
  for (let i = 0; i < arr.length; i++) {
    curr_sum = curr_sum + arr[i];

    while (curr_sum > n && start <= i) {
      curr_sum = curr_sum - arr[start];
      start++;
    }
    if (curr_sum === n) {
      return [start, i];
    }
  }
  return [-1, -1];
}
console.log(subArrayWithSumN([1, 4, 20, 3, 10, 5], 33));
