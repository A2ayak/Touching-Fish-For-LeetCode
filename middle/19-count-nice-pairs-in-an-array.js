/**
 * 统计一个数组中好对子的数目
 * https://leetcode.cn/problems/count-nice-pairs-in-an-array/
 * @param {number[]} nums
 * @return {number}
 */

var countNicePairs = function (nums) {
	const MOD = 1e9 + 7
	let res = 0
	const rev = (num) => num.toString().split('').reverse().join('')
	let arr = nums.map((i) => i - rev(i))
	console.log(arr)
	let map = {}
	for (const i of arr) {
		if (!map[i]) {
			map[i] = 1
		} else {
			map[i]++
		}
	}
	// for (let i = 0; i < nums.length - 1; i++) {
	// 	for (let j = i + 1; j < nums.length; j++) {
	// 		if (nums[i] - Number(rev(nums[i])) === nums[j] - Number(rev(nums[j]))) {
	// 			res++
	// 		}
	// 	}
	// }
	console.log(Object.values(map))
	Object.values(map).map((i) => {
		if (i > 1) {
			res += (i * (i - 1)) / 2
		}
	})
	return res % MOD
}

const nums = [42, 11, 1, 97]
// const nums = [13, 10, 35, 24, 76]
console.log(countNicePairs(nums))
