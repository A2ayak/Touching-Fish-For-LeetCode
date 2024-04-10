/* 
题目描述
给定一个数组nums，可以将元素分为若干个组，使得每组和相等，求出满足条件的所有分组中，最大的平分组个数。

输入描述
第一行输入 m
接着输入m个数，表示此数组
数据范围:1<=M<=50, 1<=nums[i]<=50

输出描述
最大的平分组数个数

用例
*/

function getResutlt(m, arr) {
  const sum = arr.sort((a, b) => b - a).reduce((p, c) => p + c)
  let maxCount = m
  while (maxCount >= 1) {
    if (canPartition([...arr], sum, maxCount)) {
      return maxCount
    } else {
      maxCount--
    }
  }
}

function canPartition(arr, sum, maxCount) {
  if (sum % maxCount) return false
  const subSum = sum / maxCount
  if (subSum < arr[0]) return false
  while (arr[0] === subSum) {
    arr.shift()
    maxCount--
  }

  const buckets = new Array(maxCount).fill(0)
  return partition(0, arr, subSum, buckets)
}

function partition(start, arr, subSum, buckets) {
  if (start === arr.length) return true
  const select = arr[start]
  for (let i = 0; i < buckets.length; i++) {
    if (i > 0 && buckets[i] === buckets[i - 1]) continue
    if (buckets[i] + select <= subSum) {
      buckets[i] += select
      if (partition(start + 1, arr, subSum, buckets)) return true
      buckets[i] -= select
    }
  }

  return false
}
