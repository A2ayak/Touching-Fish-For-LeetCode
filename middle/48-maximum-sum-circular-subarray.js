/**
 * 环形子数组的最大和
 * https://leetcode.cn/problems/maximum-sum-circular-subarray/
 * @param {number[]} nums
 * @return {number}
 */

var maxSubarraySumCircular = function (nums) {
  let total = 0
  let maxSum = nums[0]
  let curMax = 0
  let minSum = nums[0]
  let curMin = 0
  nums.map((n) => {
    curMax = Math.max(n, curMax + n)
    maxSum = Math.max(maxSum, curMax)
    curMin = Math.min(n, curMin + n)
    minSum = Math.min(minSum, curMin)
    total += n
  })
  console.log(total, minSum)
  return maxSum > 0 ? Math.max(maxSum, total - minSum) : maxSum
}

// const nums = [3, -2, 2, -3] // 3
// const nums = [-3, -2, -3] // -2
// const nums = [-2, -3, -1] // -1
const nums = [-5, 3, 5] // 8

console.log(maxSubarraySumCircular(nums))
