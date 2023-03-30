/**
 * 两点之间不包含任何点的最宽垂直区域
 * https://leetcode.cn/problems/widest-vertical-area-between-two-points-containing-no-points/
 * @param {number[][]} points
 * @return {number}
 */

var maxWidthOfVerticalArea = function (points) {
	points.sort((a, b) => a[0] - b[0])
	let res = points[1][0] - points[0][0]
	for (let i = 2; i < points.length; i++) {
		res = Math.max(res, points[i][0] - points[i - 1][0])
	}
	return res
}

const points = [
	[3, 1],
	[9, 0],
	[1, 0],
	[1, 4],
	[5, 3],
	[8, 8]
] // 3

console.log(maxWidthOfVerticalArea(points))
