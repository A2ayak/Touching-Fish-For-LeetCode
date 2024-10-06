/**
 * 加油站
 * https://leetcode.cn/problems/gas-station/
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

var canCompleteCircuit = function (gas, cost) {
  const n = gas.length
  let start = 0
  while (start < n) {
    let count = 0
    let i = 0
    for (; i < n; i++) {
      const idx = (start + i) % n
      count = count + gas[idx] - cost[idx]
      if (count < 0) break
    }
    if (i === n) {
      return start
    } else {
      // 最重要：如果count不够，则从不够的下一个idx重新开始遍历
      start = start + i + 1
    }
  }
  return -1
}

// const gas = [1, 2, 3, 4, 5],
//   cost = [3, 4, 5, 1, 2]
const gas = [2, 3, 4],
  cost = [3, 4, 3]

console.log(canCompleteCircuit(gas, cost))
