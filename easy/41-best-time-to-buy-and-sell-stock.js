/**
 * 买卖股票的最佳时机
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock
 * @param {number[]} prices
 * @return {number}
 **/

var maxProfit = function (prices) {
  let min = prices[0]
  let res = 0
  prices.map((p) => {
    min = p < min ? p : min
    if (p > min) {
      res = Math.max(p - min, res)
    }
  })
  return res
}
const prices = [7, 1, 5, 3, 6, 4]

console.log(maxProfit(prices))
