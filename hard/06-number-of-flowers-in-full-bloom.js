/**
 * 花期内花的数目
 * https://leetcode.cn/problems/number-of-flowers-in-full-bloom
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 */

var fullBloomFlowers = function (flowers, people) {
  // 一、超时算法
  // return people.map((p) => {
  //   return flowers.reduce((pre, cur) => {
  //     return pre + (p >= cur[0] && p <= cur[cur.length - 1] ? 1 : 0)
  //   }, 0)
  // })

  // 二、二分查找
  function binarySearch(arr, target) {
    let res = arr.length
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
      debugger
      const mid = (right + left) >> 1
      if (arr[mid] >= target) {
        res = mid
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    return res
  }
  const openTime = flowers.map((i) => i[0]).sort((a, b) => a - b)
  const closeTime = flowers.map((i) => i[1]).sort((a, b) => a - b)
  // console.log(openTime, closeTime)
  // return people.map((p) => {
  //   console.log(p)
  //   return binarySearch(openTime, p) - binarySearch(closeTime, p)
  // })
  const m = people.length
  const ans = new Array(m).fill(0)
  for (let i = 0; i < m; i++) {
    const p = people[i]
    // 此处p + 1是因为数组下标从0开始，实际mid为1时应该返回2
    ans[i] = binarySearch(openTime, p + 1) - binarySearch(closeTime, p)
  }
  return ans
}

let flowers = [
    [1, 6],
    [3, 7],
    [9, 12],
    [4, 13]
  ],
  people = [2, 3, 7, 11] // [1,2,2,2]
// let flowers = [
//     [1, 10],
//     [3, 3]
//   ],
//   people = [3, 3, 2] // [ 2, 2, 1 ]

console.log(fullBloomFlowers(flowers, people))
