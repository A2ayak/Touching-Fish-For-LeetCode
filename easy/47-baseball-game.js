/**
 * 棒球游戏
 * https://leetcode.cn/problems/baseball-game
 * @param {string[]} operations
 * @return {number}
 **/

var calPoints = function (operations) {
  const arr = []
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === 'C') {
      arr.pop()
    } else if (operations[i] === 'D') {
      arr.push(Number(arr[arr.length - 1]) * 2)
    } else if (operations[i] === '+') {
      arr.push(Number(arr[arr.length - 1]) + Number(arr[arr.length - 2]))
    } else {
      arr.push(Number(operations[i]))
    }
  }
  return arr.reduce((p, c) => p + c, 0)
}

const ops = ['5', '2', 'C', 'D', '+'] // 30
console.log(calPoints(ops))
