/**
 * 给定行和列的和求可行矩阵
 * https://leetcode.cn/problems/find-valid-matrix-given-row-and-column-sums/
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */

var restoreMatrix = function (rowSum, colSum) {
	const [rowLen, colLen] = [rowSum.length, colSum.length]
	const res = Array(rowLen)
		.fill(0)
		.map((i) => new Array(colLen).fill(0))
	for (let i = 0; i < rowLen; i++) {
		let rowMax = rowSum[i]
		for (let j = 0; j < colLen; j++) {
			let colMax = colSum[j]
			res[i][j] = Math.min(rowMax, colMax)
			rowMax -= res[i][j]
			colSum[j] -= res[i][j]
		}
	}
	return res
}

const rowSum = [3, 8],
	colSum = [4, 7]
// 输出[[3, 0], [1, 7]]

console.log(restoreMatrix(rowSum, colSum))
