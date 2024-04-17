/**
 * 打家劫舍
 * https://leetcode-cn.com/problems/house-robber/
 * @param {number[]} nums
 * @return {number}
 */

// var rob = function (nums) {
//   const len = nums.length
//   if (len === 0) return 0
//   if (len === 1) return nums[0]
//   let sum1 = nums[0],
//     sum2 = nums[1]
//   for (let i = 2; i < len; i++) {
//     let temp = sum1
//     if (sum2 > sum1) {
//       sum1 = sum2
//     }
//     sum2 = temp + nums[i]
//   }
//   return sum1 > sum2 ? sum1 : sum2
// }

// 法二
var rob = function (nums) {
  // const dp = new Array(nums.length + 2).fill(0)
  // for (let i = 0; i < nums.length; i++) {
  //   dp[i + 2] = Math.max(dp[i] + nums[i], dp[i + 1])
  // }
  // return dp[nums.length + 1]

  const len = nums.length
  const dp = Array(len)
  dp[0] = 0
  dp[1] = nums[0]
  for (let i = 2; i <= len; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1])
  }
  return dp[len]
}

console.log(rob([2, 1, 1, 2]))
