/**
 * 统计字典序元音字符串的数目
 * https://leetcode.cn/problems/count-sorted-vowel-strings/
 * @param {number} n
 * @return {number}
 */

var countVowelStrings = function (n) {
	// 法一
	// 将 n 个小球放到 m 个盒子里，盒子不为空：C(n - 1, m - 1)；
	// 将 n 个小球放到 m 个盒子里，盒子可以空：C(n + m - 1, m - 1)；
	// C(n + m - 1, m - 1) => 本题m = 5
	return ((n + 4) * (n + 3) * (n + 2) * (n + 1)) / (4 * 3 * 2 * 1)
	/*  */
	// 法二
	// let a = 0,
	// 	e = 0,
	// 	i = 0,
	// 	o = 0,
	// 	u = 0
	// for (let j = 0; j < n; j++) {
	// 	if (j === 0) {
	// 		a = 1
	// 		e = 1
	// 		i = 1
	// 		o = 1
	// 		u = 1
	// 	} else {
	// 		a = a + e + i + o + u
	// 		e = e + i + o + u
	// 		i = i + o + u
	// 		o = o + u
	// 		u = u
	// 	}
	// }
	// return a + e + i + o + u
	/*  */
	// a = e = i = o = u = 1
	// for (let j = 1; j < n; j++) {
	// 	a = a + e + i + o + u
	// 	e = e + i + o + u
	// 	i = i + o + u
	// 	o = o + u
	// }
	// return a + e + i + o + u
}
// const n = 33 // 66045
const n = 2 // 15

console.log(countVowelStrings(n))
