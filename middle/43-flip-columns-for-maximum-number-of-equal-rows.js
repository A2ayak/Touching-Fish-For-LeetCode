/**
 * 按列翻转得到最大值等行数
 * https://leetcode.cn/problems/flip-columns-for-maximum-number-of-equal-rows/
 * @param {number[][]} matrix
 * @return {number}
 */

var maxEqualRowsAfterFlips = function (matrix) {
  let map = new Map()
  let max = 1
  for (let i = 0; i < matrix.length; i++) {
    let str = ''
    if (matrix[i][0] === 1) {
      let arr = []
      for (let j = 0; j < matrix[i].length; j++) {
        arr.push(matrix[i][j] === 1 ? 0 : 1)
      }
      str = arr.join('')
    } else {
      str = matrix[i].join('')
    }
    map.set(str, (map.get(str) || 0) + 1)
    max = Math.max(max, map.get(str))
  }
  return max
}

// const matrix = [
//   [0, 0, 0],
//   [0, 0, 1],
//   [1, 1, 0]
// ] // 2
const matrix = [
  [0, 1],
  [1, 1]
] // 1

console.log(maxEqualRowsAfterFlips(matrix))
