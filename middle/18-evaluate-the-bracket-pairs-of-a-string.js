/**
 * 替换字符串中的括号内容
 * https://leetcode.cn/problems/evaluate-the-bracket-pairs-of-a-string/
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */

var evaluate = function (s, knowledge) {
	// let res = s
	// const obj = {}
	// knowledge.map((arr) => {
	// 	obj[arr[0]] = arr[1]
	// })
	// let keyWordArr =
	// 	s.match(/\(\w+\)/g)?.map((i) => i.replace(/[\(|\)]/g, '')) ?? []
	// console.log(obj)
	// console.log(keyWordArr)
	// keyWordArr.map((key) => {
	// 	let reg = RegExp('\\(' + key + '\\)', 'g')
	// 	res = obj[key] ? res.replace(reg, obj[key]) : res.replace(reg, '?')
	// })
	// return res
	const mapping = Object.fromEntries(knowledge)
	return s.replace(/\((\w+)\)/g, (_, group) => {
		console.log(_, group)
		return mapping[group] ?? '?'
	})
}

let s = '(name)is(age)yearsold',
	knowledge = [
		['name', 'bob'],
		['age', 'two']
	]
console.log(evaluate(s, knowledge))
