/**
 * 出现最频繁的偶数元素
 * https://leetcode.cn/problems/most-frequent-even-element/
 * @param {number[]} nums
 * @return {number}
 **/

var mostFrequentEven = function (nums) {
	// 法一：map
	// const evenNums = nums.filter((i) => !(i % 2)).sort((a, b) => a - b)
	// const map = new Map()
	// res = res = evenNums.length ? evenNums[0] : -1
	// for (const n of evenNums) {
	// 	if (!map.get(n)) {
	// 		map.set(n, 1)
	// 	} else {
	// 		map.set(n, map.get(n) + 1)
	// 	}
	// 	if (map.get(n) > map.get(res)) {
	// 		res = n
	// 	}
	// }
	// return res

	// Obj
	// const evenNums = nums.filter((i) => !(i % 2)).sort((a, b) => a - b)
	// console.log(evenNums)
	// const obj = {}
	// res = evenNums.length ? evenNums[0] : -1
	// for (const n of evenNums) {
	// 	if (!obj[n]) {
	// 		obj[n] = 1
	// 	} else {
	// 		obj[n]++
	// 	}
	// 	if (obj[n] > obj[res]) {
	// 		res = n
	// 	}
	// }
	// return res

	// LeetCode官方解法
	let count = new Map()
	for (let x of nums) {
		if (x % 2 == 0) {
			count.set(x, (count.get(x) || 0) + 1)
		}
	}
	let res = -1,
		ct = 0
	for (let [k, v] of count) {
		if (res == -1 || v > ct || (v == ct && k < res)) {
			res = k
			ct = v
		}
	}
	return res
}

const nums = [
	8154, 9139, 8194, 3346, 5450, 9190, 133, 8239, 4606, 8671, 8412, 6290
]

console.log(mostFrequentEven(nums))
