/**
 * 构造相同颜色的正方形
 * https://leetcode.cn/problems/make-a-square-with-the-same-color
 * @param {character[][]} grid
 * @return {boolean}
 **/

var canMakeSquare = function (grid) {
  function helper(arr) {
    let count = 0
    arr.map((i) => {
      if (i === 'W') {
        count++
      }
    })
    return count !== 2
  }
  const res1 = helper([grid[0][0], grid[0][1], grid[1][0], grid[1][1]])
  const res2 = helper([grid[0][2], grid[0][1], grid[1][2], grid[1][1]])
  const res3 = helper([grid[2][0], grid[2][1], grid[1][0], grid[1][1]])
  const res4 = helper([grid[2][1], grid[2][2], grid[1][2], grid[1][1]])
  return res1 || res2 || res3 || res4
  // let n = 3
  // for (let i = 0; i < n - 1; i++) {
  //   for (let j = 0; j < n - 1; j++) {
  //     let cnt = 0
  //     for (const [x, y] of [
  //       [0, 0],
  //       [0, 1],
  //       [1, 0],
  //       [1, 1]
  //     ]) {
  //       if (grid[i + x][j + y] == 'B') {
  //         cnt++
  //       }
  //     }
  //     if (cnt >= 3 || cnt <= 1) {
  //       return true
  //     }
  //   }
  // }
  // return false
}

const grid = [
  ['B', 'W', 'B'],
  ['B', 'W', 'W'],
  ['B', 'W', 'B']
] // true
console.log(canMakeSquare(grid))
