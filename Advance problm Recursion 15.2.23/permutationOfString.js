function permuteString(str, permutation) {
  if (str.length == 0) {
    results.push(permutation.join(""));
  } else {
    for (let i = 0; i < str.length; i++) {
      let subString = str.slice(0, i) + str.slice(i + 1);
      let permArray = permutation.slice();
      permArray.push(str[i]);
      permuteString(subString, permArray);
    }
  }
}

//Invoke
let results = [];
permuteString("abc", []);
console.log(results);
