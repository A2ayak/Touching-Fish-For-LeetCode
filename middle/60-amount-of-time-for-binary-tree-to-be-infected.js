/**
 * 感染二叉树需要的总时间
 * https://leetcode.cn/problems/amount-of-time-for-binary-tree-to-be-infected/
 * @param {TreeNode} root
 * @param {number} start
 * @return {number}
 */

const buildTree = require('../utils/tree.js')
var amountOfTime = function (root, start) {
  // let startHeight = 0,
  //   isStartDirLeft = false
  // const obj = { l: 1, r: 1 }
  // function dfs(node, i, isLeft, obj) {
  //   if (!node) return
  //   obj[isLeft ? 'l' : 'r'] = Math.max(obj[isLeft ? 'l' : 'r'], i)
  //   // h = Math.max(h, i)
  //   if (node.val === start) {
  //     startHeight = i
  //     isStartDirLeft = isLeft
  //   }
  //   if (node.left) dfs(node.left, i + 1, isLeft, obj)
  //   if (node.right) dfs(node.right, i + 1, isLeft, obj)
  // }
  // dfs(root.left, 1, true, obj)
  // dfs(root.right, 1, false, obj)
  // let res
  // const { l: left, r: right } = obj
  // debugger
  // if (isStartDirLeft && left > right) {
  //   res = left - startHeight
  // } else if (!isStartDirLeft && right > left) {
  //   res = right - startHeight
  // } else if (root.val === start) {
  //   if (!root.left && !root.right) return 0
  //   res = Math.max(left, right)
  // } else {
  //   res = Math.max(left, right) + startHeight
  // }
  // return res

  let ans = 0
  debugger
  function dfs(node) {
    if (!node) return { match: false, depth: 0 }
    const { match: leftMatch, depth: leftDepth } = dfs(node.left)
    const { match: rightMatch, depth: rightDepth } = dfs(node.right)
    if (leftMatch || rightMatch) {
      ans = Math.max(ans, leftDepth + rightDepth)
    }
    if (node.val === start) {
      ans = Math.max(ans, leftDepth, rightDepth)
      return { match: true, depth: 1 }
    }
    return {
      match: leftMatch || rightMatch,
      depth: (leftMatch ? leftDepth : rightMatch ? rightDepth : Math.max(leftDepth, rightDepth)) + 1
    }
  }
  dfs(root)
  return ans
}

// const root = [1, 5, 3, null, 4, 10, 6, 9, 2],
//   start = 3 // 4
// const root = [1],
//   start = 1 // 0
// const root = [1, 2, null, 3, null, 4, null, 5],
//   start = 1 // 4
const root = [1, 2, null, 3, null, 4, null, 5],
  start = 2 // 3

const r = buildTree(root)
// console.log(r)
console.log(amountOfTime(r, start))
