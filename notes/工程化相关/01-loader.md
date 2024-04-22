#### loader

1. 传入正则匹配（test 配置）的 source code
2. 进行处理后 callback 返回
3. 以下为 less-loader 示例

```javascript
async function lessLoader(source) {
  const options = this.getOptions(_options.default)
  const callback = this.async()
  const implementation = (0, _utils.getLessImplementation)(this, options.implementation)

  if (!implementation) {
    callback(new Error(`The Less implementation "${options.implementation}" not found`))
    return
  }

  const lessOptions = (0, _utils.getLessOptions)(this, options, implementation)
  const useSourceMap = typeof options.sourceMap === 'boolean' ? options.sourceMap : this.sourceMap

  if (useSourceMap) {
    lessOptions.sourceMap = {
      outputSourceFiles: true
    }
  }

  let data = source

  if (typeof options.additionalData !== 'undefined') {
    data = typeof options.additionalData === 'function' ? `${await options.additionalData(data, this)}` : `${options.additionalData}\n${data}`
  }

  const logger = this.getLogger('less-loader')
  const loggerListener = {
    error(message) {
      logger.error(message)
    },

    warn(message) {
      logger.warn(message)
    },

    info(message) {
      logger.log(message)
    },

    debug(message) {
      logger.debug(message)
    }
  }
  implementation.logger.addListener(loggerListener)
  let result

  try {
    result = await implementation.render(data, lessOptions)
  } catch (error) {
    if (error.filename) {
      // `less` returns forward slashes on windows when `webpack` resolver return an absolute windows path in `WebpackFileManager`
      // Ref: https://github.com/webpack-contrib/less-loader/issues/357
      this.addDependency(_path.default.normalize(error.filename))
    }

    callback(new _LessError.default(error))
    return
  } finally {
    // Fix memory leaks in `less`
    implementation.logger.removeListener(loggerListener)
    delete lessOptions.pluginManager.webpackLoaderContext
    delete lessOptions.pluginManager
  }

  const { css, imports } = result
  imports.forEach((item) => {
    if ((0, _utils.isUnsupportedUrl)(item)) {
      return
    } // `less` return forward slashes on windows when `webpack` resolver return an absolute windows path in `WebpackFileManager`
    // Ref: https://github.com/webpack-contrib/less-loader/issues/357

    const normalizedItem = _path.default.normalize(item) // Custom `importer` can return only `contents` so item will be relative

    if (_path.default.isAbsolute(normalizedItem)) {
      this.addDependency(normalizedItem)
    }
  })
  let map = typeof result.map === 'string' ? JSON.parse(result.map) : result.map

  if (map && useSourceMap) {
    map = (0, _utils.normalizeSourceMap)(map, this.rootContext)
  }

  callback(null, css, map)
}

var _default = lessLoader
exports.default = _default
```
