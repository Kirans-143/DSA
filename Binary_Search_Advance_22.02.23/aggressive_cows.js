function allCowsCanBeTied(arr, mid, k) {
  let countOfCows = 1;
  let cow = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - cow >= mid) {
      cow = arr[i];
      countOfCows++;
    } else {
      continue;
    }
  }
  if (countOfCows >= k) return true;
  return false;
}

function aggressiveCows(arr, k) {
  //find search Space
  let left = 1,
    right = arr[arr.length - 1] - arr[0];

  let ans = -1;

  while (right >= left) {
    let mid = left + Math.floor((right - left) / 2);

    if (allCowsCanBeTied(arr, mid, k)) {
      ans = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return ans;
}

console.log(aggressiveCows([1, 2, 4, 8, 9], 3));
