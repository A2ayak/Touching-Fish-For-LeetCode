// 快排
function quickSort(arr) {
  const len = arr.length
  if (len <= 1) return arr
  const midIndex = Math.floor(len / 2)
  const midVal = arr.splice(midIndex, 1)[0]
  const left = [],
    right = []
  arr.map((i) => {
    i < midVal ? left.push(i) : right.push(i)
  })
  return [...quickSort(left), midVal, ...quickSort(right)]
}

// console.log(quickSort([3, 6, 3, 7, 1, 89, 34, 67]))

// 冒泡
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        ;[arr[j], arr[i]] = [arr[i], arr[j]]
      }
    }
  }
  return arr
}

// console.log(bubbleSort([3, 6, 3, 7, 1, 89, 34, 67]))

// 插入
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      const r = arr[i],
        l = arr[j]
      if (l > r) {
        const cur = arr.splice(i, 1)[0]
        arr.splice(j, 0, cur)
        break
      }
    }
  }
  return arr
}

console.log(insertSort([3, 6, 3, 7, 1, 89, 34, 67]))
