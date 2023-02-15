function printSubSequence(arr, index, subsequence) {
  if (index == arr.length) {
    if (subsequence.length > 0) {
      console.log(subsequence);
    }
  } else {
    //withput including elemnet
    // subsequence.push(arr[index])
    printSubSequence(arr, index + 1, subsequence);

    //include element
    subsequence.push(arr[index]);
    printSubSequence(arr, index + 1, subsequence);

    subsequence.pop();
  }
  return;
}

printSubSequence([1, 2, 3], 0, []);
