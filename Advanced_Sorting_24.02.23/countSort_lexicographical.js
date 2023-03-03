// sort string in lexograohical order using Count sort
// Create a count array of length 123 we can sort a string lexicographically that contains charater between A-Z nd a-z
function lexicographical(str) {
  let countArray = new Array(123).fill(0);
  let outputArray = new Array(str.length);

  for (let i = 0; i < str.length; i++) {
    countArray[str.charCodeAt(i)] = countArray[str.charCodeAt(i)] + 1;
  }

  //Add previous count
  for (let i = 1; i < countArray.length; i++) {
    countArray[i] = countArray[i] + countArray[i - 1];
  }

  //Iterate over original string from the end to start
  for (let i = str.length - 1; i >= 0; i--) {
    let pos = countArray[str.charCodeAt(i)] - 1;
    outputArray[pos] = str[i];
    countArray[str.charCodeAt(i)] = pos;
  }
  return outputArray.join("");
}

console.log(lexicographical("chatgpt"));
