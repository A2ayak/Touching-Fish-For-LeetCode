/**
 * 温度转换
 * https://leetcode.cn/problems/convert-the-temperature/
 * @param {number} celsius
 * @return {number[]}
 **/

var convertTemperature = function (celsius) {
	return [celsius + 273.15, celsius * 1.8 + 32.0]
}

const celsius = 36.5

console.log(convertTemperature(celsius))
