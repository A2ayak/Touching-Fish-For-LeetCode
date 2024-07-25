/**
 * 生成特殊数字的最少操作
 * https://leetcode.cn/problems/minimum-operations-to-make-a-special-number/
 * @param {string} num
 * @return {number}
 */

var minimumOperations = function (num) {
  // 法一
  const n = num.length
  let found0 = false,
    found5 = false
  for (let i = n - 1; i >= 0; i--) {
    const c = num[i]
    debugger
    if (((c === '5' || c === '0') && found0) || ((c === '2' || c === '7') && found5)) {
      return n - i - 2
    } else if (c === '0') {
      found0 = true
    } else if (c === '5') {
      found5 = true
    }
  }
  return found0 ? n - 1 : n
  // 法二
  // const n = num.length
  // function helper(tail) {
  //   let i = num.lastIndexOf(tail[1])
  //   if (i <= 0) return n
  //   i = num.lastIndexOf(tail[0], i - 1)
  //   return i < 0 ? n : n - i - 2
  // }
  // const hasZeroLen = n - (num.includes('0') ? 1 : 0)
  // return Math.min(hasZeroLen, helper('00'), helper('25'), helper('75'), helper('50'))
}

// const num = '2245047' // 2
const num = '2908305' // 3
// const num = '10' // 1

console.log(minimumOperations(num))
