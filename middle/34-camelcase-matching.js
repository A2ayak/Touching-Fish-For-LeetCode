/**
 * 驼峰式匹配
 * https://leetcode.cn/problems/camelcase-matching/
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */

var camelMatch = function (queries, pattern) {
	function isUpperCase(c) {
		return c >= 'A' && c <= 'Z'
	}
	let res = []
	for (const key of queries) {
		let flag = true
		let i = 0
		let j = 0
		while (i < key.length) {
			if (j < pattern.length && key[i] === pattern[j]) {
				i++
				j++
			} else {
				if (isUpperCase(key[i])) {
					flag = false
					break
				}
				i++
			}
		}
		if (j !== pattern.length) flag = false
		res.push(flag)
	}
	return res
}

// const queries = [
// 		'FooBar',
// 		'FooBarTest',
// 		'FootBall',
// 		'FrameBuffer',
// 		'ForceFeedBack'
// 	],
// 	pattern = 'FoBa' // [true,false,true,false,false]
const queries = ['CompetitiveProgramming', 'CounterPick', 'ControlPanel'],
	pattern = 'CooP' // [false,false,true]

console.log(camelMatch(queries, pattern))
