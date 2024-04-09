/*
题目描述
有一组区间[a0，b0]，[a1，b1]，…（a，b表示起点，终点），区间有可能重叠、相邻，重叠或相邻则可以合并为更大的区间；

给定一组连接器[x1，x2，x3，…]（x表示连接器的最大可连接长度，即x>=gap），可用于将分离的区间连接起来，但两个分离区间之间只能使用1个连接器；

请编程实现使用连接器后，最少的区间数结果。

区间数量<10000，a,b均 <=10000
连接器梳理<10000；x <= 10000

输入描述
区间组：[1,10],[15,20],[18,30],[33，40]
连接器组：[5,4,3,2]

输出描述
1

说明：

合并后：[1,10],[15,30],[33,40]，使用5, 3两个连接器连接后只剩下 [1, 40]。 
 */

function getResult(ranges, connects) {
  ranges.sort((a, b) => a[0] - b[0])

  const mergeRanges = [ranges.shift()]
  const diffs = []

  for (let range of ranges) {
    const [s1, e1] = mergeRanges.at(-1)
    const [s2, e2] = range

    if (s2 <= e1) {
      mergeRanges.pop()
      mergeRanges.push([s1, Math.max(e1, e2)])
    } else {
      diffs.push(s2 - e1)
      mergeRanges.push(range)
    }
  }

  diffs.sort((a, b) => b - a)
  connects.sort((a, b) => b - a)

  while (connects.length && diffs.length) {
    if (connects.pop() >= diffs.at(-1)) {
      diffs.pop()
    }
  }

  return diffs.length + 1
}

function getRes(ranges, connects) {
  ranges.sort((a, b) => a[0] - b[0])
  connects.sort((a, b) => a - b)
  const arr = []
  for (let i = 1; i < ranges.length; i++) {
    const [s1, e1] = ranges[i - 1]
    const [s2, e2] = ranges[i]
    if (s2 > e1) {
      arr.push(s2 - e1)
    }
  }
  console.log(arr)
  connects.sort((a, b) => b - a)
  arr.sort((a, b) => b - a)
  while (connects.length && arr.length) {
    if (connects.pop() >= arr[arr.length - 1]) {
      arr.pop()
    }
  }
  return arr.length + 1
}

// const ranges = [
//   [1, 10],
//   [15, 20],
//   [18, 30],
//   [33, 40]
// ]
// const connects = [5, 4, 3, 2] // 1
const ranges = [
  [1, 2],
  [4, 5],
  [7, 10],
  [15, 20],
  [30, 100]
]
const connects = [5, 4, 3, 2, 1] // 2
console.log(getRes(ranges, connects))
