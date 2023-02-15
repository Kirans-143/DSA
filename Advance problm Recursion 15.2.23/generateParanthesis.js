function printParanthesis(paranthesisArray, index, open, close, n) {
  if (close === n) {
    if (paranthesisArray.join("") != "") console.log(paranthesisArray.join(""));
    return;
  } else {
    if (open < n) {
      paranthesisArray[index] = "(";
      printParanthesis(paranthesisArray, index + 1, open + 1, close, n);
    }
    if (open > close) {
      paranthesisArray[index] = ")";
      printParanthesis(paranthesisArray, index + 1, open, close + 1, n);
    }
  }
}
let n = 3;
let paranthesisStr = new Array(2 * n);
printParanthesis(paranthesisStr, 0, 0, 0, n);
