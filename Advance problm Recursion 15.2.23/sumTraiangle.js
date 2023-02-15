function printSumArrTriangle(arr, n) {
  if (n < 1) return;

  let new_arr = new Array(n - 1);
  for (let i = 0; i < n - 1; i++) new_arr[i] = arr[i] + arr[i + 1];

  printSumArrTriangle(new_arr, n - 1);

  console.log(arr);
}

printSumArrTriangle([1, 2, 3, 4, 5], 5);
