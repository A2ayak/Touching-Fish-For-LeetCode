/**
 * 分隔数组以得到最大和
 * https://leetcode.cn/problems/partition-array-for-maximum-sum/
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

var maxSumAfterPartitioning = function (arr, k) {
	const len = arr.length
	const dp = new Array(len + 1).fill(0)
	for (let i = 1; i <= len; i++) {
		let max = 0
		for (let j = i - 1; j >= 0 && i - j <= k; j--) {
			max = Math.max(max, arr[j])
			dp[i] = Math.max(dp[i], dp[j] + (i - j) * max)
		}
	}
	return dp[len]
}

const arr = [1, 15, 7, 9, 2, 5, 10],
	k = 3

console.log(maxSumAfterPartitioning(arr, k))
