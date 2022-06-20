/**
 * 括号生成
 * https://leetcode-cn.com/problems/generate-parentheses/
 * @param {number} n
 * @return {string[]}
 * tags：回溯、递归，右括号比左括号多时才能+
 */
var generateParenthesis = function(n) {
  // 逆向
  let res = []
  if (n <= 0) return res
  function dfs(leftNum, rightNum, string) {
    if (string.length === n * 2) {
      res.push(string)
      return
    }
    if (leftNum > 0) dfs(leftNum - 1, rightNum, string + '(')
    if (leftNum < rightNum) dfs(leftNum, rightNum - 1, string + ')')
  }
  dfs(n, n, '')
  // 正向
  // function dfsForward(l, r, string) {
  //   if (string.length === n * 2) {
  //     res.push(string)
  //     return
  //   }
  //   if (l < n) dfsForward(l + 1, r, string + '(')
  //   if (r < l) dfsForward(l, r + 1, string + ')')
  // }
  // dfsForward(0, 0, '')
  return res
};

console.log(generateParenthesis(3))
