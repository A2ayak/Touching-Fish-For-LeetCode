/**
 * 使二叉树所有路径值相等的最小代价
 * https://leetcode.cn/problems/make-costs-of-paths-equal-in-a-binary-tree/
 * @param {number} n
 * @param {number[]} cost
 * @return {number}
 */

var minIncrements = function (n, cost) {
  // tips: 子节点路径和归并到父节点，再把子节点剪掉，把当前父节点视作子节点，重复上述操作
  // >> 为无符号右移一位，获取父节点下标, n - 2为倒数第二个叶子节点的数组下标
  let res = 0
  for (let i = n - 2; i > 0; i -= 2) {
    res += Math.abs(cost[i] - cost[i + 1])
    cost[i >> 1] += Math.max(cost[i], cost[i + 1])
  }
  return res
}

const n = 7,
  cost = [1, 5, 2, 2, 3, 3, 1] // 6

console.log(minIncrements(n, cost))
