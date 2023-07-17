/**
 * 字符串相加
 * https://leetcode.cn/problems/add-strings/
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 **/

var addStrings = function (num1, num2) {
  let res = ''
  let carry = 0
  let n1 = num1.length - 1
  let n2 = num2.length - 1
  debugger
  while (n1 >= 0 || n2 >= 0) {
    const sum = (Number(num1[n1]) || 0) + (Number(num2[n2]) || 0) + carry
    carry = sum >= 10 ? 1 : 0
    res = (sum % 10) + res
    n1--
    n2--
  }
  if (carry === 1) res = '1' + res
  return res
}

const num1 = '456',
  num2 = '77' // '533'

console.log(addStrings(num1, num2))
