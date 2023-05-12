/**
 * 可被 K 整除的最小整数
 * https://leetcode.cn/problems/smallest-integer-divisible-by-k/
 * @param {number} k
 * @return {number}
 */

var smallestRepunitDivByK = function (k) {
  // 数学解法，2、5可以被K整除的话一定无解
  if (k === 1) return 1
  if (k % 5 === 0 || k % 2 === 0) return -1
  let testNum = 1
  let res = 1
  while (testNum !== 0) {
    testNum = (testNum * 10 + 1) % k
    res++
  }
  return res
}

const k = 3 // 111 3

console.log(smallestRepunitDivByK(k))
