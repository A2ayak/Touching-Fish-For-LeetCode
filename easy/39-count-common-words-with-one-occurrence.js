/**
 * 统计出现过一次的公共字符串
 * https://leetcode.cn/problems/count-common-words-with-one-occurrence/
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 **/

var countWords = function (words1, words2) {
  let res = 0
  const obj1 = {},
    obj2 = {}
  words1.map((i) => {
    if (!obj1[i]) obj1[i] = 1
    else obj1[i] += 2
  })
  words2.map((i) => {
    if (!obj2[i]) obj2[i] = 1
    else obj2[i] += 2
  })
  Object.keys(obj1).map((k) => {
    if (obj1[k] === 1 && obj2[k] === 1) {
      res++
    }
  })
  return res
}

const words1 = ['leetcode', 'is', 'amazing', 'as', 'is'],
  words2 = ['amazing', 'leetcode', 'is'] // 2

console.log('res', countWords(words1, words2))
