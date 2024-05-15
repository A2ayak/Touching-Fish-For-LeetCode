/**
 * 乘积最大子数组
 * https://leetcode.cn/problems/maximum-product-subarray/
 * @param {number[]} nums
 * @return {number}
 */

var maxProduct = function (nums) {
  let max = nums[0]
  let min = max
  let res = max
  for (let i = 1; i < nums.length; i++) {
    const v = nums[i]
    if (v >= 0) {
      max = Math.max(max * v, v)
      min = Math.min(min * v, v)
    } else {
      const lastMax = max
      max = Math.max(v, min * v)
      min = Math.min(v, lastMax * v)
    }
    res = Math.max(res, max)
  }
  return res
}

const nums = [2, 3, -2, 4] // 6

console.log(maxProduct(nums))
