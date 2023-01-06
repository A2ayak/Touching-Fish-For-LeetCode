/**
 * 统计异或值在范围内的数对有多少
 * https://leetcode.cn/problems/count-pairs-with-xor-in-a-range/
 * @param {number[]} nums
 * @param {number} low
 * @param {number} high
 * @return {number}
 *
 * 输入：nums = [1,4,2,7], low = 2, high = 6
 * 输出：6
 *
 * tips:
 * 执行用时：72 ms, 在所有 JavaScript 提交中击败了7.69%的用户
 * 内存消耗：41 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */
var countPairs = function (nums, low, high) {
	const len = nums.length
	let res = 0
	for (let i = 0; i < len - 1; i++) {
		for (let j = i + 1; j < len; j++) {
			let calcRes = nums[i] ^ nums[j]
			if (calcRes >= low && calcRes <= high) {
				res++
			}
		}
	}
	return res
}

console.log(countPairs([1, 4, 2, 7], 2, 6))
