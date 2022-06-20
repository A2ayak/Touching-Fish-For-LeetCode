/**
 * 数组中的 k-diff 数对
 * https://leetcode.cn/problems/k-diff-pairs-in-an-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * tags：模拟路线
*/

var findPairs = function(nums, k) {
  // 垃圾代码
  // if (nums.length === 1) return 0
  // let result = 0
  // let arr = []
  // nums.sort((a, b) => a - b)
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (Math.abs(nums[i] - nums[j]) === k) {
  //       if (!arr.includes(nums[i]) || !arr.includes(nums[j])) {
  //         arr.push(nums[i])
  //         arr.push(nums[j])
  //         result++
  //       }
  //     }
  //   }
  // }
  // return result

  const result = new Set()
  const visited = new Set()
  for (const num of nums) {
    if (visited.has(num - k)) {
      result.add(num)
    }
    if (visited.has(num + k)) {
      result.add(num + k)
    }
    visited.add(num)
  }
  return result.size
};

console.log(findPairs([1,3,1,5,4], 2))
