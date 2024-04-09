/**
 *
 * @param {*} matrix n*m的地块
 * @param {*} n 地块行数
 * @param {*} m 地块列数
 * @param {*} c 正方形的发电站边长为c
 * @param {*} k 目标电量k
 */
function getResult(matrix, n, m, c, k) {
  const preSum = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0))

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      preSum[i][j] = preSum[i - 1][j] + preSum[i][j - 1] - preSum[i - 1][j - 1] + matrix[i - 1][j - 1]
    }
  }

  let ans = 0

  for (let i = c; i <= n; i++) {
    for (let j = c; j <= m; j++) {
      const square = preSum[i][j] - (preSum[i - c][j] + preSum[i][j - c]) + preSum[i - c][j - c]

      if (square >= k) ans++
    }
  }

  return ans
}

console.log(
  getResult(
    [
      [1, 3, 4, 5, 8],
      [2, 3, 6, 7, 1]
    ],
    2,
    5,
    2,
    6
  )
)
