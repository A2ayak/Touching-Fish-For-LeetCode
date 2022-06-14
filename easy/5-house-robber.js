/**
 * 打家劫舍
 * https://leetcode-cn.com/problems/house-robber/
 * @param {number[]} nums
 * @return {number}
 */
 
var rob = function(nums) {
  const len = nums.length
  if (len === 0) return 0
  if (len === 1) return nums[0]
  let sum1 = nums[0], sum2 = nums[1]
  for (let i = 2; i < len; i++) {
    let temp = sum1
    if (sum2 > sum1) {
      sum1 = sum2
    }
    sum2 = temp + nums[i]
  } 
  return sum1 > sum2 ? sum1 : sum2
};

console.log(rob([1,2,3,1]))