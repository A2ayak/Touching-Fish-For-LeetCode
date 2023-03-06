/**
 * 使字符串平衡的最少删除次数
 * https://leetcode.cn/problems/minimum-deletions-to-make-string-balanced/
 * @param {string} s
 * @return {number}
 */

var minimumDeletions = function (s) {
	// 模拟每个字符串之间的 s.length-1 种间隔
	let rightA = 0
	let res = 0
	let leftB = 0
	for (let c of s) {
		if (c === 'a') rightA++
	}
	res = rightA
	for (let t of s) {
		t === 'a' ? rightA-- : leftB++
		res = Math.min(res, rightA + leftB)
	}
	return res
}

const s = 'bbaaaaabb' // 2

console.log(minimumDeletions(s))
