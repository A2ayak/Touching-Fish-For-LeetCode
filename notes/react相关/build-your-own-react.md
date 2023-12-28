##### 1、最简 react

```js
const element = <h1 title="foo">Hello</h1>
const container = document.getElementById('root')
ReactDOM.render(element, container)
```

##### 2、原生实现

```js
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => (typeof child === 'object' ? child : createTextElement(child)))
    }
  }
}

function createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: []
    }
  }
}

function render(element, container) {
  const dom = element.type == 'TEXT_ELEMENT' ? document.createTextNode('') : document.createElement(element.type)
  const isProperty = (key) => key !== 'children'
  Object.keys(element.props)
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = element.props[name]
    })
  element.props.children.forEach((child) => render(child, dom))
  container.appendChild(dom)
}

const Didact = {
  createElement,
  render
}

/** @jsx Didact.createElement */
const element = (
  <div style="background: salmon">
    <h1>Hello World</h1>
    <h2 style="text-align:right">from Didact</h2>
  </div>
)
const container = document.getElementById('root')
Didact.render(element, container)
```

##### 3、递归调用渲染产生的问题

问题：渲染整个 element 树之前是不会停下来的。如果 element 树过于庞大，它可能会长时间阻塞主线程
解决方案：用 requestIdleCallback 去实现循环。你可以把 requestIdleCallback 当成 setTimeout，区别在于我们不需要手动调用，当浏览器主线程空闲的时候它就会执行。

```js
// React 现在不再用 requestIdleCallback，而是 schedule package。但对于当前案例，原理是一样的。
let nextUnitOfWork = null

function workLoop(deadline) {
  let shouldYield = false
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(
      nextUnitOfWork
    )
    shouldYield = deadline.timeRemaining() < 1
  }
  requestIdleCallback(workLoop)
}
​
requestIdleCallback(workLoop)
​
function performUnitOfWork(nextUnitOfWork) {
  // TODO
}

// requestIdleCallback有一个 deadline 参数，可以用于检查浏览器重新掌握控制权之前我们还有多少时间。
// 在开始循环之前，我们需要设置下第一次 unit，然后实现一个 performUnitOfWork 函数。这个函数不仅要执行当前单元的 work，也需要返回下一个单元的 work。
```
