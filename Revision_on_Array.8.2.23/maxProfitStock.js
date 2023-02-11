function maxProfitStock(arr) {
  let maxProfit = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      maxProfit = maxProfit + (arr[i] - arr[i - 1]);
    }
  }
  return maxProfit;
}

let price1 = [100, 180, 260, 310, 40, 535, 695];
let price2 = [100, 90, 80, 40];
console.log(maxProfitStock(price1));
console.log(maxProfitStock(price2));
