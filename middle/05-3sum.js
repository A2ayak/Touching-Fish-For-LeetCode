/**
 * @name 三数之和
 * @url https://leetcode-cn.com/problems/3sum/
 * @tags 数组、双指针
 * @description 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let res = [], len = nums.length
  if (len < 3) return res
  nums.sort((a, b) => a - b)
  for (let i = 0; i < len; i++) {
    // 排序后第一项大于0的不计算
    if (nums[i] > 0) return res
    let l = i + 1, r = len - 1
    // 去重
    if (i > 0 && nums[i] === nums[i - 1]) continue
    while (l < r) {
      if (nums[i] + nums[l] + nums[r] > 0) {
        r--
      } else if (nums[i] + nums[l] + nums[r] < 0) {
        l++
      } else {
        res.push([nums[i], nums[l], nums[r]])
        // 去重
        while (l < r && nums[l] === nums[l + 1]) l++
        while (l < r && nums[i] === nums[r - 1]) r--
        l++
        r--
      }
    }
  }
  return  res
};
