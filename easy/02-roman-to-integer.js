/**
 * https://leetcode-cn.com/problems/roman-to-integer/
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let result = 0
  for(let i = 0; i < s.length; i++) {
    let cur = romanMap[s[i]], next = romanMap[s[i + 1]]
    if (cur < next) {
      result -= cur
    } else {
      result += cur
    }
  }
  return result
}
