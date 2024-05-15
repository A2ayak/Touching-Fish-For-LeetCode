/**
 * 颜色分类
 * https://leetcode-cn.com/problems/sort-colors/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * tags：双指针
 */

//  var sortColors = function(nums) {
//    if (!nums.length) return
//    const n = nums.length
//    let index = 0
//    for (let i = 0; i < n; i++) {
//      if (nums[i] === 0) {
//        [nums[index], nums[i]] = [nums[i], nums[index]]
//        index++
//      }
//    }
//    for (let j = index; j < n; j++) {
//     if (nums[j] === 1) {
//       [nums[index], nums[j]] = [nums[j], nums[index]]
//       index++
//     }
//   }
//   return nums
// };

var sortColors2 = function (nums) {
  const n = nums.length
  let p1 = 0,
    p2 = n - 1,
    cur = 0
  // const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]]
  while (cur <= p2) {
    debugger
    if (nums[cur] === 0) {
      nums[cur] = nums[p1]
      nums[p1] = 0
      p1++
      cur++
    } else if (nums[cur] === 2) {
      nums[cur] = nums[p2]
      nums[p2] = 2
      p2--
    } else {
      cur++
    }
  }
  return nums
}

console.log(sortColors2([2, 0, 2, 1, 1, 0]))
