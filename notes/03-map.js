// map性能
let map = new Map([
	[1, 'a'],
	[2, 'b'],
	[3, 'c'],
	[4, 'd'],
	[5, 'e'],
	[6, 'f']
])
function mapToSelect(map) {
	let res = []
	for (const [value, label] of map) {
		res.push({ label, value })
	}
	console.log(res)
	return res
}
console.time()
// console.timeEnd()
