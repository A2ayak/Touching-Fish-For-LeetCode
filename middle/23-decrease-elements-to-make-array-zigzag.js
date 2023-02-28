/**
 * 递减元素使数组呈锯齿状
 * https://leetcode.cn/problems/decrease-elements-to-make-array-zigzag/
 * @param {number[]} nums
 * @return {number}
 */

var movesToMakeZigzag = function (nums) {
	let oddSum = 0 // 奇数位小于两侧的情况
	let evenSum = 0 // 偶数位小于两侧的情况
	for (let i = 0; i < nums.length; i++) {
		const minSide = Math.min(nums[i - 1] || 1001, nums[i + 1] || 1001) - 1
		if (minSide < nums[i]) {
			i % 2 === 0
				? (evenSum += nums[i] - minSide)
				: (oddSum += nums[i] - minSide)
		}
	}
	return Math.min(oddSum, evenSum)
}
const nums = [9, 6, 1, 6, 2] // 4
// const nums = [1, 2, 3] // 2
console.log(movesToMakeZigzag(nums))
