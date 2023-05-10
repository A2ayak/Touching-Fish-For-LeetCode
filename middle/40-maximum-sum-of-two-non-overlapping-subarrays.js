/**
 * 两个非重叠子数组的最大和
 * https://leetcode.cn/problems/maximum-sum-of-two-non-overlapping-subarrays/
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */

var maxSumTwoNoOverlap = function (nums, firstLen, secondLen) {
	let res = 0,
		n = nums.length
	let arr = Array(n + 1).fill(0)
	for (let i = 0; i < n; i++) {
		arr[i + 1] = arr[i] + nums[i]
	}
	for (let i = firstLen, t = 0; i + secondLen - 1 < n; i++) {
		t = Math.max(t, arr[i] - arr[i - firstLen])
		res = Math.max(res, t + arr[i + secondLen] - arr[i])
	}
	for (let i = secondLen, t = 0; i + firstLen - 1 < n; i++) {
		t = Math.max(t, arr[i] - arr[i - secondLen])
		res = Math.max(res, t + arr[i + firstLen] - arr[i])
	}
	return res
}

const nums = [0, 6, 5, 2, 2, 5, 1, 9, 4],
	firstLen = 1,
	secondLen = 2

console.log(maxSumTwoNoOverlap(nums, firstLen, secondLen))
