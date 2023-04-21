/**
 * 最小偶倍数
 * https://leetcode.cn/problems/smallest-even-multiple/
 * @param {number} n
 * @return {number}
 **/
var smallestEvenMultiple = function (n) {
	return n & 1 ? n << 1 : n // 位运算
	// return n % 2 ? 2 * n : n // 常规算法
}

const n = 5

console.log(smallestEvenMultiple(n))
