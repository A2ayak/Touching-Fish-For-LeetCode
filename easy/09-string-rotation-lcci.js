/**
 * 字符串轮转
 * https://leetcode.cn/problems/string-rotation-lcci/
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var isFlipedString = function (s1, s2) {
  // 1、字串包含方法(best)
  return s1.length === s2.length && (s1 + s1).indexOf(s2) !== -1
  // 2、按题意移动字符串方法(bad)
  // if (!s1 && !s2) return true
  // if (s1.length !== s2.length) return false
  // const s1Arr = s1.split(",")
  // const s2Arr = s2.split(",")
  // for (let i = 0; i < s2Arr.length; i++) {
  //   s2Arr.unshift(s2Arr.pop())
  //   if (s2Arr.join("") === s1) return true
  // }
  // return false
}
