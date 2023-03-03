/**
 * 保证文件名唯一
 * https://leetcode.cn/problems/making-file-names-unique/
 * @param {string[]} names
 * @return {string[]}
 */

var getFolderNames = function (names) {
	let res = []
	const obj = {}
	names.map((i) => {
		let s = i
		while (s in obj) {
			s = `${i}(${obj[i]++})`
		}
		obj[s] = 1
		res.push(s)
	})
	return res
}

// const names = ['pes', 'fifa', 'gta', 'pes(2019)'] // ['pes', 'fifa', 'gta', 'pes(2019)']
// const names = ['wano', 'wano', 'wano', 'wano'] // ["wano","wano(1)","wano(2)","wano(3)"]
// const names = ['kaido', 'kaido(1)', 'kaido', 'kaido(1)'] // ["kaido","kaido(1)","kaido(2)","kaido(1)(1)"]
const names = ['kaido', 'kaido(1)', 'kaido', 'kaido(1)', 'kaido(2)'] // ["kaido","kaido(1)","kaido(2)","kaido(1)(1)","kaido(2)(1)"]

console.log(getFolderNames(names))
