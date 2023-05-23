/**
 * 受标签影响的最大值
 * https://leetcode.cn/problems/largest-values-from-labels/
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} numWanted
 * @param {number} useLimit
 * @return {number}
 */

var largestValsFromLabels = function (values, labels, numWanted, useLimit) {
  let res = 0
  let hasSelectedNum = 0
  const map = new Map()
  const arr = values.map((v, i) => [v, labels[i]]).sort((a, b) => b[0] - a[0])
  console.log(arr)
  arr.forEach(([v, l]) => {
    if (!map.has(l)) {
      map.set(l, 0)
    }
    if (hasSelectedNum < numWanted && map.get(l) < useLimit) {
      res += v
      hasSelectedNum++
      map.set(l, map.get(l) + 1)
    }
  })
  return res
}

const values = [9, 8, 8, 7, 6],
  labels = [0, 0, 0, 1, 1],
  numWanted = 3,
  useLimit = 1

console.log(largestValsFromLabels(values, labels, numWanted, useLimit))
