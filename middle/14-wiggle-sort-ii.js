/**
 * 摆动排序 II
 * https://leetcode.cn/problems/wiggle-sort-ii/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 输入：nums = [1,5,1,1,6,4]
 * 输出：[1,6,1,5,1,4]
 * 解释：[1,4,1,5,1,6] 同样是符合题目要求的结果，可以被判题程序接受。
 */

var wiggleSort = function (nums) {
  const len = nums.length
  const result = []
  if (!len) return result
  if (len === 1) return nums
  nums.sort((a, b) => a - b)
  const isOdd = len % 2 !== 0
  const mid = isOdd ? Math.floor(len / 2) : len / 2

  if (isOdd) {
    for (let i = 0; i < mid; i++) {
      result.push(nums[i])
      result.push(nums[i + mid + 1])
    }
    result.push(nums[mid])
  } else {
    for (let i = 0; i < mid; i++) {
      result.push(nums[i])
      result.push(nums[i + mid])
    }
  }
  nums = result
  console.log(nums)
}

// const nums = [1, 5, 1, 1, 6, 4]
// const nums = [1, 5, 1, 1, 6]
const nums = [1, 5, 1, 1, 6, 4]

console.log(wiggleSort(nums))
