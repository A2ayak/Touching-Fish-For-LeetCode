/**
 * 段式回文
 * https://leetcode.cn/problems/longest-chunked-palindrome-decomposition/
 * @param {string} text
 * @return {number}
 */

var longestDecomposition = function (text) {
	// 法一：迭代
	let res = 0
	let l = 0
	let r = text.length - 1
	let lStr = ''
	let rStr = ''
	while (l < r) {
		lStr += text.charAt(l)
		rStr = text.charAt(r) + rStr
		l++
		r--
		// console.log(lStr, rStr)
		if (lStr === rStr) {
			res += 2
			lStr = ''
			rStr = ''
		}
	}
	if (l === r) {
		res++
	} else if (lStr.length && rStr.length) {
		res++
	}
	// return res
	// 法二 递归（性能差些）
	// if (text.length === 0) return 0
	// for (let i = 1, n = text.length; i <= n / 2; i++) {
	// 	const lStr = text.substring(0, i)
	// 	const rStr = text.substring(n - i)
	// 	console.log(lStr, rStr)
	// 	if (lStr === rStr) {
	// 		return 2 + longestDecomposition(text.substring(i, n - i))
	// 	}
	// }
	// return 1
}

const text = 'ghiabcdefhelloadamhelloabcdefghi' // 7
// const text = 'antaprezatepzapreanta' // 11
// const text = 'elvtoelvto' // 2
console.log(longestDecomposition(text))
