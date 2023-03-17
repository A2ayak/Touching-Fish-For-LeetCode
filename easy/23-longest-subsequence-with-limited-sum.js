/**
 * 和有限的最长子序列
 * https://leetcode.cn/problems/longest-subsequence-with-limited-sum/
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 **/
/* 执行用时：72 ms, 在所有 JavaScript 提交中击败了91.67%的用户
内存消耗：43.3 MB, 在所有 JavaScript 提交中击败了50.00%的用户 */

var answerQueries = function (nums, queries) {
	const numsSorted = nums.sort((a, b) => a - b)
	let res = []
	queries.map((i) => {
		let total = 0
		for (let j = 0; j < numsSorted.length; j++) {
			total += numsSorted[j]
			// console.log(j, total)
			if (total > i) {
				res.push(j)
				return
			}
			if (j === numsSorted.length - 1 && total <= i) {
				res.push(numsSorted.length)
				return
			}
		}
	})
	return res
}

// const nums = [4, 5, 2, 1],
// 	queries = [3, 10, 21] // [2,3,4]
const nums = [1000000],
	queries = [1000000]

console.log(answerQueries(nums, queries))
