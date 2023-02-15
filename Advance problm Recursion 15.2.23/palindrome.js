function isPalindrome(str, start, end) {
  if (str[start] == str[end]) return true;
  if (str[start] != str[end]) return false;
  return isPalindrome(str, start + 1, end - 1);
}

let str = "12321";
console.log(isPalindrome(str, 0, str.length - 1));
