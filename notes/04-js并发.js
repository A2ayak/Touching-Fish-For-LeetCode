const { log } = require('console')

// 模拟sleep
function sleep(time) {
	return new Promise((resolve) => setTimeout(resolve, time))
}

// 执行任务
async function execTask(params) {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log(params)
			resolve(params)
		}, 2000)
	})
}

const taskNum = new Array(20).fill(0) // 任务
const concurrency = 5 // 并发数量

// 并发&sleep
async function concurrencyFunc(taskNum, concurrency) {
	for (let i = 0; i < taskNum.length; i += concurrency) {
		const roundTaskArr = [] // 每轮任务数
		for (let j = i; j < i + concurrency; j++) {
			if (j < taskNum) {
				const task = execTask(j)
				roundTaskArr.push(task)
			}
		}
		await Promise.all(roundTaskArr)
		await sleep(500)
	}
}

concurrencyFunc(taskNum, concurrency)
