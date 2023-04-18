/**
 * 节点与其祖先之间的最大差值
 * https://leetcode.cn/problems/maximum-difference-between-node-and-ancestor/
 * @param {TreeNode} root
 * @return {number}
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.left = (left===undefined ? null : left)
 *   this.right = (right===undefined ? null : right)
 * }
 */

var maxAncestorDiff = function (root) {
	let res = 0
	function helper(node, max, min) {
		if (!node) return
		max = Math.max(node.val, max)
		min = Math.min(node.val, min)
		if (res < max - min) res = max - min
		helper(node.left, max, min)
		helper(node.right, max, min)
	}
	helper(root, root.val, root.val)
	return res
}

const root = [8, 3, 10, 1, 6, null, 14, null, null, 4, 7, 13] // 7

console.log(maxAncestorDiff(root))
