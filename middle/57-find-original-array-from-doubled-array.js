/**
 * 从双倍数组中还原原数组
 * https://leetcode.cn/problems/find-original-array-from-doubled-array/
 * @param {number[]} changed
 * @return {number[]}
 */

var findOriginalArray = function (changed) {
  if (changed.length % 2 !== 0) return []
  changed.sort((a, b) => a - b)
  const count = {}

  for (const num of changed) {
    count[num] = (count[num] || 0) + 1
  }
  const res = []
  for (const n of changed) {
    if (count[n] === 0) continue
    if (!count[n * 2]) return []
    count[n]--
    count[n * 2]--
    res.push(n)
  }
  return res
}

// const changed = [1, 3, 4, 2, 6, 8] // [1, 3, 4]
const changed = [0, 0, 0, 0] // [0, 0]
// const changed = [0, 3, 2, 4, 6, 0] // [0, 2, 3]
// const changed = [2, 1, 2, 4, 2, 4] // [1, 2, 2]

console.log(findOriginalArray(changed))
