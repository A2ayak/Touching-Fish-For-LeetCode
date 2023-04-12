/**
 * 链表中的下一个更大节点
 * https://leetcode.cn/problems/next-greater-node-in-linked-list/
 * @param {ListNode} head
 * @return {number[]}
 */
/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var nextLargerNodes = function (head) {
	const res = []
	let idx = 0
	const stack = [{ idx, val: head.val }]
	while (head.next) {
		head = head.next
		idx++
		// 栈顶存在元素且栈顶元素小于当前节点的值
		while (stack.length && stack[stack.length - 1].val < head.val) {
			const { idx } = stack.pop()
			res[idx] = head.val
		}
		stack.push({ idx, val: head.val })
	}
	while (stack.length) {
		const { idx } = stack.pop()
		res[idx] = 0
	}
	return res
}

const head = [2, 1, 5] // [5,5,0]
// const head = [2, 7, 4, 3, 5] // [7,0,5,5,0]

console.log(nextLargerNodes(head))
