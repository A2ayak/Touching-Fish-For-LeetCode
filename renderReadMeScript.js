const fs = require('fs')
const readline = require('readline')

const newFilePath = './middle/30-count-sorted-vowel-strings.js' // 新增的题目
const writeFilePath = './README.md' // 写入地址

console.log('脚本开始执行')
const difficulty = newFilePath.split('/')[1] // easy middle hard

// 先获取新增数据
const rl = readline.createInterface({
	input: fs.createReadStream(newFilePath),
	output: process.stdout,
	terminal: false
})

let nameCN = ''
let nameENG = ''
let index = ''
const arr = []

let blankArr = []
let readMeLineIndex = 1

// const regCN = /[\u4e00-\u9fa5]+/g

// 逐行读取新增文件，获取文件头信息
rl.on('line', (line) => {
	if (line.indexOf(' * ') !== -1) {
		arr.push(line.split(' * ')[1])
	}
})
rl.on('close', function () {
	nameCN = arr[0]
	nameENG = arr[1].split('/')[4]
	const files = fs.readdirSync(`./${difficulty}`)
	// index = Number(files[files.length - 1].split('-')[0])
	index = newFilePath.split('/')[2].split('-')[0]
	const newLine = `- [X] ${index}-${nameCN}（${nameENG}）[查看原题](https://leetcode-cn.com/problems/${nameENG}/)`
	console.log('新增行：', newLine)

	// 逐行读取readMe，构成空白行数组，倒数一二行分别为需要插入middle、easy的行数
	const rmrl = readline.createInterface({
		input: fs.createReadStream(writeFilePath),
		output: process.stdout,
		terminal: false
	})
	rmrl.on('line', (rmLine) => {
		if (!rmLine) {
			blankArr.push(readMeLineIndex)
		}
		readMeLineIndex++
	})
	rmrl.on('close', () => {
		console.log('空白行', blankArr)
		const subtractIndex =
			difficulty === 'easy' ? 3 : difficulty === 'middle' ? 2 : 1
		const data = fs.readFileSync(writeFilePath, 'utf-8').split('\n')
		// 在第 blankArr[blankArr.length - subtractIndex] - 1 行插入数据
		console.log('插入行:', blankArr[blankArr.length - subtractIndex] - 1)
		data.splice(blankArr[blankArr.length - subtractIndex] - 1, 0, newLine)
		fs.writeFileSync(writeFilePath, data.join('\n'), 'utf-8')
		console.log('已更新 README.md')
		//结束程序
		// process.exit(0)
	})
})
