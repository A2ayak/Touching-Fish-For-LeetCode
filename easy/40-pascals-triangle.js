/**
 * 杨辉三角
 * https://leetcode.cn/problems/pascals-triangle/
 * @param {number} numRows
 * @return {number[][]}
 **/

// var generate = function (numRows) {
//   const res = [[1]]
//   if (numRows === 0) return []
//   if (numRows === 1) return res
//   for (let i = 2; i <= numRows; i++) {
//     let preRow = res[i - 2]
//     let curRow = [1]
//     for (let j = 0; j < preRow.length - 1; j++) {
//       curRow.push(preRow[j] + preRow[j + 1])
//     }
//     curRow.push(1)
//     res.push(curRow)
//   }
//   return res
// }

var generate = function (numRows) {
  const dp = []
  for (let i = 0; i < numRows; i++) {
    dp[i] = Array(i + 1).fill(1)
    for (let j = 1; j < i; j++) {
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
    }
  }
  return dp
}

const numRows = 5

console.log(generate(numRows))
