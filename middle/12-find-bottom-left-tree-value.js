/**
 * 找树左下角的值
 * https://leetcode.cn/problems/find-bottom-left-tree-value/
 * @param {TreeNode} root
 * @return {number}
 * 输入: [1,2,3,4,null,5,6,null,null,7]
 * 输出: 7
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
*/

// DFS 深度优先遍历 (性能更优)
/*
 * 执行用时：60 ms, 在所有 JavaScript 提交中击败了96.15%的用户
 * 内存消耗：44.8 MB, 在所有 JavaScript 提交中击败了87.45%的用户
*/
var findBottomLeftValue = function(root) {
  const dfs = (node, h) => {
    if (!node) return
    h++
    if (node.left) dfs(node.left, h)
    if (node.right) dfs(node.right, h)
    if (h > curHeight) {
      curHeight = h
      curVal = node.val
    }
  }
  let curHeight = 0
  let curVal = null
  dfs(root, 0)
  return curVal
};

// BFS广度优先遍历
var findBottomLeftValue = function(root) {
  let arr = [root]
  let left = null
  while(arr.length) {
      const next = []
      left = arr[0]
      arr.map(treeNode => {
          treeNode.left && next.push(treeNode.left)
          treeNode.right && next.push(treeNode.right)
      })
      arr = next
  }
  return left.val
};


// const arr = [1,2,3,4,null,5,6,null,null,7]
// const arr = [1,2,3,4]
// const arr = [2,1,3]
// console.log(findBottomLeftValue(arr));