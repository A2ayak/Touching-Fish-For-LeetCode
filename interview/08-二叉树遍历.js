// 一、层序遍历
// 递归
function getRes(root) {
  if (root === null) return []
  function helpFun(node, level, arr) {
    if (!node) return
    arr[level] = arr[level] || []
    arr[level].push(node.val)
    helpFun(node.left, level + 1, arr)
    helpFun(node.right, level + 1, arr)
  }
  const arr = []
  helpFun(root, 0, arr)
  return arr
}

// 迭代方法
var levelOrder = function (root) {
  if (!root) return []
  const queue = [root]
  const arr = []
  let level = 0

  while (queue.length) {
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      arr[level] = arr[level] || []
      arr[level].push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    level++
  }
  return arr
}
