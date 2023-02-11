function firstNonRepeatingChar(str) {
  let map = new Map();
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      let count = map.get(str[i]);
      count++;
      map.set(str[i], count);
    } else {
      map.set(str[i], 1);
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i]) && map.get(str[i]) === 1) {
      return str[i];
    }
  }
}
console.log(firstNonRepeatingChar("character"));
