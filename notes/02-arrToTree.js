let arr = [
	{ id: 1, name: '1', pid: 0 },
	{ id: 2, name: '2', pid: 1 },
	{ id: 3, name: '3', pid: 1 },
	{ id: 4, name: '4', pid: 3 },
	{ id: 5, name: '5', pid: 3 },
	{ id: 0, name: 'root', pid: -1 }
]

function arrToTree(arrData, rootId = -1) {
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
console.log(arrToTree(arr))
