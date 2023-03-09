/**
 * 得到 K 个黑块的最少涂色次数
 * https://leetcode.cn/problems/minimum-recolors-to-get-k-consecutive-black-blocks/
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 **/

var minimumRecolors = function (blocks, k) {
	// const _MAX = 100
	// const target = 'B'.repeat(k)
	// if (blocks.indexOf(target) !== -1) return 0
	// let res = _MAX
	// for (let i = 0; i <= blocks.length - k; i++) {
	// 	let s = blocks.slice(i, i + k)
	// 	console.log(s)
	// 	let localRes = 0
	// 	for (const c of s) {
	// 		c === 'W' && localRes++
	// 	}
	// 	res = Math.min(res, localRes)
	// }
	// return res
	let l = 0,
		r = 0,
		count = 0
	while (r < k) {
		count += blocks[r] === 'W' ? 1 : 0
		r++
	}
	let res = count
	while (r < blocks.length) {
		count += blocks[r] === 'W' ? 1 : 0
		count -= blocks[l] === 'W' ? 1 : 0
		res = Math.min(res, count)
		l++
		r++
	}
	return res
}

const blocks = 'WBBWWBBWBW'
const k = 7

console.log(minimumRecolors(blocks, k))
