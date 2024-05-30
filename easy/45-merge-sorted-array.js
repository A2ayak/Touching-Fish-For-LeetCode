/**
 * 合并两个有序数组
 * https://leetcode.cn/problems/merge-sorted-array
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 **/

var merge = function (nums1, m, nums2, n) {
  // while (nums1.length !== m) {
  //   nums1.pop()
  // }
  // while (nums2.length !== n) {
  //   nums2.pop()
  // }
  // while (nums2.length) {
  //   nums1.push(nums2.shift())
  // }
  // nums1.sort((a, b) => a - b)
  nums1.splice(m, nums1.length - m, ...nums2)
  nums1.sort((a, b) => a - b)
  console.log(nums1)
}
const nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3

console.log(merge(nums1, m, nums2, n))
