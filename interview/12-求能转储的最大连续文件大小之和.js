/* 
1、输入
1000
100 300 500 400 400 150 100

输出
950
说明
最大序列和为950，序列为[400，400，150]
示例2输入输出示例仅供调试，后台判题数据一般不包含示例

2、输入
1000
100 500 400 150 500 100
输出
1000
说明
最大序列和为1000，序列为[100，500，400]
*/

function getRes(target, arr) {
  let tem = []
  let sum = 0
  let res = 0
  for (let i = 0; i < arr.length; i++) {
    while (sum + arr[i] > target) {
      sum -= tem.shift()
    }
    sum += arr[i]
    tem.push(arr[i])
    if (sum === target) return target
    if (sum <= target && res < sum) res = sum
  }

  return res
}

// console.log(getRes(1000, [100, 300, 500, 400, 400, 150, 100]))
console.log(getRes(1000, [100, 500, 400, 150, 500, 100]))
