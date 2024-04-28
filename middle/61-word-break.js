/**
 * 单词拆分
 * https://leetcode.cn/problems/word-break/
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

var wordBreak = function (s, wordDict) {
  let len = s.length
  const dp = new Array(s.length + 1).fill(false)
  dp[0] = true
  for (let i = 1; i <= len; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.includes(s.slice(j, i))) {
        dp[i] = true
      }
    }
  }
  return dp[len]
}

const s = 'applepenapple',
  wordDict = ['apple', 'pen'] // true

console.log(wordBreak(s, wordDict))
