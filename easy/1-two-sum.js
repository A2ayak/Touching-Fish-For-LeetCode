/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
   你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
   你可以按任意顺序返回答案。
   链接：https://leetcode-cn.com/problems/two-sum
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let numMap = {}
  for(let i = 0; i < nums.length; i++) {
    const item = nums[i]
    if (numMap[item] !== undefined) {
      return [numMap[item], i]
    }
    numMap[target - item] = i
  }
}

// test
let nums = [3,2,4], target = 6
console.log(twoSum(nums, target))
