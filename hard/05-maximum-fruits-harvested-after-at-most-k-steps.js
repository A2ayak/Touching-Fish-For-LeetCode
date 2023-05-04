/**
 * 摘水果
 * https://leetcode.cn/problems/maximum-fruits-harvested-after-at-most-k-steps/
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */

var maxTotalFruits = function (fruits, startPos, k) {
  // // 极端情况
  // let MAX = 200001
  // // 计算水果总数前缀和
  // let sum = new Array(MAX)
  // let fruitIndex = 0
  // let currentSum = 0
  // for (let i = 0; i < MAX; i++) {
  //   if (fruitIndex < fruits.length && i == fruits[fruitIndex][0]) {
  //     currentSum += fruits[fruitIndex][1]
  //     fruitIndex++
  //   }
  //   sum[i] = currentSum
  // }
  // // 计算k步的能走的范围内水果数
  // let res = 0
  // // 为了保证最优解，只能反向一次
  // // 1. 先往左走i步，再往右走完k-i步
  // debugger
  // for (let i = 0; i <= k; i++) {
  //   let left = startPos - i
  //   let right = Math.min(MAX - 1, left + (k - i))
  //   if (left < 0) {
  //     break
  //   }
  //   let current = sum[right] - (left == 0 ? 0 : sum[left - 1])
  //   res = Math.max(res, current)
  // }
  // // 2. 先往右走i步，再往左走完k-i步
  // for (let i = 0; i <= k; i++) {
  //   let right = startPos + i
  //   let left = Math.max(0, right - (k - i))
  //   if (right >= MAX) {
  //     break
  //   }
  //   let current = sum[right] - (left == 0 ? 0 : sum[left - 1])
  //   res = Math.max(res, current)
  // }
  // return res

  let MAX = 200001
  let res = 0
  // 前缀和
  let sum = new Array(MAX).fill(0)
  for (let i = 0; i < fruits.length; i++) {
    sum[fruits[i][0]] = fruits[i][1]
  }
  for (let j = 1; j < MAX; j++) {
    sum[j] += sum[j - 1]
  }
  // 向左
  for (let i = 0; i <= k; i++) {
    let left = startPos - i
    if (left < 0) break
    let right = Math.min(MAX - 1, left + (k - i))
    res = Math.max(res, sum[right] - (left === 0 ? 0 : sum[left - 1]))
  }
  // 向右
  for (let i = 0; i <= k; i++) {
    let right = startPos + i
    let left = Math.max(0, right - (k - i))
    if (right >= MAX) break
    res = Math.max(res, sum[right] - (left === 0 ? 0 : sum[left - 1]))
  }
  return res
}

// const fruits = [
//     [2, 8],
//     [6, 3],
//     [8, 6]
//   ],
//   startPos = 5,
//   k = 4 // 9
const fruits = [[200000, 10000]],
  startPos = 200000,
  k = 200000 // 10000
console.log(maxTotalFruits(fruits, startPos, k))
