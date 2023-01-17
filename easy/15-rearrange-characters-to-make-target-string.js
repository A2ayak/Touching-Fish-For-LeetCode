/**
 * 重排字符形成目标字符串
 * https://leetcode.cn/problems/rearrange-characters-to-make-target-string/
 * @param {string} s
 * @param {string} target
 * @return {number}
 **/

var rearrangeCharacters = function (s, target) {
	let obj = {}
	let countObj = {}
	target.split('').map((i) => {
		if (countObj[i] === undefined) {
			countObj[i] = 1
			obj[i] = 0
		} else {
			countObj[i]++
		}
	})
	console.log(obj, countObj)
	for (let i = 0; i < s.length; i++) {
		let item = s[i]
		if (obj[item] !== undefined) {
			obj[item]++
		}
	}
	let repeatCount = Object.values(countObj)
	let resArr = Object.values(obj).map((item, idx) => {
		return Math.floor(item / repeatCount[idx])
	})
	return Math.min(...resArr)
}

let s = 'abbaccaddaeea'
let target = 'aaaaa'
console.log(rearrangeCharacters(s, target))
