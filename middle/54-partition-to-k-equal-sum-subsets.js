/**
 * 划分为k个相等的子集
 * https://leetcode.cn/problems/partition-to-k-equal-sum-subsets/
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
  // 分组数大于数组长度 为false
  if (k > nums.length) return false
  // 只分一组 则必定可以
  if (k == 1) return true
  // 分组数和数组长度相等 则数组每一项都相等
  if (k == nums.length) {
    let f = nums[0]
    return nums.every((i) => i == f)
  }

  // 求和
  let sum = nums.reduce((a, b) => a + b)
  // 获取平均数average
  let ave = sum / k
  // 排序
  nums.sort((a, b) => b - a)

  // 数组任意一项大于平均数 返回false
  if (nums.some((i) => i > ave)) return false

  // 创建一个数组res存放每个分配的组合的和
  let res = new Array(k).fill(0)

  return divide(nums, ave, 0, k, res)
}

function divide(nums, average, i, k, res) {
  // 如果对nums的遍历走完最后一个数 则说明所有的数都组合凑成平均数 返回true
  if (i == nums.length) return true
  // 遍历存放分组的数组
  for (let j = 0; j < k; j++) {
    // 如果该分组的和小于平均数 且 【目前该分组的和】加上【将加进分组的数】的【和】仍小于等于平均数
    if (res[j] < average && nums[i] + res[j] <= average) {
      // 将该数加进该分组
      res[j] += nums[i]
      // 递归判断【数组】是否还有【数】能与【该分组目前和】凑够【平均数】
      if (divide(nums, average, i + 1, k, res)) {
        // 能凑则返回true
        return true
      }
      // 否则将该数从该组合中移除
      res[j] -= nums[i]
    }
  }

//   // 无法凑够平均数 则返回false
//   return false
// }

// function canPartitionKSubsets(nums, k) {
//   const dfs = (s, p) => {
//     if (s === 0) {
//       return true
//     }
//     if (!dp[s]) {
//       return dp[s]
//     }
//     dp[s] = false
//     for (let i = 0; i < n; i++) {
//       if (nums[i] + p > per) {
//         break
//       }
//       if (((s >> i) & 1) != 0) {
//         if (dfs(s ^ (1 << i), (p + nums[i]) % per)) {
//           return true
//         }
//       }
//     }
//     return false
//   }
//   const all = nums.reduce((p, c) => p + c, 0)
//   if (all % k !== 0) {
//     return false
//   }
//   per = all / k
//   nums.sort((a, b) => a - b)
//   n = nums.length
//   if (nums[n - 1] > per) {
//     return false
//   }
//   dp = new Array(1 << n).fill(true)
//   return dfs((1 << n) - 1, 0)
// }

// var canPartitionKSubsets = function (nums, k) {
//   // 排除一些基本情况
//   // 题目给定 k <= len(nums) ，所以 k 大于 nums的长度，返回false
//   if (k > nums.length) return false
//   var sum = nums.reduce((pre, cur) => pre + cur, 0)
//   if (sum % k !== 0) return false

//   var used = 0 // 使用位图技巧
//   var target = sum / k
//   var memo = {}

//   return backtrack(k, 0, nums, 0, used, target, memo)
// }
// var backtrack = function (k, bucket, nums, numsIndex, used, target, memo) {
//   // 所有桶都用完了，说明nums一定用完了
//   if (k == 0) {
//     return true
//   }
//   // 当前桶装满了
//   if (bucket == target) {
//     // 让下一个桶从 nums[0] 开始选数字
//     var res = backtrack(k - 1, 0, nums, 0, used, target, memo)
//     // 记录下一个桶中的元素，并记录结果
//     memo[used] = res
//     return res
//   }

//   if (memo[used] !== undefined) {
//     return memo[used]
//   }

//   // 从nums[numsIndex]开始遍历
//   for (let i = numsIndex; i < nums.length; i++) {
//     // 判断nums[i]是否已被装入到其他桶中
//     if (((used >> i) & 1) == 1) {
//       // 已经装入其他桶中
//       continue
//     }

//     // 当前这个桶的元素和 加上 当前元素后结果是否比target大
//     if (nums[i] + bucket > target) {
//       // 比target大
//       continue
//     }

//     // 做选择
//     used |= 1 << i // 记录当前元素被选择，将第i位置设为1
//     bucket += nums[i]
//     // 递归穷举下一个数字是否装入当前桶
//     if (backtrack(k, bucket, nums, numsIndex + 1, used, target, memo)) {
//       return true
//     }

//     // 撤销选择
//     used ^= 1 << i // 将第 i 个位置设置为0
//     bucket -= nums[i]
//   }
//   return false
// }

// 法4
// var canPartitionKSubsets = function (nums, k) {
//   // 计算总和
//   const total = nums.reduce((a, b) => a + b)

//   // 如果不能均分，直接返回false
//   if (total % k) return false

//   // 计算每一份的大小
//   const mid = total / k

//   // 有多少个数字
//   const len = nums.length

//   /*
//    * 用k个容器来添加数字
//    * 添加的规则：当当前遍历的数字和容器的数字加起来比平均的数字小，当前遍历的数字就可以添加到该容器中
//    * 退出的规则：1.数字遍历完了，表示所有的数字都添加进去了，返回true；2.当前遍历的数字没有添加进任何一个容器，返回false
//    */

//   const arr = new Array(k).fill(0)

//   /*
//    * dps函数，i代表当前遍历的数字下标，arr代表遍历到该下标时的容器现状
//    */

//   function dps(i, arr) {
//     debugger
//     if (i >= len) return true
//     const num = nums[i]
//     let res = false
//     // 缓存，缓存该环节已经添加过的相同的容器，比如该环节有3个容器的数字之和1，我们已经用过其中一个容器了，再继续用其他的容器，造成的结果和和第一个结果相同，会造成无用的重复递归
//     const set = new Set()
//     for (let j = 0; j < k; j++) {
//       const count = arr[j]
//       if (set.has(count) || count + num > mid || res) continue
//       set.add(count)
//       arr[j] += num
//       // 添加完，继续添加下一个数字
//       res = dps(i + 1, arr.slice())

//       // 将该容器复原，继续寻找下一个可以添加的容器
//       arr[j] -= num
//     }
//     return res
//   }
//   return dps(0, arr)
// }

const nums = [4, 3, 2, 3, 5, 2, 1],
  k = 4

console.log(canPartitionKSubsets(nums, k))

// 说明：res数组先形成 [5, 4, 3, 3]，再不断通过i++递归，重置j为0后，res[j] + nums[i]
