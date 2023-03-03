function isAllocationPossible(arr, mid, k) {
  let countOfStudents = 1;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > mid) return false;

    if (sum + arr[i] > mid) {
      countOfStudents++;
      sum = arr[i];

      //If the students required becomes greater than given number of student, return false
      if (countOfStudents > k) return false;
    } else {
      sum = sum + arr[i];
    }
  }
  return true;
}

function bookAllocation(arr, k) {
  //If number of books is less than number of students, return -1
  if (arr.length < k) {
    return -1;
  }
  let left = arr[arr.length - 1];
  let right = arr.reduce((a, b) => a + b);
  let ans = Number.MAX_VALUE;

  while (right >= left) {
    let mid = left + Math.floor((right - left) / 2);

    if (isAllocationPossible(arr, mid, k)) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
}

console.log(bookAllocation([12, 34, 67, 90], 2));
