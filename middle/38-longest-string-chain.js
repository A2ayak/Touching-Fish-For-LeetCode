/**
 * 最长字符串链
 * https://leetcode.cn/problems/longest-string-chain/
 * @param {string[]} words
 * @return {number}
 */

var longestStrChain = function (words) {
  function insertable(str1, str2) {
    if (str1.length + 1 !== str2.length) return false
    let l = 0,
      r = 0
    while (l < str1.length && r < str2.length) {
      if (str1[l] === str2[r]) {
        l++
      }
      r++
    }
    return str1.length === l
  }
  const dp = new Array(words.length).fill(1)
  words.sort((a, b) => a.length - b.length)
  for (let i = 1; i < words.length; i++) {
    for (let j = 0; j < i; j++) {
      if (insertable(words[j], words[i])) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  return Math.max(...dp)
}

const words = ['a', 'b', 'ba', 'bca', 'bda', 'bdca']

console.log(longestStrChain(words))
