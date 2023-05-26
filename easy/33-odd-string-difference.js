const { log } = require('console')

/**
 * 差值数组不同的字符串
 * https://leetcode.cn/problems/odd-string-difference/
 * @param {string[]} words
 * @return {string}
 **/
var oddString = function (words) {
  // // 获取差值数组
  // function getDeArr(arr) {
  //   let res = []
  //   for (let i = 1; i < arr.length; i++) {
  //     res.push(arr[i].charCodeAt() - arr[i - 1].charCodeAt())
  //   }
  //   return res.join('-')
  // }
  // const obj = {}
  // const transformArr = words.map((w) => getDeArr(w.split('')))
  // transformArr.map((i) => {
  //   if (!obj[i]) {
  //     obj[i] = 1
  //   } else {
  //     obj[i]++
  //   }
  // })
  // let tempRes = ''
  // Object.keys(obj).map((i) => {
  //   if (obj[i] === 1) {
  //     tempRes = i
  //   }
  // })
  // return words[transformArr.findIndex((i) => i === tempRes)]
  /* 法二：优化比较次数 */
  // 获取差值数组
  function getDiffString(arr) {
    let res = []
    for (let i = 1; i < arr.length; i++) {
      res.push(arr[i].charCodeAt() - arr[i - 1].charCodeAt())
    }
    return res.join('-')
  }
  let diff0 = getDiffString(words[0])
  let diff1 = getDiffString(words[1])
  if (diff0 === diff1) {
    for (let i = 2; i < words.length; i++) {
      if (getDiffString(words[i]) !== diff0) {
        return words[i]
      }
    }
  }
  return diff0 === getDiffString(words[2]) ? words[1] : words[0]
}

const words = ['abm', 'bcn', 'alm'] // "alm"

console.log(oddString(words))
