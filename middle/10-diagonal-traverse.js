/**
 * 对角线遍历
 * https://leetcode.cn/problems/diagonal-traverse/
 * @param {number[][]} mat
 * @return {number[]}
 * tags：模拟路线
*/

var findDiagonalOrder = function(mat) {
  // if (mat.length === 1) return mat[0]
  // if (mat[0].length === 1) return mat.flat()
  // let result = [mat[0][0]]
  // let i = 0, j = 0
  // let colLen = mat[0].length
  // let rowLen = mat.length
  // let isGoRightTop = true // 走右上角
  // do {
  //   do {
  //     j++
  //     i--
  //     if (j === colLen) {
  //       j--
  //       i+=2
  //       result.push(mat[i][j])
  //       if (i === rowLen - 1 && j === colLen - 1) return result
  //       break
  //     }
  //     if (i > -1) {
  //       result.push(mat[i][j])
  //     } else {
  //       i++
  //       result.push(mat[i][j])
  //       break
  //     }
  //   } while (i > -1)
  //   do {
  //     i++
  //     j--
  //     if (i === rowLen) {
  //       i--
  //       j+=2
  //       result.push(mat[i][j])
  //       break
  //     }
  //     if (j > -1) {
  //       result.push(mat[i][j])
  //     } else {
  //       j++
  //       result.push(mat[i][j])
  //       break
  //     }
  //   } while (j > -1)
  // } while (i !== rowLen - 1 || j !== colLen - 1)


  if (mat.length === 1) return mat[0]
  if (mat[0].length === 1) return mat.flat()
  const h = mat.length
  const w = mat[0].length
  let isGoRightTop = true // 走右上角
  let row = 0
  let col = 0
  const ans = []

  while (row < h && col < w) {
    ans.push(mat[row][col])
    let newRow = isGoRightTop ? row - 1 : row + 1
    let newCol = isGoRightTop ? col + 1 : col - 1
    // 走到边界
    if (newRow < 0 || newRow === h || newCol < 0 || newCol === w) {
      if (isGoRightTop) {
        row += (col === w - 1 ? 1 : 0)
        col += (col < w - 1 ? 1 : 0)
      } else {
      col += (row === h - 1 ? 1 : 0)
      row += (row < h - 1 ? 1 : 0)
      }
      isGoRightTop = !isGoRightTop
    } else {
      row = newRow
      col = newCol
    }
  }

  return ans
};

// do (j++ i--) while(i > -1)
// i++
// do (j-- i++) while(j > -1)
// j++
//
// const mat = [[1,2,3],[4,5,6],[7,8,9]]
// const mat = [[3], [2]]
const aaa = [[2, 5], [8, 4], [0, -1]]

console.log(findDiagonalOrder(aaa))