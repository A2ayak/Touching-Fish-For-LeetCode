/**
 * 找出出现至少三次的最长特殊子字符串 II
 * https://leetcode.cn/problems/find-longest-special-substring-that-occurs-thrice-ii
 * @param {string} s
 * @return {number}
 */

var maximumLength = function (s) {
  const len = s.length
  const group = new Array(26).fill(0).map(() => [])
  let count = 0
  let res = 0
  for (let i = 0; i < len; i++) {
    count++
    let c = s[i]
    if (c !== s[i + 1] || i + 1 === len) {
      group[s.charCodeAt(i) - 97].push(count)
      count = 0
    }
  }
  for (let arr of group) {
    if (arr.length === 0) continue
    arr.sort((a, b) => b - a)
    arr.push(0, 0)
    res = Math.max(res, arr[0] - 2, Math.min(arr[0] - 1, arr[1]), arr[2])
  }
  return res ? res : -1
}

// const s = 'aaaa'
const s = 'abcdef'

console.log(maximumLength(s))
