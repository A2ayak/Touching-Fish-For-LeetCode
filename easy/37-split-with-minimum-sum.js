/**
 * 最小和分割
 * https://leetcode.cn/problems/split-with-minimum-sum/
 * @param {number} num
 * @return {number}
 **/

var splitNum = function (num) {
  // 一、贪心 + 分配 （时间52ms击败 98.67%使用 JavaScript 的用户，内存40.57MB击败 6.67%使用 JavaScript 的用户）
  // let num1 = ''
  // let num2 = ''
  // const arr = String(num).split('').sort()
  // const maxLen = Math.ceil(arr.length / 2)
  // console.log('maxLen', maxLen)
  // while (arr.length) {
  //   debugger
  //   num1 += arr.shift()
  //   if (arr.length) {
  //     num2 += arr.shift()
  //   }
  // }
  // return Number(num1) + Number(num2)

  // 二、贪心-简化写法（内存低、时间高）
  const a = [0, 0]
  const arr = String(num).split('').sort()
  for (let i = 0; i < arr.length; i++) {
    a[i % 2] = a[i % 2] * 10 + Number(arr[i])
  }
  return a[0] + a[1]
}

// const num = 4325 // 59
// const num = 687 // 75
// const num = 10000 // 1
// const num = 958351976 // 19268
const num = 206046331 // 1582

console.log(splitNum(num))
