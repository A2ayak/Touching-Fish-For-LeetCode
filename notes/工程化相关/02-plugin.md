#### Plugin

插件是由「具有 `apply` 方法的 prototype 对象」所实例化出来的。

1. **Compile（编译）** ：

- `compile`代表 Webpack 开始构建的阶段，即整个构建过程的初始阶段。
- 在 `compile`阶段，Webpack 会读取配置文件、解析模块、处理文件路径等，并准备好开始构建过程的基本环境。
- 通常来说，`compile`阶段是整个构建过程中的第一个阶段，它负责初始化 Webpack 的运行环境，并准备好所有必要的资源和数据。

2. **Compilation（编译过程）** ：

- `compilation`代表 Webpack 构建过程中的一个具体实例，它包含了当前构建过程中的所有信息和数据。
- 在每次构建过程中，Webpack 会创建一个新的 `compilation`对象，用于跟踪当前的构建状态，并在其中存储各种有关构建的信息，如模块依赖关系、编译结果等。
- `compilation`对象是插件开发中最常用的对象之一，开发者可以通过它来访问和操作 Webpack 构建过程中的各种数据和信息，从而实现各种自定义的功能和行为。

webpack 插件由以下组成：

- 一个 JavaScript 命名函数或 JavaScript 类。
- 在插件函数的 prototype 上定义一个 `apply` 方法。
- 指定一个绑定到 webpack 自身的[事件钩子](https://www.webpackjs.com/api/compiler-hooks/)。
- 处理 webpack 内部实例的特定数据。
- 功能完成后调用 webpack 提供的回调。

## 基本插件架构

插件是由「具有 `apply` 方法的 prototype 对象」所实例化出来的。这个 `apply` 方法在安装插件时，会被 webpack compiler 调用一次。`apply` 方法可以接收一个 webpack compiler 对象的引用，从而可以在回调函数中访问到 compiler 对象。一个插件结构如下：

```javascript
class HelloWorldPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('Hello World Plugin', (stats /* 绑定 done 钩子后，stats 会作为参数传入。 */) => {
      console.log('Hello World!')
    })
  }
}

module.exports = HelloWorldPlugin
```

## Compiler 和 Compilation

在插件开发中最重要的两个资源就是 [`compiler`](https://www.webpackjs.com/api/node/#compiler-instance) 和 [`compilation`](https://www.webpackjs.com/api/compilation-hooks/) 对象。理解它们的角色是扩展 webpack 引擎重要的第一步。

```javascript
class HelloCompilationPlugin {
  apply(compiler) {
    // 指定一个挂载到 compilation 的钩子，回调函数的参数为 compilation 。
    compiler.hooks.compilation.tap('HelloCompilationPlugin', (compilation) => {
      // 现在可以通过 compilation 对象绑定各种钩子
      compilation.hooks.optimize.tap('HelloCompilationPlugin', () => {
        console.log('资源已经优化完毕。')
      })
    })
  }
}

module.exports = HelloCompilationPlugin
```
