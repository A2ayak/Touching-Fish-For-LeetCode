/**
 * 解密消息
 * https://leetcode.cn/problems/decode-the-message/
 * @param {string} key
 * @param {string} message
 * @return {string}
 **/

var decodeMessage = function (key, message) {
	// let index = 0
	// const secretKey = [
	// 	'a',
	// 	'b',
	// 	'c',
	// 	'd',
	// 	'e',
	// 	'f',
	// 	'g',
	// 	'h',
	// 	'i',
	// 	'j',
	// 	'k',
	// 	'l',
	// 	'm',
	// 	'n',
	// 	'o',
	// 	'p',
	// 	'q',
	// 	'r',
	// 	's',
	// 	't',
	// 	'u',
	// 	'v',
	// 	'w',
	// 	'x',
	// 	'y',
	// 	'z'
	// ]
	// let map = {}
	// for (let i = 0; i < key.length; i++) {
	// 	const item = key[i] // char
	// 	if (item === ' ' || map[item]) {
	// 		continue
	// 	} else {
	// 		map[item] = secretKey[index++]
	// 	}
	// }
	// console.log(map)
	// let res = ''
	// for (let j = 0; j < message.length; j++) {
	// 	let item = message[j] // char
	// 	if (item === ' ') {
	// 		res += ' '
	// 	} else {
	// 		res += map[item]
	// 	}
	// }
	// return res

	// 学习到的写法
	// const keyNoIndentArr = [...new Set([...key])].filter((c) => c != ' ')
	// return [...message]
	// 	.map((c) =>
	// 		c == ' ' ? c : String.fromCharCode(keyNoIndentArr.indexOf(c) + 97)
	// 	)
	// 	.join('')

	const keyNoIndentArr = [...new Set(key)].filter((i) => i !== ' ')
	return [...message]
		.map((c) =>
			c === ' ' ? c : String.fromCharCode(keyNoIndentArr.indexOf(c) + 97)
		)
		.join('')
}

const key = 'the quick brown fox jumps over the lazy dog'
const message = 'vkbs bs t suepuv' // 输出："this is a secret"
console.log(decodeMessage(key, message))
