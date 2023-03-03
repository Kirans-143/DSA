// if n is odd median = Math.floor(n/2)
//if n is even median = (arr[Math.floor(n-1)] + arr[Math.floor(n)])/2

// two sorted array and you need to find the median of merged array
//Merge Two aorted array
function median(A, B) {
  let n = A.length,
    m = B.length;

  if (n > m) {
    return median(B, A);
  }

  let l = 0,
    r = n;
  let medianInMergedArray = Math.floor((n + m + 1) / 2);

  while (r >= l) {
    let mid = l + Math.floor((r - l) / 2);
    let sizeOfLeftOfA = mid;
    let sizeOfLeftOfB = medianInMergedArray - mid;
    let leftA, leftB, rightA, rightB;

    if (sizeOfLeftOfA > 0) {
      leftA = A[sizeOfLeftOfA - 1];
    } else {
      leftA = Number.MIN_VALUE;
    }

    if (sizeOfLeftOfB > 0) {
      leftB = B[sizeOfLeftOfB - 1];
    } else {
      leftB = Number.MIN_VALUE;
    }

    if (sizeOfLeftOfA < n) {
      rightA = A[sizeOfLeftOfA];
    } else {
      rightA = Number.MAX_VALUE;
    }
    if (sizeOfLeftOfB < m) {
      rightB = B[sizeOfLeftOfB];
    } else {
      rightB = Number.MAX_VALUE;
    }
    if (leftA <= rightB && leftB <= rightA) {
      if ((m + n) % 2 === 0)
        return Math.floor(
          (Math.max(leftA, leftB) + Math.min(rightA + rightB)) / 2
        );
      else return Math.max(leftA, leftB);
    } else if (leftA > leftB) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
}

console.log(median([-5, 3, 6, 12, 15], [-12, -10, -6, -3, 4, 10]));
