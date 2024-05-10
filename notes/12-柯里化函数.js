// 柯里化函数作用：固定参数，把多参转换为单参
// 基本原理：传入一个函数，获取该函数所接收的参数总数，当后续传参达到总数时，执行该函数

function curry(fn) {
  const len = fn.length
  const args = [...arguments].slice(1)
  return function () {
    var totalArgs = [...args, ...arguments]
    if (totalArgs.length < len) {
      totalArgs.unshift(fn)
      return curry.apply(this, totalArgs)
    } else {
      return fn.apply(this, totalArgs)
    }
  }
}

function add(a, b) {
  return a + b
}
console.log(curry(add)(1)(2))

function multiAdd() {
  const args = [...arguments]
  function fn() {
    const newArgs = [...args, ...arguments]
    return multiAdd.apply(this, newArgs)
  }
  fn.toString = function () {
    return args.reduce((a, b) => a + b)
  }
  return fn
}

// console.log(multiAdd(1)(2)(5).toString())
