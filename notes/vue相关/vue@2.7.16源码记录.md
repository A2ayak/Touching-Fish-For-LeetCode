```javascript
 alias: {
   compiler: resolve('src/compiler'),
   core: resolve('src/core'),
   server: resolve('packages/server-renderer/src'),
   sfc: resolve('packages/compiler-sfc/src'),
   shared: resolve('src/shared'),
   web: resolve('src/platforms/web'),
   v3: resolve('src/v3'),
   vue: resolve('src/platforms/web/entry-runtime-with-compiler'),
   types: resolve('src/types')
 }
```

1. Vue 对象的定义 & 初始化 （src\core\instance\index.ts）

   ```javascript
   import { initMixin } from './init'
   import { stateMixin } from './state'
   import { renderMixin } from './render'
   import { eventsMixin } from './events'
   import { lifecycleMixin } from './lifecycle'
   import { warn } from '../util/index'
   import type { GlobalAPI } from 'types/global-api'

   function Vue(options) {
     if (__DEV__ && !(this instanceof Vue)) {
       warn('Vue is a constructor and should be called with the `new` keyword')
     }
     this._init(options)
   }

   1、initMixin(Vue)
       vm._self = vm
       initLifecycle(vm)
       initEvents(vm)
       initRender(vm)
       callHook(vm, 'beforeCreate', undefined, false /* setContext */)
       initInjections(vm) // resolve injections before data/props
       initState(vm)
       initProvide(vm) // resolve provide after data/props
       callHook(vm, 'created')

   2、stateMixin(Vue)
       Object.defineProperty(Vue.prototype, '$data', dataDef)
       Object.defineProperty(Vue.prototype, '$props', propsDef)
       Vue.prototype.$set = set
       Vue.prototype.$delete = del
       Vue.prototype.$watch = function...

   3、eventsMixin(Vue)
       Vue.prototype.$on = function... // 监听组件
       Vue.prototype.$once = function... // 监听组件（单次）
       Vue.prototype.$off = function... // 移除事件监听
       Vue.prototype.$emit = function... // 触发事件（获取回调函数列表并apply参数）

   4、lifecycleMixin(Vue)
       Vue.prototype._update = function... // 基于virtual DOM更新组件DOM
       Vue.prototype.$forceUpdate = function... // 强制组件重新渲染
       Vue.prototype.$destroy = function... // 销毁组件，从父节点中删除并移除引用

   5、renderMixin(Vue)
       installRenderHelpers(Vue.prototype) // 如下所示
           export function installRenderHelpers(target: any) {
     	    target._o = markOnce
     	    target._n = toNumber
     	    target._s = toString
     	    target._l = renderList
    	    target._t = renderSlot
     	    target._q = looseEqual
     	    target._i = looseIndexOf
     	    target._m = renderStatic
    	    target._f = resolveFilter
   	    target._k = checkKeyCodes
     	    target._b = bindObjectProps
     	    target._v = createTextVNode
     	    target._e = createEmptyVNode
     	    target._u = resolveScopedSlots
     	    target._g = bindObjectListeners
     	    target._d = bindDynamicKeys
     	    target._p = prependModifier
   	}

       Vue.prototype.$nextTick = function...
   	1. 把函数放入callback数组
   	2. 非pendding时执行timerFunc函数
   	3. timerFunc函数顺序（Promise、MutationObserver、setImmediate、setTimeout）

       Vue.prototype._render = function...
   	// 定义渲染vnode函数，返回vnode

   export default Vue as unknown as GlobalAPI // 返回Vue对象
   ```

2. 定义部分静态方法（src\core\index.ts）

   ```
   initGlobalAPI(Vue) （重点静态方法）
     	Object.defineProperty(Vue, 'config', configDef)

    	// exposed util methods.
    	// NOTE: these are not considered part of the public API - avoid relying on
     	// them unless you are aware of the risk.
    	Vue.util = {
      	  warn,
      	  extend,
      	  mergeOptions,
     	  defineReactive
   	}

    	Vue.set = set
    	Vue.delete = del
    	Vue.nextTick = nextTick

     	// 2.6 explicit observable API
     	Vue.observable = <T>(obj: T): T => {
     	  observe(obj)
    	  return obj
   	}

     	Vue.options = Object.create(null)
    	  ASSET_TYPES.forEach(type => {
     	    Vue.options[type + 's'] = Object.create(null)
    	  })

     	// this is used to identify the "base" constructor to extend all plain-object
     	// components with in Weex's multi-instance scenarios.
     	Vue.options._base = Vue

     	extend(Vue.options.components, builtInComponents) // keepAlive组件

    	initUse(Vue)
    	initMixin(Vue)
    	initExtend(Vue)
    	initAssetRegisters(Vue)

   Object.defineProperty(Vue.prototype, '$isServer', {
     get: isServerRendering
   })
   Object.defineProperty(Vue.prototype, '$ssrContext', {
     get() {
       return this.$vnode && this.$vnode.ssrContext
     }
   })
   Object.defineProperty(Vue, 'FunctionalRenderContext', {
     value: FunctionalRenderContext
   })

   Vue.version = version

   export default Vue
   ```

3. Vue 对象的 config 和 options，定义$mount（src\platforms\web\runtime\index.ts）

   ```javascript
   // install platform specific utils
   Vue.config.mustUseProp = mustUseProp
   Vue.config.isReservedTag = isReservedTag
   Vue.config.isReservedAttr = isReservedAttr
   Vue.config.getTagNamespace = getTagNamespace
   Vue.config.isUnknownElement = isUnknownElement

   1、// install platform runtime directives & components
   extend(Vue.options.directives, platformDirectives)
   extend(Vue.options.components, platformComponents)

   2、// install platform patch function
   Vue.prototype.__patch__ = inBrowser ? patch : noop

   3、Vue.prototype.$mount = function...

   4、export default Vue // 再导出Vue对象
   ```

4. 保存刚才的$mount，重写后再 call，主要是 compileToFunctions -> parse 模板解析 (正则匹配编译返回 ast)、optimize 优化和 codegen 代码生成，返回 Vue 对象（src\platforms\web\runtime-with-compiler.ts）
5. 引入 Vue3 相关实现，再返回 Vue

   ```
   import Vue from './runtime-with-compiler'
   import * as vca from 'v3'
   import { extend } from 'shared/util'

   extend(Vue, vca)

   import { effect } from 'v3/reactivity/effect'
   Vue.effect = effect

   export default Vue
   ```
