/**
 * 统计各位数字之和为偶数的整数个数
 * https://leetcode.cn/problems/count-integers-with-even-digit-sum/
 * @param {number} num
 * @return {number}
 **/

var countEven = function (num) {
	/* 枚举法 */
	let res = 0
	for (let i = 1; i <= num; i++) {
		let s = String(i).split('')
		if (s.reduce((pre, cur) => pre + Number(cur), 0) % 2 === 0) {
			res++
		}
	}
	return res
	/* 
		数学方法
		首先我们发现每两个数中就有一个满足条件的数，所以只要除以2再修正一下就是答案。
		观察给定数本身的数字和的奇偶性可以通过将数字转换到10进制字符串，然后将字符串视为某一大于10的奇进制转换到整数来实现。例如下面的代码采用11进制
		作者：magical-agnesibu0
		链接：https://leetcode.cn/problems/count-integers-with-even-digit-sum/solution/li-yong-qi-jin-zhi-by-magical-agnesibu0-yglj/
	*/
	//  return num - parseInt(num, 11) % 2 >> 1
}

let num = 4
console.log(countEven(num))
