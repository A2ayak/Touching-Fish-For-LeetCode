## 通用钩子

在开发中，Vite 开发服务器会创建一个插件容器来调用 [Rollup 构建钩子](https://rollupjs.org/plugin-development/#build-hooks)，与 Rollup 如出一辙。

以下钩子在服务器启动时被调用：

- [`options`](https://rollupjs.org/plugin-development/#options)
- [`buildStart`](https://rollupjs.org/plugin-development/#buildstart)

以下钩子会在每个传入模块请求时被调用：

- [`resolveId`](https://rollupjs.org/plugin-development/#resolveid)
- [`load`](https://rollupjs.org/plugin-development/#load)
- [`transform`](https://rollupjs.org/plugin-development/#transform)

以下钩子在服务器关闭时被调用：

- [`buildEnd`](https://rollupjs.org/plugin-development/#buildend)
- [`closeBundle`](https://rollupjs.org/plugin-development/#closebundle)

请注意 [`moduleParsed`](https://rollupjs.org/plugin-development/#moduleparsed) 钩子在开发中是 **不会** 被调用的，因为 Vite 为了性能会避免完整的 AST 解析。

[Output Generation Hooks](https://rollupjs.org/plugin-development/#output-generation-hooks)（除了 `closeBundle`) 在开发中是 **不会** 被调用的。你可以认为 Vite 的开发服务器只调用了 `rollup.rollup()` 而没有调用 `bundle.generate()`。

## Vite 独有钩子

- config
- configResolved
- configureServer
- configurePreviewServer
- transformIndexHtml
- handleHotUpdate

## 钩子解释

Vite 调用的兼容 RolLup 的钩子

### 通用钩子

构建阶段（开发阶段）

- options：服务启动时被调用，可以改变 Rollup 选项
- buildStart：每次开始构建时调用
- resolveId：每个传入模块请求的时候调用，传入自定义 resolve 函数
- Load：每个传入模块请求的时候调用，自定义加载内容
- transform：每个传入模块请求的时候调用，对文件代码进行转换
- buiLdEnd：构建阶段结束时调用

输出阶段（生产环境调用）

- outputOptions：接收输出参数
- renderStart：每次 bundle.generate 和 bundle.write 调用时被触发
- augmentChunkHash:chunk 增加 hash
- renderChunk：转译单个 chunk 时调用，RolLup 输出每个 chunk 都会调用
- generateBundle：在 bundle.write 之前立即触发
- writeBundLe：调用 bundle.write，等所有的 chunk 都写入文件之后调用
- closeBundle：服务器关闭时被调用
