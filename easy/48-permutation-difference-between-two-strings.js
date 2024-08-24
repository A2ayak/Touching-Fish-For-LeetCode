/**
 * 两个字符串的排列差
 * https://leetcode.cn/problems/permutation-difference-between-two-strings
 * @param {string} s
 * @param {string} t
 * @return {number}
 **/

var findPermutationDifference = function (s, t) {
  // let obj = {}
  // for (let i = 0; i < s.length; i++) {
  //     obj[s[i]] = [i]
  // }
  // for (let i = 0; i < t.length; i++) {
  //     obj[t[i]].push(i)
  // }
  // return Object.values(obj).reduce((p, [a, b]) => p + Math.abs(a - b), 0)

  // 2
  let obj = {}
  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = i
  }
  let sum = 0
  for (let i = 0; i < t.length; i++) {
    sum += Math.abs(i - obj[t[i]])
  }
  return sum
}

const s = 'abc',
  t = 'bac'
console.log(findPermutationDifference(s, t))
