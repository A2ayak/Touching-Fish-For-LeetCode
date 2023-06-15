/**
 * 比较字符串最小字母出现频次
 * https://leetcode.cn/problems/compare-strings-by-frequency-of-the-smallest-character/
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */

var numSmallerByFrequency = function (queries, words) {
  // function fn(s) {
  //   const temp = s.split('').sort()
  //   let res = 0
  //   for (let i = 0; i < temp.length - 1; i++) {
  //     if (temp[i] === temp[i + 1]) {
  //       res++
  //     } else {
  //       break
  //     }
  //   }
  //   return res + 1
  // }
  // const res = []
  // const map = {}
  // for (let i = 0; i < queries.length; i++) {
  //   let count = 0
  //   let queryItem = queries[i]
  //   let q = 0
  //   if (map[queryItem]) {
  //     q = map[queryItem]
  //   } else {
  //     map[queryItem] = q = fn(queryItem)
  //   }
  //   for (let j = 0; j < words.length; j++) {
  //     const wordItem = words[j]
  //     let p = 0
  //     if (map[wordItem]) {
  //       p = map[wordItem]
  //     } else {
  //       map[wordItem] = p = fn(wordItem)
  //     }
  //     if (q < p) count++
  //   }
  //   res.push(count)
  // }
  // return res

  // 法二：分别求字符串最小值再filter
  function calcTimesArr(arr, wordsTimeArr = []) {
    let res = []
    for (const str of arr) {
      let count = 0
      let key = str.charAt(0)
      for (const c of str) {
        if (key > c) {
          key = c
          count = 1
        } else if (key === c) {
          count++
        }
      }
      !wordsTimeArr.length
        ? res.push(count)
        : res.push(wordsTimeArr.filter((i) => i > count).length)
    }
    return res
  }
  const wordsTimeArr = calcTimesArr(words)
  const res = calcTimesArr(queries, wordsTimeArr)
  // console.log(wordsTimeArr, res)
  return res
}

const queries = ['bbb', 'cc'],
  words = ['a', 'aa', 'aaa', 'aaaa'] // [1,2]

console.log(numSmallerByFrequency(queries, words))
