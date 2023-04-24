/**
 * 按字典序排在最后的子串
 * https://leetcode.cn/problems/last-substring-in-lexicographical-order/
 * @param {string} text
 * @return {number}
 */

var lastSubstring = function (s) {
  // 法一(数组):
  // // 先理解字典序 'fff' < 'g'，先找出最大的开头字母，再找以此字母开头的最长子串
  // const arr = Array(26).fill(0)
  // for (const c of s) {
  //   arr[c.charCodeAt() - 97] = 1
  // }
  // let maxChar = ''
  // // 先找出最大的开头字母
  // for (let i = arr.length - 1; i >= 0; i--) {
  //   if (arr[i] > 0) {
  //     maxChar = String.fromCharCode(i + 97)
  //     break
  //   }
  // }
  // // 找以此字母开头的最长子串
  // let index = -1
  // res = ''
  // while ((index = s.indexOf(maxChar, index + 1)) > -1) {
  //   if (s.substr(index) > res) {
  //     res = s.substr(index)
  //   }
  // }
  // return res

  // 法二(双指针-性能更优)：
  let left = 0
  let right = left + 1
  let step = 0
  debugger
  while (right + step < s.length) {
    if (s[left + step] < s[right + step]) {
      left = Math.max(left + step + 1, right) // 精华，解决 left = right 后续重复比较
      right = left + 1
      step = 0
    } else if (s[left + step] === s[right + step]) {
      step++
    } else {
      right += step + 1
      step = 0
    }
  }
  return s.slice(left)
}

// const s = 'leetcode' // tcode
// const s = 'abab' // bab
const s = 'aaaaaab' // 'b'
console.log(lastSubstring(s))
