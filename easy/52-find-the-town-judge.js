/**
 * 找到小镇的法官
 * https://leetcode.cn/problems/find-the-town-judge
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 **/

var findJudge = function (n, trust) {
  const counts = new Array(n + 1).fill(0)
  const outs = new Array(n + 1).fill(0)
  for (const [num, trustTarget] of trust) {
    counts[trustTarget]++
    outs[num]++
  }
  for (let i = 1; i <= n; i++) {
    if (counts[i] === n - 1 && outs[i] === 0) {
      return i
    }
  }
  return -1
}

const n = 3,
  trust = [
    [1, 3],
    [2, 3]
  ] // 2
console.log(findJudge(n, trust))
