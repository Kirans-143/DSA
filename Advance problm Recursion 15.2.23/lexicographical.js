function lexicographical(n) {
  for (let i = 1; i <= 9; i++) {
    lexicographicalRecursive(i, n);
  }
}

function lexicographicalRecursive(i, n) {
  if (i > n) return;

  console.log(i);
  for (let j = 0; j < 10; j++) {
    lexicographicalRecursive(10 * i + j, n);
  }
}
lexicographical(25);
