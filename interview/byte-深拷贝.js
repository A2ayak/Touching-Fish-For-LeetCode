function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  if (Array.isArray(obj)) {
    const res = []
    for (let val of obj) {
      const item = deepClone(val)
      res.push(item)
    }
    return res
  }

  const res = {}
  for (let key in obj) {
    const val = deepClone(obj[key])
    res[key] = val
  }

  return res
}

const obj = { a: 2, b: { v: 2, d: 5, e: null, f: undefined }, c: [3, 9] }
console.log(deepClone(obj))

console.log(deepClone(obj) === obj)
