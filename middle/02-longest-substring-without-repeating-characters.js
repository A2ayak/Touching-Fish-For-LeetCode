/**
 * @name 无重复字符的最长子串
 * @url https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 * @tags 哈希表、双指针、字符串、Sliding Window
 * @description 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 **/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0
  let minIndex = 0
  for (let i = 0; i < s.length; i++) {
    let k = s.indexOf(s[i], minIndex)
    if (k < i) {
      minIndex = k + 1
    } else {
      max = Math.max(max, i - minIndex + 1)
    }
  }
  return max
}

var lengthOfLongestSubstring1 = function (s) {
  let res = 0
  let arr = []

  for (let c of s) {
    while (arr.includes(c)) {
      arr.shift()
    }
    arr.push(c)
    res = Math.max(res, arr.length)
  }

  return res
}

console.log(lengthOfLongestSubstring1('abcabcbc'))
