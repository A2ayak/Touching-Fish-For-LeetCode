/**
 * 反转字符串中的元音字母
 * https://leetcode.cn/problems/reverse-vowels-of-a-string
 * @param {string} s
 * @return {string}
 **/

var reverseVowels = function (s) {
  const arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  let l = 0,
    r = s.length - 1
  const newS = s.split('')
  while (l < r) {
    debugger
    if (arr.includes(s[l]) && arr.includes(s[r])) {
      ;[newS[l], newS[r]] = [newS[r], newS[l]]
      l++
      r--
    }
    if (!arr.includes(s[l])) {
      l++
    }
    if (!arr.includes(s[r])) {
      r--
    }
  }
  return newS.join('')
}
const s = 'hello' // "holle"

console.log(reverseVowels(s))
