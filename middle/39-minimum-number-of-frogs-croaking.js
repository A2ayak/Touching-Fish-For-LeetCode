/**
 * 数青蛙
 * https://leetcode.cn/problems/minimum-number-of-frogs-croaking/
 * @param {string} croakOfFrogs
 * @return {number}
 */

var minNumberOfFrogs = function (croakOfFrogs) {
  // if (croakOfFrogs.charAt(0) !== 'c') return -1
  // const arr = new Array(5).fill(0)
  // const indexObj = {
  //   c: 0,
  //   r: 1,
  //   o: 2,
  //   a: 3,
  //   k: 4
  // }
  // let ans = 0
  // let x = 0
  // debugger
  // for (const c of croakOfFrogs) {
  //   const index = indexObj[c]
  //   arr[index]++
  //   if (index === 0) {
  //     ans = Math.max(ans, ++x)
  //   } else {
  //     if (--arr[index - 1] < 0) {
  //       return -1
  //     } else if (index === 4) {
  //       x--
  //     }
  //   }
  // }
  // return x > 0 ? -1 : ans

  let obj = {
    c: 0,
    r: 0,
    o: 0,
    a: 0,
    k: 0
  }
  let max = 0
  for (let ele of croakOfFrogs) {
    obj[ele]++
    if (obj.c && obj.r && obj.o && obj.a && obj.k) {
      obj.c--
      obj.r--
      obj.o--
      obj.a--
      obj.k--
    }
    if (obj.c >= obj.r && obj.r >= obj.o && obj.o >= obj.a && obj.a >= obj.k) {
      max = Math.max(max, obj.c)
    } else {
      return -1
    }
  }
  if (obj.c === 0 && obj.r === 0 && obj.o === 0 && obj.a === 0 && obj.k === 0) {
    return max
  }
  return -1
}

// const croakOfFrogs = 'crcoakroak' // 2
// const croakOfFrogs = 'crocakcroraoakk' // 2
// const croakOfFrogs = 'croakcrook' // -1
// const croakOfFrogs = 'aoocrrackk' // -1
const croakOfFrogs = 'cccrorakrcoakorakoak' // 3

console.log(minNumberOfFrogs(croakOfFrogs))
