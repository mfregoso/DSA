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
