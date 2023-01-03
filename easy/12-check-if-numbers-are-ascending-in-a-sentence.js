/**
 * 检查句子中的数字是否递增
 * https://leetcode.cn/problems/check-if-numbers-are-ascending-in-a-sentence/
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
	let numArr = s.split(' ').filter((i) => Number(i))
	for (let i = 1; i < s.length; i++) {
		if (Number(numArr[i]) <= Number(numArr[i - 1])) {
			return false
		}
	}
	return true
}

let s = '1 box has 3 blue 4 red 6 green and 12 yellow marbles'
let ss = 'hello world 5 x 5'
let sss = 'sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s'
console.log(areNumbersAscending(sss))
