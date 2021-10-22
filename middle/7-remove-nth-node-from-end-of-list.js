/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 删除链表的倒数第N个节点
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/submissions/
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * tags: 双指针，双指针拉开倒数N个距离后同时移动，最后改变慢指针指向
 */

function ListNode(val, next) {
 this.val = (val===undefined ? 0 : val)
 this.next = (next===undefined ? null : next)
}
var removeNthFromEnd = function(head, n) {
  let headerNode = new ListNode(0, head)
  let fastPointer = headerNode, slowPointer = headerNode, i = 0
  while (fastPointer !== null) {
    fastPointer = fastPointer.next
    if (i++ > n) {
      slowPointer = slowPointer.next
    }
  }
  slowPointer.next = slowPointer.next.next
  return headerNode.next
};
