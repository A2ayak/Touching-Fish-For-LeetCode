/**
 * @name 最长回文子串
 * @url https://leetcode-cn.com/problems/longest-palindromic-substring/
 * @tags 字符串、动态规划、中心扩散
 *
 *
 * @description 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if(s.length < 2) return s
  let res = ''
  function helper(l, r) {
    while(l >= 0 && r < s.length && s[l] === s[r]) {
      l--
      r++
    }
    if (r - l - 1 > res.length) {
      res = s.slice(l + 1, r)
    }
  }
  for(let i = 0; i < s.length; i++) {
    helper(i, i)
    helper(i, i + 1)
  }
  return res
};
