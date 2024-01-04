/**
 * 从链表中移除节点
 * https://leetcode.cn/problems/remove-nodes-from-linked-list/
 * @param {ListNode} head
 * @return {ListNode}
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

var removeNodes = function (head) {
  function reverse(h) {
    const dummy = new ListNode()
    while (h !== null) {
      const p = h
      h = h.next
      p.next = dummy.next
      dummy.next = p
    }
    return dummy.next
  }

  head = reverse(head)
  for (let p = head; p.next !== null; ) {
    if (p.val > p.next.val) {
      p.next = p.next.next
    } else {
      p = p.next
    }
  }
  return reverse(head)
}

const head = [5, 2, 13, 3, 8] // [13, 8]

console.log(removeNodes(head))
