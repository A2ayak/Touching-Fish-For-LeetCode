/**
 * 检查相同字母间的距离
 * https://leetcode.cn/problems/check-distances-between-same-letters/
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 **/

var checkDistances = function (s, distance) {
	const map = new Map()
	for (let i = 0; i < s.length; i++) {
		if (!map.has(s[i])) {
			map.set(s[i], i + 1)
			continue
		}
		if (i - map.get(s[i]) !== distance[s[i].charCodeAt() - 97]) {
			return false
		}
	}
	return true
}

const s = 'abaccb',
	distance = [
		1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
	]
// const s = 'aa',
// 	distance = [
// 		1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
// 	]

console.log(checkDistances(s, distance))
