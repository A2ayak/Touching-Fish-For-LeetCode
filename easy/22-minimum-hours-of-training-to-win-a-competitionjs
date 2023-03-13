/**
 * 赢得比赛需要的最少训练时长
 * https://leetcode.cn/problems/minimum-hours-of-training-to-win-a-competition/
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 **/

var minNumberOfHours = function (
	initialEnergy,
	initialExperience,
	energy,
	experience
) {
	// 一、模拟算法
	// let res = 0
	// for (let i = 0; i < energy.length; i++) {
	// 	let plus = 0
	// 	let des = 0
	// 	if (initialEnergy <= energy[i]) {
	// 		plus = energy[i] - initialEnergy + 1
	// 	}
	// 	if (initialExperience <= experience[i]) {
	// 		des = experience[i] - initialExperience + 1
	// 	}
	// 	initialEnergy = initialEnergy - energy[i] + plus
	// 	initialExperience = initialExperience + experience[i] + des
	// 	console.log(i, plus, des)
	// 	res += plus && des ? plus + des : Math.max(plus, des)
	// }
	// return res

	// 二、优化，energy训练是必须增加的，关键是经验值什么时候增加到最大
	let allEnergy = energy.reduce((pre, cur) => pre + cur, 0)
	let res = allEnergy < initialEnergy ? 0 : allEnergy - initialEnergy + 1
	const expMax = Math.max(...experience)
	for (let i = 0; i < experience.length; i++) {
		if (initialExperience > expMax) {
			return res
		}
		if (initialExperience <= experience[i]) {
			res += experience[i] - initialExperience + 1
			initialExperience = experience[i] + 1
		}
		initialExperience += experience[i]
	}
	return res
}

// const initialEnergy = 5,
// 	initialExperience = 3,
// 	energy = [1, 4, 3, 2],
// 	experience = [2, 6, 3, 1] // res: 8
const initialEnergy = 1,
	initialExperience = 1,
	energy = [1, 1, 1, 1],
	experience = [1, 1, 1, 50] // res: 51

console.log(
	minNumberOfHours(initialEnergy, initialExperience, energy, experience)
)
