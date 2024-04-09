/* 
请你计算完成这批任务混部最少需要多少服务器，从而最大化控制资源成本。

输入描述
第一行输入为taskNum，表示有taskNum项任务
接下来taskNum行，每行三个整数，表示每个任务的
开始时间（startTime ），结束时间（endTime ），并行度（parallelism）

输出描述
一个整数，表示最少需要的服务器数量
*/

function getResult(ranges) {
  const arr = new Array(50).fill(0)

  for (let [start, end, diff] of ranges) {
    arr[start] += diff
    // 结束时刻不占用，因此不需要end+1
    arr[end] -= diff
  }
  debugger

  // 求解差分数列的前缀和
  let ans = arr[0]
  for (let i = 1; i < arr.length; i++) {
    arr[i] += arr[i - 1]
    ans = Math.max(ans, arr[i])
  }

  return ans
}

// const ranges = [
//   [2, 3, 1],
//   [6, 9, 2],
//   [0, 5, 1]
// ] // 2
const ranges = [
  [3, 9, 2],
  [4, 7, 3]
] // 5

console.log(getResult(ranges))
