/**
 * 删除字符串两端相同字符后的最短长度
 * https://leetcode.cn/problems/minimum-length-of-string-after-deleting-similar-ends/
 * @param {string} s
 * @return {number}
 *
 * tips: 双指针
 * 执行用时：68 ms, 在所有 JavaScript 提交中击败了68.18%的用户
 * 内存消耗：45 MB, 在所有 JavaScript 提交中击败了50.00%的用户
 */

var minimumLength = function (s) {
	let head = 0
	let end = s.length - 1
	while (s[head] === s[end] && end > head) {
		if (end - head === 1) return 0
		if (s[head + 1] === s[head]) {
			head++
		} else if (s[end - 1] === s[end]) {
			end--
		} else {
			head++
			end--
		}
	}
	return end - head + 1
}

let testStr = 'aabccabba'
console.log(minimumLength(testStr))
