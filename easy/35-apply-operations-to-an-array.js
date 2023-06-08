/**
 * 对数组执行操作
 * https://leetcode.cn/problems/apply-operations-to-an-array/
 * @param {number[]} nums
 * @return {number[]}
 **/
var applyOperations = function (nums) {
  let res = []
  let count = 0
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === 0) {
      count++
      continue
    }
    if (nums[i] === nums[i + 1]) {
      nums[i] = nums[i] * 2
      res.push(nums[i])
      nums[i + 1] = 0
    } else {
      res.push(nums[i])
    }
  }
  const lastNum = nums[nums.length - 1]
  if (lastNum === 0) {
    count++
  } else {
    res.push(lastNum)
  }
  return res.concat(new Array(count).fill(0))
}

// const nums = [1, 2, 2, 1, 1, 0] // [1,4,2,0,0,0]
const nums = [0, 1] // [1,0]

console.log(applyOperations(nums))
