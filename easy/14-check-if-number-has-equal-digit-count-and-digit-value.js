/**
 * 判断一个数的数字计数是否等于数位的值
 * https://leetcode.cn/problems/check-if-number-has-equal-digit-count-and-digit-value/
 * @param {string} num
 * @return {boolean}
 * 执行用时：68  ms, 在所有 JavaScript 提交中击败了46.27% 的用户
 * 内存消耗：42.8 MB, 在所有 JavaScript 提交中击败了23.88% 的用户
 **/

var digitCount = function (num) {
	// let obj = {}
	// for (let i = 0; i < num.length; i++) {
	// 	let key = num[i]
	// 	if (!obj[key]) {
	// 		obj[key] = 1
	// 	} else {
	// 		obj[key]++
	// 	}
	// }
	// let arr = Object.keys(obj)
	// for (let j = 0; j < arr.length; j++) {
	// 	let key = arr[j]
	// 	console.log(key, num[key], obj[key])
	// 	if (num[key] != obj[key]) return false
	// }
	// return true

	let len = num.length
	for (let i = 0; i < len; i++) {
		let count = 0
		for (let j = 0; j < len; j++) {
			console.log(i, num[j])
			if (i === Number(num[j])) {
				count++
				console.log(count)
			}
		}

		if (num[i] != count) return false
	}
	return true
}

// let str = '1210'
// let str = '42101000'
let str = '030'
console.log(digitCount(str))
