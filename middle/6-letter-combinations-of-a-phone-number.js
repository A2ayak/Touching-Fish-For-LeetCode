/**
 * 电话号码的字母组合
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 * @param {string} digits
 * @return {string[]}
 *
 * 递归、深度优先DFS
 */
var letterCombinations = function(digits) {
  let res = []
  if (!digits.length) return res
  let phoneMap = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  }
  function combination(restDigit, combinedString) {
    if (!restDigit.length){
      res.push(combinedString)
    }
    else {
      const s = phoneMap[restDigit.substr(0, 1)]
      for (let i = 0; i < s.length; i++) {
        combination(restDigit.slice(1), combinedString + s[i])
      }
    }
  }
  combination(digits, '')
  return res
};
