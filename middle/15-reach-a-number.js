/**
 * 到达终点数字
 * https://leetcode.cn/problems/reach-a-number/
 * @param {number} target
 * @return {number}
 *  输入: target = 2
 *  输出: 3
 *  解释:
 *  第一次移动，从 0 到 1 。
 *  第二次移动，从 1 到 -1 。
 *  第三次移动，从 -1 到 2 。
 */

var reachNumber = function (target) {
	// let num = 0
	// let firstCount = 0
	// if (target >= 0) {
	// 	for (let i = 1; num < target; i++) {
	// 		num += i
	// 		firstCount++
	// 		console.log(num)
	// 	}
	// 	if (num === target) return firstCount
	// 	return firstCount - 1 + (target - (num - firstCount)) * 2
	// } else {
	// 	console.log('aasd')
	// 	for (let i = -1; num > target; i--) {
	// 		num += i
	// 		firstCount++
	// 		console.log(num)
	// 	}
	// 	if (num === target) return firstCount
	// 	return firstCount - 1 - (target - (num + firstCount)) * 2
	// }
}

console.log(reachNumber(4))
