/**
 * 和有限的最长子序列
 * https://leetcode.cn/problems/longest-subsequence-with-limited-sum/
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 **/
/* 
执行用时：76 ms, 在所有 JavaScript 提交中击败了85.00%的用户
内存消耗：42.9 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */

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
		// 法二：some可以中途return reduce不行，除非throw newError此时无返回值
		// numsSorted.some((k, j) => {
		// 	total += k
		// 	if (total > i) {
		// 		res.push(j)
		// 		return true
		// 	}
		// 	if (j === numsSorted.length - 1 && total <= i) {
		// 		res.push(numsSorted.length)
		// 		return true
		// 	}
		// })
	})
	return res
}

const nums = [4, 5, 2, 1],
	queries = [3, 10, 21] // [2,3,4]
// const nums = [1000000],
// 	queries = [1000000]

console.log(answerQueries(nums, queries))
