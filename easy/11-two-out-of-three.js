/**
 * 至少在两个数组中出现的值
 * https://leetcode.cn/problems/two-out-of-three/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 **/

var twoOutOfThree = function (nums1, nums2, nums3) {
	let obj = {}
	let res = []
	function filterRes(arr) {
		let roundCount = {} // 每轮数组遍历的记录，用于清除同一数组中的相同元素
		arr.map((i) => {
			if (!obj[i]) {
				obj[i] = 1
				roundCount[i] = true
			} else {
				if (!roundCount[i]) obj[i]++ // 非同一数组的元素才+1
				if (obj[i] > 1 && !res.includes(i)) {
					res.push(i)
				}
			}
		})
	}
	filterRes(nums1)
	filterRes(nums2)
	filterRes(nums3)
	return res
}

console.log(twoOutOfThree([1, 2, 2], [4, 3, 3], [5]))
