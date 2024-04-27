/**
 * 查询网格图中每一列的宽度
 * https://leetcode.cn/problems/find-the-width-of-columns-of-a-grid
 * @param {number[][]} grid
 * @return {number[]}
 **/

var findColumnWidth = function (grid) {
  let res = []
  for (let i = 0; i < grid[0].length; i++) {
    let tem = String(grid[0][i]).length
    for (let j = 0; j < grid.length; j++) {
      tem = Math.max(tem, String(grid[j][i]).length)
    }
    res.push(tem)
  }
  return res
}
const grid = [
  [-15, 1, 3],
  [15, 7, 12],
  [5, 6, -2]
] // [3, 1, 2]

console.log(findColumnWidth(grid))
