/**
 * 组合总和
 * https://leetcode.cn/problems/combination-sum/
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum = function (candidates, target) {
	const res = []
	const dfs = (start, temp, sum) => {
		if (sum >= target) {
			if (sum === target) res.push([...temp])
			return
		}
		for (let i = start; i < candidates.length; i++) {
			temp.push(candidates[i])
			dfs(i, temp, sum + candidates[i])
			temp.pop()
		}
	}
	dfs(0, [], 0)
	return res
}

const candidates = [2, 3, 6, 7]
const target = 7

console.log(combinationSum(candidates, target))
