function game(M) {
  if (M <= 1 || M >= 100) {
    console.log('ERROR')
    return
  }
  let arr = new Array(100).fill(0).map((_, idx) => idx + 1)
  const temArr = []
  let offset = 0
  while (arr.length >= M) {
    arr = arr.filter((i) => !temArr.includes(i))
    while (offset > 0) {
      arr.unshift(arr.pop())
      offset--
    }
    for (let i = 0; i < arr.length; i++) {
      if ((i + 1) % 3 === 0) {
        temArr.push(arr[i])
      }
    }
    offset = arr.length % M
  }
  return arr.join(',')
}

console.log(game(3))

function josephus(n, k) {
  let arr = []
  for (let i = 1; i <= n; i++) {
    arr.push(i)
  }

  let index = 0
  while (arr.length > 2) {
    index = (index + k - 1) % arr.length
    arr.splice(index, 1)
  }

  return arr
}

const n = 100 // 总人数
const k = 3 // 报数到几的人退出圈子

const result = josephus(10, k)
console.log('最后剩下的两个人的原始排号为：' + result)
