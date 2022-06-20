/**
 * 复写0
 * https://leetcode.cn/problems/duplicate-zeros/
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
/** 
 * 输入：[1,0,2,3,0,4,5,0]
 * 输出：null
 * 解释：调用函数后，输入的数组将被修改为：[1,0,0,2,3,0,0,4]
 */

var duplicateZeros = function(arr) {
  // const len = arr.length
  // for (let i = 0; i < len; i++) {
  //   if (arr[i] === 0) {
  //     arr.splice(i, 0, 0)
  //     i++
  //   }
  // }
  // arr.length = len
  // console.log(arr);

  let i = 0
  let j = arr.length - 1
  let k = arr.length - 1
  while(i < j) {
    if (arr[i++] === 0) {
      j--
    }
  }
  // 特殊情况，数组最后三个数都是0，测试用例[1, 0, 0, 3]，结果[1, 0, 0, 0]
  if (i === j && arr[i] === 0) {
    arr[k--] = arr[j--]
  }
  while(k !== j) {
    if (arr[j] === 0) {
      arr[k--] = 0
    }
    arr[k--] = arr[j--]
  }
  console.log(arr);
};

console.log(duplicateZeros([1,0,2,3,0,4,5,0]));