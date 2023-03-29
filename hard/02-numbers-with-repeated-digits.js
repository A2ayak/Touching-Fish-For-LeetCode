/**
 * 至少有 1 位重复的数字
 * https://leetcode.cn/problems/numbers-with-repeated-digits/
 * @param {number} n
 * @return {number}
 */

var numDupDigitsAtMostN = function (n) {
	// 一、超时算法
	// const res = new Set()
	// for (let i = 11; i <= n; i++) {
	// 	let map = {}
	// 	String(i)
	// 		.split('')
	// 		.some((c) => {
	// 			if (!map[c]) {
	// 				map[c] = 1
	// 			} else {
	// 				res.add(i)
	// 				return true
	// 			}
	// 		})
	// }
	// return res.size
	//
	// 二、逆向思考，总数减去每个位数中具有不重复数字个数
}

const n = 1000 // 262
console.log(numDupDigitsAtMostN(n))

/* 

num = 3888 
len = 4
i = 3 cur_dig = 3888 / 1000 = 3
j = 1; j < 3; j++
j = 2
count += 9 

*/
