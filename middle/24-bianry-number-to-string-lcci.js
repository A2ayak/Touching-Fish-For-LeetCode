/**
 * 二进制数转字符串
 * https://leetcode.cn/problems/bianry-number-to-string-lcci/
 * @param {number} num
 * @return {string}
 */

var printBin = function (num) {
	let res = '0.'
	let temp = num
	while (res.length < 32 && temp !== 0) {
		const i = temp * 2
		const digit = Math.floor(i)
		res += digit
		temp = i - digit
	}
	return res.length < 32 ? res : 'ERROR'
}
// const num = 0.625 // "0.101"
const num = 0.1 // 'ERROR'
console.log(printBin(num))
