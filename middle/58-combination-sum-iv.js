/**
 * 从双倍数组中还原原数组
 * https://leetcode.cn/problems/combination-sum-iv/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var combinationSum4 = function (nums, target) {
  const dp = Array(target + 1).fill(0)
  dp[0] = 1

  // 动态规划求解
  for (let i = 1; i <= target; ++i) {
    // 从 1 到 target 遍历所有可能的目标值
    debugger
    for (const x of nums) {
      // 遍历候选数组 nums
      if (i >= x) {
        // 如果当前目标值大于等于 x，说明可以选择该数
        // dp[i] 表示当前目标值 i 的组合方式数量，+= dp[i - x] 表示加上选择了 x 后的组合方式数量
        dp[i] += dp[i - x]
      }
    }
  }

  // 返回目标值为 target 时的组合方式数量
  return dp[target]
}

const nums = [1, 2, 3],
  target = 4 // 7

console.log(combinationSum4(nums, target))
