/**
 * 完全平方数
 * https://leetcode.cn/problems/perfect-squares/
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const dp = Array(n + 1).fill(0)
  for (let i = 1; i <= n; i++) {
    dp[i] = i
    for (let j = 1; i - j * j >= 0; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
    }
  }
  return dp[n]
}

const n = 12 // 3

console.log(numSquares(n))

// 说明：res数组先形成 [5, 4, 3, 3]，再不断通过i++递归，重置j为0后，res[j] + nums[i]
