function combineArr(arr1, arr2) {
  // 法一
  // return [...arr1, ...arr2].sort((a, b) => a - b)
  // 法二
  // const obj = {}
  // ;[...arr1, ...arr2].map((i) => (obj[i] = 0))
  // return Object.keys(obj).map(Number)
  // 法三
  // const len1 = arr1.length
  // const len2 = arr2.length
  // const len = len1 + len2
  // const arr = new Array(len).fill(0)
  // let i = 0,
  //   j = 0
  // if (arr1[0] >= arr2[0]) {
  //   arr[0] = arr2[0]
  //   j++
  // } else {
  //   arr[0] = arr1[0]
  //   i++
  // }
  // // debugger
  // // arr[0] = arr1[0] >= arr2[0] ? arr2[0] : arr1[0]
  // for (k = 1; k < len; k++) {
  //   if (i >= len1) {
  //     arr[k] = arr2[j]
  //     break
  //   }
  //   if (j >= len2) {
  //     arr[k] = arr2[i]
  //     break
  //   }
  //   arr[k] = arr1[i] >= arr2[j] ? arr2[j++] : arr1[i++]
  // }
  // return arr
  /* 法四 */
  const len1 = arr1.length
  const len2 = arr2.length
  let i = 0,
    j = 0
  const arr = []
  arr[0] = arr1[0] > arr2[0] ? arr2[j++] : arr1[i++]
  debugger
  for (let k = i; k < len1; k++) {
    if (arr2[j] >= arr1[i]) {
      arr.push(arr1[i++])
    } else {
      arr.push(arr2[j++])
      k--
    }
  }
  if (i < len1) {
    return arr.concat(arr1.slice(i))
  }
  if (j < len2) {
    return arr.concat(arr2.slice(j))
  }
  return arr
}

const arr1 = [2, 5, 6],
  arr2 = [1, 3, 6, 19]

console.log(combineArr(arr1, arr2))
