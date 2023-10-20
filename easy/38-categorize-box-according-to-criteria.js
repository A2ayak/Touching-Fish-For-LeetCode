/**
 * 根据规则将箱子分类
 * https://leetcode.cn/problems/categorize-box-according-to-criteria/
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 **/

var categorizeBox = function (length, width, height, mass) {
  const v = length * width * height
  const someOver = [length, width, height].some((i) => i >= 1e4)
  let isBulky = false
  if (someOver || v >= 1e9) {
    isBulky = true
  }
  const isHeavy = mass >= 100
  if (isBulky && isHeavy) {
    return 'Both'
  } else if (isBulky) {
    return 'Bulky'
  } else if (isHeavy) {
    return 'Heavy'
  } else {
    return 'Neither'
  }
}

// const length = 1000,
//   width = 35,
//   height = 700,
//   mass = 300 // "Heavy"
const length = 10000,
  width = 1,
  height = 1,
  mass = 1 // "Neither"

console.log(categorizeBox(length, width, height, mass))
