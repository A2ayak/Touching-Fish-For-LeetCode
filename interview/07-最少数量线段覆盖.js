/*
题目描述
给定坐标轴上的一组线段，线段的起点和终点均为整数并且长度不小于1，请你从中找到最少数量的线段，这些线段可以覆盖柱所有线段。

输入描述
第一行输入为所有线段的数量，不超过10000，后面每行表示一条线段，格式为"x,y"，x和y分别表示起点和终点，取值范围是[-10^5，10^5]。

输出描述
最少线段数量，为正整数 
*/

/* 
首先，将所有区间ranges按照开始位置升序。

然后，创建一个辅助的栈stack，初始时将排序后的第一个区间压入栈中。

然后，遍历出1~ranges.length范围内的每一个区间ranges[i]，将遍历到ranges[i]和stack栈顶区间对比：

1、如果stack栈顶区间可以包含ranges[i]区间，则range[i]不压入栈顶
2、如果stack栈顶区间被ranges[i]区间包含，则弹出stack栈顶元素，继续比较ranges[i]和stack新的栈顶元素
3、如果stack栈顶区间和ranges[i]无法互相包含，只有部分交集，则将ranges[i]区间去除交集部分后，剩余部分区间压入stack
4、如果stack栈顶区间和ranges[i]区间没有交集，那么直接将ranges[i]压入栈顶

*/

function getResult(ranges, n) {
  ranges.sort((a, b) => a[0] - b[0])

  const stack = [ranges[0]]

  for (let i = 1; i < ranges.length; i++) {
    const range = ranges[i]

    while (true) {
      if (stack.length == 0) {
        stack.push(range)
        break
      }

      const [s0, e0] = stack.at(-1)
      const [s1, e1] = range

      if (s0 >= s1) {
        if (s0 >= e1) {
          break
        } else if (e1 < e0) {
          break
        } else {
          stack.pop()
        }
      } else if (s1 < e0) {
        if (e1 <= e0) {
          break
        } else {
          stack.push([e0, e1])
          break
        }
      } else {
        stack.push(range)
        break
      }
    }
  }

  //console.log(stack);

  return stack.length
}

const ranges = [
  [1, 4],
  [2, 5],
  [3, 6]
]
const n = 3

console.log(getResult(ranges, n))
