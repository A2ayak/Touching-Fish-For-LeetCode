/**
 * 可被三整除的最大和
 * https://leetcode.cn/problems/greatest-sum-divisible-by-three/
 * @param {number[]} nums
 * @return {number}
 */

var maxSumDivThree = function (nums) {
  // let state = [0, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]
  // for (const num of nums) {
  //   const mod = num % 3
  //   if (mod === 0) {
  //     state = [state[0] + num, state[1] + num, state[2] + num]
  //   } else if (mod === 1) {
  //     const a = Math.max(state[2] + num, state[0])
  //     const b = Math.max(state[0] + num, state[1])
  //     const c = Math.max(state[1] + num, state[2])
  //     state = [a, b, c]
  //   } else {
  //     const a = Math.max(state[1] + num, state[0])
  //     const b = Math.max(state[2] + num, state[1])
  //     const c = Math.max(state[0] + num, state[2])
  //     state = [a, b, c]
  //   }
  // }
  // return state[0]

  // 法二：性能最优
  let sum = nums.reduce((pre, cur) => pre + cur, 0)
  if (sum % 3 === 0) {
    return sum
  } else {
    const arr1 = nums.filter((i) => i % 3 === 1).sort((a, b) => a - b)
    const arr2 = nums.filter((i) => i % 3 === 2).sort((a, b) => a - b)
    if (sum % 3 === 1) {
      sum = Math.max(sum - arr1[0] || 0, sum - arr2[0] - arr2[1] || 0, 0)
    } else {
      sum = Math.max(sum - arr2[0] || 0, sum - arr1[0] - arr1[1] || 0, 0)
    }
  }
  return sum
}

// const nums = [1, 2, 3, 4, 4] // 选出数字 1, 3, 4 以及 4，它们的和是 12（可被 3 整除的最大和）。
// const nums = [3, 6, 5, 1, 8] // 18
const nums = [1, 1, 3] // 3

console.log(maxSumDivThree(nums))
