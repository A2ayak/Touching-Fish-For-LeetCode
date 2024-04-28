/**
 * 最长递增子序列
 * https://leetcode.cn/problems/longest-increasing-subsequence/
 * @param {number[]} nums
 * @return {number}
 */

var lengthOfLIS = function (nums) {
  const n = nums.length
  const dp = new Array(n).fill(1)
  let res = 1
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    res = Math.max(res, dp[i])
  }
  return res
}

const nums = [10, 9, 2, 5, 3, 7, 101, 18] // 4

console.log(lengthOfLIS(nums))
