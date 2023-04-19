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
