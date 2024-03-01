/**
 * 检查数组是否存在有效划分
 * https://leetcode.cn/problems/check-if-there-is-a-valid-partition-for-the-array/
 * @param {number[]} nums
 * @return {boolean}
 */

var validPartition = function (nums) {
  const n = nums.length
  const f = Array(n + 1).fill(false)
  f[0] = true
  for (let i = 1; i < n; i++) {
    if (
      (f[i - 1] && nums[i] === nums[i - 1]) ||
      (i > 1 && f[i - 2] && ((nums[i] === nums[i - 1] && nums[i] === nums[i - 2]) || (nums[i] === nums[i - 1] + 1 && nums[i] === nums[i - 2] + 2)))
    ) {
      // f[i+1]表示能否有效划分nums[0]到nums[i]
      f[i + 1] = true
    }
  }
  return f[n]
}

const nums = [4, 4] // true
// const nums = [1, 1, 1, 2] // false

console.log(validPartition(nums))
