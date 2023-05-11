/**
 * 子串能表示从 1 到 N 数字的二进制串
 * https://leetcode.cn/problems/binary-string-with-substrings-representing-1-to-n/
 * @param {string} s
 * @param {number} n
 * @return {boolean}
 * @return {number}
 */

var queryString = function (s, n) {
  let i = 0
  while (++i <= n) {
    if (s.indexOf(i.toString(2)) === -1) return false
  }
  return true
}

const s = '0110',
  n = 4

console.log(queryString(s, n))
