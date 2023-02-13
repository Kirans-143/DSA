function pairing(n) {
  if (n == 1 || n == 2) return n;
  return pairing(n - 1) + (n - 1) * pairing(n - 2);
}

console.log(pairing(3));
