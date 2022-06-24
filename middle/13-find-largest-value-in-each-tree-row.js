/**
 * 在每个树行中找最大值
 * https://leetcode.cn/problems/find-largest-value-in-each-tree-row/
 * @param {TreeNode} root
 * @return {number[]}
 * 输入: root = [1,3,2,5,3,null,9]
 * 输出: [1,3,9]
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/*
 * 执行用时：68 ms, 在所有 JavaScript 提交中击败了91.17%的用户
 * 内存消耗：46.2 MB，在所有 JavaScript 提交中击败了12.73%的用户
 */
var largestValues = function (root) {
  let result = [];
  if (!root) return result;
  let arr = [root];
  while (arr.length) {
    const next = [];
    let max = arr[0].val;
    arr.map((treeNode) => {
      if (treeNode.val > max) {
        max = treeNode.val;
      }
      treeNode.left && next.push(treeNode.left);
      treeNode.right && next.push(treeNode.right);
    });
    result.push(max);
    arr = next;
  }
  return result;
};
