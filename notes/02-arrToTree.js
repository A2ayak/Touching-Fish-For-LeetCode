let arr = Array.from(Array(1000), (v, i) => {
	return { id: i, pid: i - 1, name: i }
})

console.time()
// 性能最优
function arrToTree(arrData, rootId = 0) {
	const result = []
	const itemMap = {}
	arrData.map((item) => {
		const id = item.id
		const pid = item.pid
		if (!itemMap[id]) itemMap[id] = []
		if (!itemMap[pid]) itemMap[pid] = []
		itemMap[pid].push(item)
		item['children'] = itemMap[id]
		if (pid === rootId) {
			result.push(item)
		}
	})
	return result
}

// 递归
// function getChildren(data, result, pid) {
// 	data.map((item) => {
// 		if (item.pid === pid) {
// 			const newItem = { ...item, children: [] }
// 			result.push(newItem)
// 			getChildren(data, newItem.children, newItem.id)
// 		}
// 	})
// }
// function arrToTree(arrData, rootId = -1) {
// 	const result = []
// 	getChildren(arrData, result, rootId)
// 	return result
// }
console.log(arrToTree(arr))
console.timeEnd()

// 数组构建二叉树
class TreeNode {
	constructor(val, left, right) {
		this.val = val === undefined ? 0 : val
		this.left = left === undefined ? null : left
		this.right = right === undefined ? null : right
	}
}

// 入参一个数组，生成二叉树
function buildTree(arr) {
	// 若没有参数或数组长度为0，则视为空树
	if (!arr || arr.length === 0) {
		return null
	}
	// 先将数组第一个元素 设置为根结点
	let root = new TreeNode(arr.shift())
	// 节点队列 陆续从数组中为节点添加左右叶子
	let nodeQueue = [root]
	// 当数组剩余仍有元素，则持续为最近的节点添加叶子
	while (arr.length > 0) {
		// 从节点数组头部取出节点 为了添加叶子备用
		let node = nodeQueue.shift()
		// 若数组中无元素，则视为无叶子可添加,返回即可
		if (!arr.length) {
			break
		}
		// 先从节点数组中取一个元素 转化为节点 拼接为左叶子
		let left = new TreeNode(arr.shift())
		node.left = left
		nodeQueue.push(left)
		// 每拼接一片叶子节点 重新判断剩余叶子数量 若无剩余视为拼接完毕
		if (!arr.length) {
			break
		}
		// 左侧叶子拼完，右边一样的操作
		let right = new TreeNode(arr.shift())
		node.right = right
		nodeQueue.push(right)
	}
	// 最后返回根结点，通过根结点就能得到整个二叉树的结构
	return root
}

const testTree = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(buildTree(testTree))
