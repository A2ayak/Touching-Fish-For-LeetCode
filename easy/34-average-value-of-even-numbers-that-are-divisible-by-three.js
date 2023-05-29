/**
 * 可被三整除的偶数的平均值
 * https://leetcode.cn/problems/average-value-of-even-numbers-that-are-divisible-by-three/
 * @param {number[]} nums
 * @return {number}
 **/
var averageValue = function (nums) {
  const tem = nums.filter((i) => i % 6 === 0)
  return Math.floor(tem.reduce((pre, cur) => pre + cur, 0) / tem.length) || 0
}
// const nums = [1, 3, 6, 10, 12, 15] // 9
// const nums = [1, 2, 4, 7, 10] // 0
const nums = [
  94, 65, 82, 40, 79, 74, 92, 84, 37, 19, 16, 85, 20, 79, 25, 89, 55, 67, 84, 3,
  79, 38, 16, 44, 2, 54, 58, 94, 69, 71, 14, 24, 13, 21
] // 61

console.log(averageValue(nums))
