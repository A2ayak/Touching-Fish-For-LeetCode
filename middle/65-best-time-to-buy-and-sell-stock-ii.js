/**
 * 买卖股票的最佳时机 II
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
  const n = prices.length
  const dp = new Array(n).fill(0).map(() => [0, 0])

  dp[0][0] = 0
  dp[0][1] = -prices[0]

  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
  }
  console.log(dp)
  return dp[n - 1][0]
}

const prices = [7, 1, 5, 3, 6, 4] // 7

console.log(maxProfit(prices))
