function findLongestConsecutiveSequence(arr) {
  let s = new Set();
  let maxLength = 0;

  //add all element to set
  for (let i = 0; i < arr.length; i++) {
    s.add(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    //if (currentElement -1) is not in the set, then currentElement is first elemtn in consecutive sequence
    if (!s.has(arr[i] - 1)) {
      //find lentgh of consecutive sequence
      let j = arr[i];
      while (s.has(j)) {
        j++;
      }
      let length = j - arr[i];
      if (length > maxLength) maxLength = length;
    }
  }
  return maxLength;
}
console.log(findLongestConsecutiveSequence([3, 6, 4, 7, 8, 5, 10])); // 3,4,5,6,7,8
console.log(findLongestConsecutiveSequence([8, 2, 4, 1, 9, 0, 14, 55])); //0,1,2
