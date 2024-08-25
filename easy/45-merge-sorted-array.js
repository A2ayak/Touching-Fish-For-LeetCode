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
  /* 法一 */
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
  /* 法二 */
  nums1.splice(m, nums1.length - m, ...nums2)
  nums1.sort((a, b) => a - b)
  console.log(nums1)
  /* 法三-双指针 */
//   let i = 0,
//     j = 0
//   const n1 = nums1.length
//   const n2 = nums2.length
//   const res = []
//   while (i < n1 && j < n2) {
//     if (nums1[i] >= nums2[j]) {
//       res.push(nums2[j++])
//     } else {
//       res.push(nums1[i++])
//     }
//   }
//   while (i < n1) {
//     res.push(nums1[i++])
//   }
//   while (j < n2) {
//     res.push(nums2[j++])
//   }

//   return res
// }
const nums1 = [1, 2, 3],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3

console.log(merge(nums1, m, nums2, n))
