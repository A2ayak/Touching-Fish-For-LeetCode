/**
 * 有效时间的数目
 * https://leetcode.cn/problems/number-of-valid-clock-times/
 * @param {string} time
 * @return {number}
 **/
var countTime = function (time) {
	let res = 1
	if (time[0] === '?' && time[1] === '?') {
		res = res * 24
	} else if (time[0] === '?') {
		res = time[1] < 4 ? res * 3 : res * 2
	} else if (time[1] === '?') {
		res = time[0] < 2 ? res * 10 : res * 4
	}
	if (time[3] === '?') res = res * 6
	if (time[4] === '?') res = res * 10
	return res
}

// const time = '??:??' // 1400
const time = '0?:??' // 1400

console.log(countTime(time))
