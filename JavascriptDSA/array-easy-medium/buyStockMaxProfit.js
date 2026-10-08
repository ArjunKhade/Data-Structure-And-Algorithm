
prices = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(prices));


// found out max profit to buy or sell stock
function maxProfit(prices) {
  //init min and maxProfit  
  let min = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
      // if found max profit
       if(prices[i]-min > maxProfit){
        maxProfit = prices[i]-min;
       }
       // if found min
       if(prices[i]<min){
        min = prices[i];
       }
  }
  //return max profit
  return maxProfit;
}
