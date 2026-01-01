
function maxProfit(prices) {
  let maximumProfit = 0, buyPrice = Number.MAX_SAFE_INTEGER, currentProfit = 0;
  if (prices[i] < buyPrice) {
    buyPrice = prices[i];
  }
  currentProfit = prices[i] - buyPrice;
  maximumProfit = Math.max(maximumProfit, currentProfit);
  return maximumProfit;
}
const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
