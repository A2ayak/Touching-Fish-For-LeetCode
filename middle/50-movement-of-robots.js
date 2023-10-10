/**
 * 移动机器人
 * https://leetcode.cn/problems/movement-of-robots/
 * @param {number[]} nums
 * @param {string} s
 * @param {number} d
 * @return {number}
 */

var sumDistance = function (nums, s, d) {
  const n = s.length
  for (let i = 0; i < n; i++) {
    nums[i] = s[i] === 'L' ? nums[i] - d : nums[i] + d
  }
  nums.sort((a, b) => a - b)
  let res = 0,
    sum = 0
  for (let i = 0; i < n; i++) {
    res = (res + i * nums[i] - sum) % (1e9 + 7)
    sum += nums[i]
  }
  return res
}

const nums = [-2, 0, 2],
  s = 'RLL',
  d = 3

console.log(sumDistance(nums, s, d))
