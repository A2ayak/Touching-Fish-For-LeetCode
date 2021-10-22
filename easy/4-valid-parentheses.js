/**
 * 有效的括号
 * https://leetcode-cn.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length % 2 !== 0) return false
  const stack = []
  const map = new Map()
  map.set('(', ')')
  map.set('{', '}')
  map.set('[', ']')
  for(let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      stack.push(s[i])
      continue
    }
    if (s[i] !== map.get(stack.pop())) {
      return false
    }
  }
  return stack.length === 0
};

console.log(isValid('()[]{}'))
