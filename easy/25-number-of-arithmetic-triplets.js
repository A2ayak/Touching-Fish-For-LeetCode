/**
 * 算术三元组的数目
 * https://leetcode.cn/problems/number-of-arithmetic-triplets/
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 **/

var arithmeticTriplets = function (nums, diff) {
	// 法一 (极简，效率中等)
	// const set = new Set(nums)
	// return nums.reduce(
	// 	(p, c) => p + Number(set.has(c - diff) && set.has(c - 2 * diff)),
	// 	0
	// )
	/*  */
	// 法二 (第一次写的答案，效率最差)
	// let obj = {}
	// let res = 0
	// nums.map((i) => {
	// 	obj[i] = i - diff
	// })
	// // console.log(obj)
	// nums.map((i) => {
	// 	if (obj[obj[i]]) {
	// 		console.log(i)
	// 		res++
	// 	}
	// })
	// return res
	/*  */
	// 法三（效率最高）
	let res = 0
	for (const i of nums) {
		if (nums.includes(i + diff) && nums.includes(i + 2 * diff)) res++
	}
	return res
}

const nums = [0, 1, 4, 6, 7, 10],
	diff = 3
// const nums = [4, 5, 6, 7, 8, 9],
// 	diff = 2

console.log(arithmeticTriplets(nums, diff))
