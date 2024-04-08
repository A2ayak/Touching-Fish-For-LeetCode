/* 
题目描述

在学校中，N个小朋友站成一队，第i个小朋友的身高为height[i]第i个小朋友可以看到的第一个比自己身高更高的小朋友j，那么是的好朋友(要求j>i)。清重新生成一个列表，对应位置的输出是每个小朋友的好朋友位置，如果没有看到好朋友，请在该位置用0代替。小朋友人数范围是[0,40000].

输入描述

第一行输入N，N表示有N个小朋友

第二行输入N个小朋友的身高height[i]，都是整数

输出描述

输出N个小朋友的好朋友的位置

用例
*/

function findFriend(heightArr) {
  const len = heightArr.length
  const temStack = [0]
  const stack = [heightArr[0]]

  let res = new Array(len).fill(0)
  for (let i = 1; i < len; i++) {
    let item = heightArr[i]
    while (item > stack[stack.length - 1]) {
      res[temStack.pop()] = i
      stack.pop()
    }
    stack.push(item)
    temStack.push(i)
  }
  return res
}

const heightArr = [123, 124, 125, 121, 119, 122, 126, 123]
console.log(findFriend(heightArr))
