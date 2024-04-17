/**
 * 零钱兑换
 * https://leetcode.cn/problems/coin-change/
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (amount === 0) return 0
  if (coins.every((i) => i > amount)) return -1
  coins.sort((a, b) => a - b)
  const dp = Array(amount + 1).fill(amount + 1)
  dp[0] = 0
  for (let i = 1; i <= amount; i++) {
    debugger
    for (let j = 0; j < coins.length; j++) {
      if (i < coins[j]) break
      dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
    }
  }
  return dp[amount] > amount ? -1 : dp[amount]
}

// const coins = [1, 2, 5],
//   amount = 11 // 3:  5 + 5 + 1
const coins = [2],
  amount = 3 // -1

console.log(coinChange(coins, amount))
