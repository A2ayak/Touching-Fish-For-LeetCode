/**
 * 处理用时最长的那个任务的员工
 * https://leetcode.cn/problems/the-employee-that-worked-on-the-longest-task/
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 **/
var hardestWorker = function (n, logs) {
  let pre = 0
  let res = logs[0][0]
  let resCount = 0
  logs.map((i) => {
    debugger
    const id = i[0]
    let count = i[1] - pre
    pre = i[1]
    if (count >= resCount) {
      res = count === resCount ? Math.min(id, res) : id
      resCount = Math.max(count, resCount)
    }
  })
  return res
}

const n = 10,
  logs = [
    [0, 3],
    [2, 5],
    [0, 9],
    [1, 15]
  ] // 1
// const n = 70,
//   logs = [
//     [36, 3],
//     [1, 5],
//     [12, 8],
//     [25, 9],
//     [53, 11],
//     [29, 12],
//     [52, 14]
//   ] // 12

console.log(hardestWorker(n, logs))
