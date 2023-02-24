/**
 * 使数组中所有元素都等于零
 * https://leetcode.cn/problems/make-array-zero-by-subtracting-equal-amounts/
 * @param {number[]} nums
 * @return {number}
 **/

var minimumOperations = function (nums) {
	return new Set(nums.filter(Boolean)).size
}

const nums = [1, 5, 0, 3, 5] // 返回3
console.log(minimumOperations(nums))
