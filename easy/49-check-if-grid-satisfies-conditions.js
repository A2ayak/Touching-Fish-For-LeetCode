/**
 * 判断矩阵是否满足条件
 * https://leetcode.cn/problems/check-if-grid-satisfies-conditions
 * @param {number[][]} grid
 * @return {boolean}
 **/

var satisfiesConditions = function (grid) {
  let m = grid.length
  let n = grid[0].length
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const item = grid[i][j]
      if (grid[i + 1] && grid[i + 1][j] !== undefined && item !== grid[i + 1][j]) {
        return false
      }
      if (grid[i][j + 1] !== undefined && item === grid[i][j + 1]) {
        return false
      }
    }
  }
  return true
}

const grid = [
  [1, 0, 2],
  [1, 0, 2]
]
console.log(satisfiesConditions(grid))
