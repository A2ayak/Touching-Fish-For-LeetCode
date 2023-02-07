/**
 * 警告一小时内使用相同员工卡大于等于三次的人
 * https://leetcode.cn/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */

var alertNames = function (keyName, keyTime) {
	// function transformToCompareTime(time) {
	// 	const splitTimeArr = time.split(':')
	// 	return 60 * splitTimeArr[0] + Number(splitTimeArr[1])
	// }
	// const res = []
	// const map = {}
	// keyName.map((name, index) => {
	// 	let time = keyTime[index]
	// 	if (!map[name]) {
	// 		map[name] = [transformToCompareTime(time)]
	// 	} else {
	// 		map[name].push(transformToCompareTime(time))
	// 	}
	// })
	// console.log(map)
	// for (const [name, timeArr] of Object.entries(map)) {
	// 	if (timeArr.length < 3) continue
	// 	const isAlert = timeArr
	// 		.sort((a, b) => a - b)
	// 		.some(
	// 			(time, index, arr) =>
	// 				index + 2 < arr.length && arr[index + 2] - time <= 60
	// 		)
	// 	if (isAlert) res.push(name)
	// }
	// return [...new Set(res)].sort()
	const map = new Map()
	for (const [index, name] of Object.entries(keyName)) {
		const minutes = keyTime[index]
			.split(':')
			.map(Number)
			.reduce((p, c, i) => (i === 0 ? c * 60 : c + p), 0)
		const arr = map.get(name) ?? []
		arr.push(minutes)
		map.set(name, arr)
	}
	return [...map]
		.filter(([name, timeArr]) => {
			return (
				timeArr.length >= 3 &&
				timeArr
					.sort((a, b) => a - b)
					.some((v, i, arr) => i + 2 < arr.length && arr[i + 2] - v <= 60)
			)
		})
		.map((a) => a[0])
		.sort()
}

// const keyName = ['daniel', 'daniel', 'daniel', 'luis', 'luis', 'luis', 'luis']
// const keyTime = ['10:00', '10:40', '11:00', '09:00', '11:00', '13:00', '15:00']
const keyName = ['a', 'a', 'a', 'a', 'a', 'b', 'b', 'b', 'b', 'b', 'b']
const keyTime = [
	'04:48',
	'23:53',
	'06:36',
	'07:45',
	'12:16',
	'00:52',
	'10:59',
	'17:16',
	'00:36',
	'01:26',
	'22:42'
] // return ['b']

console.log(alertNames(keyName, keyTime))
