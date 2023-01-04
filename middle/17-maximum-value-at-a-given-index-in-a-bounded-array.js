/**
 * 有界数组中指定下标处的最大值
 * https://leetcode.cn/problems/maximum-value-at-a-given-index-in-a-bounded-array/
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 *
 * tips: 双指针
 * 执行用时：72 ms, 在所有 JavaScript 提交中击败了7.69%的用户
 * 内存消耗：41 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */

var maxValue = function (n, index, maxSum) {
	let ans = 1
	let remain = maxSum - n
	let left = index
	let right = index
	while (remain > 0) {
		if (left === 0 && right === n - 1) {
			return ans + Math.floor(remain / n)
		}
		ans++
		remain -= right - left + 1
		left = Math.max(0, left - 1)
		right = Math.min(right + 1, n - 1)
	}
	if (remain < 0) ans--
	return ans
}

console.log(maxValue(3, 2, 18))
