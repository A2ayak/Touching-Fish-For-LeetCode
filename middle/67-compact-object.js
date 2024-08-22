/**
 * 精简对象
 * https://leetcode.cn/problems/compact-object/
 * @param {Object|Array} obj
 * @return {Object|Array}
 */

var compactObject = function (obj) {
  let temObj = Array.isArray(obj) ? [] : {}
  debugger
  function deepClone(source, target) {
    for (let key in target) {
      if (isObject(target[key]) || Array.isArray(target[key])) {
        source[key] = Array.isArray(target[key]) ? [] : {}
        Object.keys(target[key]).length && deepClone(source[key], target[key])
      } else {
        if (isPlain(target[key]) && target[key]) {
          if (Array.isArray(target)) {
            source.push(target[key])
          } else {
            source[key] = target[key]
          }
        }
      }
    }
  }
  deepClone(temObj, obj)
  return Array.isArray(temObj) ? temObj.filter(Boolean) : temObj
}

function isObject(obj) {
  return Object.prototype.toString.call(obj).slice(-7, -1) === 'Object'
}
function isPlain(val) {
  return typeof val !== 'object' || val !== null
}

// const obj = { a: null, b: [false, 1] }
const obj = [null, 0, 5, [0], [false, 16]]

console.log(compactObject(obj))
