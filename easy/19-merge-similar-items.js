/**
 * 合并相似的物品
 * https://leetcode.cn/problems/merge-similar-items/
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 **/
/* 
执行用时：80 ms, 在所有 JavaScript 提交中击败了95.65%的用户
内存消耗：46.6 MB, 在所有 JavaScript 提交中击败了90.22%的用户
 */

var mergeSimilarItems = function (items1, items2) {
	const obj = {}
	items1.concat(items2).map((item) => {
		if (obj[item[0]]) {
			obj[item[0]] += item[1]
		} else {
			obj[item[0]] = item[1]
		}
	})
	return Object.keys(obj).map((i) => {
		return [i, obj[i]]
	})
}

const items1 = [
		[1, 1],
		[4, 5],
		[3, 8]
	],
	items2 = [
		[3, 1],
		[1, 5]
	]
// [[1,6],[3,9],[4,5]]
console.log(mergeSimilarItems(items1, items2))
