const maxProfit = prices => {
  let base = 0;
  let scout = 1;
  let profit = -Infinity;

  while (base < prices.length - 1) {
    let diff = prices[scout] - prices[base];
    profit = Math.max(profit, diff);
    scout++;
    if (scout > prices.length - 1) {
      base++;
      scout = base + 1;
    }
  }
  return profit;
};

const greedIsGood = arr => {
  if (!arr || arr.length < 2) return undefined;

  let maxProfit = -Infinity;
  let minPrice = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let diff = arr[i] - minPrice;
    maxProfit = Math.max(diff, maxProfit);
    minPrice = Math.min(minPrice, arr[i]);
  }
  return maxProfit;
};
