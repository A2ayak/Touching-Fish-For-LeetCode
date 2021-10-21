/**
 * 盛水最多的容器
 * https://leetcode-cn.com/problems/container-with-most-water/
 * @param {number[]} height
 * @return {number}
 * tags: 双指针收缩，每次保留最长的边
 */

var maxArea = function(height) {
  let l = 0, r = height.length - 1, max = 0
  while (l < r) {
    max = Math.max(max, Math.min(height[l], height[r]) * (r - l))
    if (height[l] < height[r]) {
      l++
    } else {
      r--
    }
  }
  return max
};
