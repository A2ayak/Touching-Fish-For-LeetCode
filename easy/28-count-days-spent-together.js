/**
 * 统计共同度过的日子数
 * https://leetcode.cn/problems/count-days-spent-together/
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 **/

var countDaysTogether = function (
	arriveAlice,
	leaveAlice,
	arriveBob,
	leaveBob
) {
	const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
	function calcYearDaySeq(dateObj) {
		return (
			Array(dateObj.month - 1)
				.fill(0)
				.reduce((pre, cur, idx) => {
					return pre + monthDays[idx]
				}, 0) + dateObj.day
		)
	}
	function generateDateObj(dateStr) {
		const dateArr = dateStr.split('-')
		return { month: Number(dateArr[0]), day: Number(dateArr[1]) }
	}
	const aA = calcYearDaySeq(generateDateObj(arriveAlice))
	const lA = calcYearDaySeq(generateDateObj(leaveAlice))
	const aB = calcYearDaySeq(generateDateObj(arriveBob))
	const lB = calcYearDaySeq(generateDateObj(leaveBob))

	return Math.max(0, Math.min(lA, lB) - Math.max(aA, aB) + 1)
}

const arriveAlice = '08-15',
	leaveAlice = '08-18',
	arriveBob = '08-16',
	leaveBob = '08-19' // 3
// const arriveAlice = '10-01',
// 	leaveAlice = '10-31',
// 	arriveBob = '11-01',
// 	leaveBob = '12-31' // 0

console.log(countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob))
