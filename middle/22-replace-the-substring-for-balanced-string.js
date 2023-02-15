/**
 * 替换子串得到平衡字符串
 * https://leetcode.cn/problems/replace-the-substring-for-balanced-string/
 * @param {string} s
 * @return {number}
 */

var balancedString = function (s) {
	//核心思路就是找多余的字母，字母数目超出平均值的就是多余字母
	let initial = { Q: 0, W: 0, E: 0, R: 0 }
	for (const char of s) {
		initial[char]++
	}
	console.log(initial)
	let count = 0
	const aver = s.length / 4
	console.log('aver', aver)
	//计算count，即多余的字母
	for (const item in initial) {
		if (initial[item] > aver) {
			initial[item] -= aver
			count += initial[item]
		} else {
			initial[item] = 0
		}
	}
	console.log('init', s, initial)
	if (count === 0) {
		return 0
	}
	let l = 0,
		r = 0
	let res = Infinity
	while (r < s.length) {
		//如果initial的该字母大于0，说明是多余字母，count--
		if (initial[s[r]] > 0) {
			count--
		}
		initial[s[r]]--
		console.log(initial, 'count:', count)
		//说明找到了所有的多余字母
		if (count === 0) {
			//l左移，先把正常字母去掉
			while (initial[s[l]] < 0) {
				initial[s[l]]++
				l++
			}
			//比较最小值
			res = Math.min(res, r - l + 1)
			console.log('res', res, JSON.stringify(initial))
			//破坏平衡，关键，l右移保证count又会大于0（因为上面l右移到 恰好满足这个字母等于0的位置）
			//无论是多余的字母，还是正常字母，都只能移到到initial[character]===0的位置来确保夹在l和r里面的区间能最少覆盖所有多余字母
			initial[s[l]]++
			l++
			count++
			console.log(
				'final',
				JSON.stringify(initial),
				'left',
				l,
				'right',
				r,
				'count',
				count
			)
		}
		//正常的右移，1.写for循环，2.写r<s.length都行
		r++
	}
	return res
}
const s = 'WEQEREEE'
console.log(balancedString(s))
