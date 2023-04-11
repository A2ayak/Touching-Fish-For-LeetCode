/**
 * 困于环中的机器人
 * https://leetcode.cn/problems/robot-bounded-in-circle/
 * @param {string} instructions
 * @return {boolean}
 */

var isRobotBounded = function (instructions) {
	const distanceArr = new Array(4).fill(0)
	// direct: 0北 1东 2南 3西
	let direct = 0
	for (const i of instructions) {
		if (i === 'L') {
			direct = (direct - 1 + 4) % 4
			continue
		}
		if (i === 'R') {
			direct = (direct + 1 + 4) % 4
			continue
		}
		distanceArr[direct]++
	}
	// 机器人不陷入循环的条件是 朝北 且 不在原点
	return !(
		direct === 0 &&
		(distanceArr[0] !== distanceArr[2] || distanceArr[1] !== distanceArr[3])
	)
}

const instructions = 'GG'
// const instructions = 'GL'

console.log(isRobotBounded(instructions))
