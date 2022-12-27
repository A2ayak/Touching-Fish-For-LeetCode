/**
 * 转换字符串最少的操作次数
 * https://leetcode.cn/problems/minimum-moves-to-convert-string/submissions/
 * @param {string} s
 * @return {number}
 **/

var minimumMoves = function (s) {
	// let res = 0
	// while (s.indexOf('X') !== -1) {
	// 	let i = s.indexOf('X')
	// 	res++
	// 	if (i + 3 > s.length) break
	// 	s = 'OOO'.repeat(res) + s.slice(i + 3)
	// }
	// return res
	let i = 0
	let res = 0
	while (i < s.length) {
		s[i] === 'X' ? (res++, (i += 3)) : i++
	}
	return res
}

console.log(minimumMoves('XXXOOXXX'))
