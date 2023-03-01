/**
 * 矩阵中的局部最大值
 * https://leetcode.cn/problems/largest-local-values-in-a-matrix/
 * @param {number[][]} grid
 * @return {number[][]}
 **/

var largestLocal = function (grid) {
	// let len = grid.length
	// let res = new Array(len - 2).fill(0).map(() => new Array(len - 2).fill(0))
	// console.log(res)
	// for (let i = 0; i < len - 2; i++) {
	// 	for (let j = 0; j < len - 2; j++) {
	// 		for (let k = i; k < i + 3; k++) {
	// 			for (let l = j; l < j + 3; l++) {
	// 				res[i][j] = Math.max(res[i][j], grid[k][l])
	// 			}
	// 		}
	// 	}
	// }
	// return res

	let n = grid.length
	const temp = []
	const res = []
	for (let row = 0; row < n; row++) {
		const rowArr = []
		for (let col = 1; col < n - 1; col++) {
			const rowMax = Math.max(
				grid[row][col - 1],
				grid[row][col],
				grid[row][col + 1]
			)
			rowArr.push(rowMax)
		}
		temp.push(rowArr)
	}
	console.log('第一次筛选', temp)
	for (let row = 1; row < n - 1; row++) {
		const colArr = []
		for (let col = 0; col < temp[0].length; col++) {
			const colMax = Math.max(
				temp[row - 1][col],
				temp[row][col],
				temp[row + 1][col]
			)
			colArr.push(colMax)
		}
		res.push(colArr)
	}
	return res
}

const grid = [
	[9, 9, 8, 1],
	[5, 6, 2, 6],
	[8, 2, 6, 4],
	[6, 2, 2, 2]
] // [[9,9],[8,6]]
console.log(largestLocal(grid))
