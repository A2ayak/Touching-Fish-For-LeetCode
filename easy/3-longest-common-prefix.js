/**
 * 最长公共前缀
 * https://leetcode-cn.com/problems/longest-common-prefix/
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  // 解一
  // let res = ''
  // if (strs.length < 1) return ''
  // if (strs.length === 1) return strs[0]
  // res = strs[0]
  // for (let i = 1; i < strs.length; i++) {
  //   let j = 0
  //   for (; j < res.length && j < strs[i].length; j++) {
  //     if (res[j] !== strs[i][j]) break
  //   }
  //   res = res.substr(0, j)
  // }
  // 解二
  // let res = ''
  // if (strs.length < 1) return ''
  // if (strs.length === 1) return strs[0]
  // strs.sort()
  // let minStr = strs[0]
  // for (const ch of minStr) {
  //   if (!strs.every(item => item.startsWith(res + ch))) break
  //   res += ch
  // }
  // 解三（性能最优）
  if (!strs.length) return ''
  let res = strs[0]
  for (let i = 1; i < strs.length; i++) {
    while(strs[i].indexOf(res) !== 0) {
      res = res.substr(0, res.length - 1)
    }
  }
  return res
};
