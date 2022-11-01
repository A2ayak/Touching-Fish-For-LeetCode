// learn from CodingStartUp:Runc、 LeeLei

// 时间范围正则匹配，<key>为分组，会在match结果里的group里
const reg =
	/^((?<day>\d+?)天)?((?<hour>\d+?)小时)?((?<minute>\d+?)分)?((?<second>\d+?)秒)?$/
const result = '10小时54分20秒'.match(reg)
console.log(result.groups) // { day: undefined, hour: '10', minute: '54', second: '20' }

// 利用result.group组成timeArr数组

// 时间转换
var timeArr = [
	[1, 2, 3, 4],
	[18, 17, 16, 15],
	[7, 8, 9, 10],
	[20, 20, 32, 20],
	[10, 10, 10, 32]
]
let ans = [0, 0, 0, 0]
let carry = 0
let mod = [365, 24, 60, 60]
for (let i = 3; i >= 0; i--) {
	for (let item of timeArr) {
		ans[i] += item[i] + carry
		carry = 0
	}
	if (i > 0) {
		carry = ~~(ans[i] / mod[i])
		ans[i] = ans[i] % mod[i]
	}
}
console.log(ans) // [天, 小时，分钟，秒]
