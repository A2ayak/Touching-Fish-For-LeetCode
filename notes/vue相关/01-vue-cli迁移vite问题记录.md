1. 删除webpack、vue-cli 相关依赖（babel-loader、sass-loader等）
2. 删除babel配置文件（babel.config.js）
3. 将 /public/index.html 移动到根目录，调整src，删除%xxx%变量，添加

   ```
     <script type="module" src="/src/main.js"></script>
   ```
4. 安装依赖

   ```
   pnpm add (-D) 
   vite
   sass (less)
   @vitejs/plugin-vue2
   @vitejs/plugin-vue2-jsx

   ```
5. 添加vite.config.js

   ```
   import { defineConfig, loadEnv } from 'vite'
   import vue from '@vitejs/plugin-vue2'
   import vueJsx from '@vitejs/plugin-vue2-jsx'
   import { resolve } from 'path'
   // import Components from 'unplugin-vue-components/vite'
   // import VueSetupExtend from 'vite-plugin-vue-setup-extend' // 支持setup内写name属性，利于keepAlive
   // import AutoImport from 'unplugin-auto-import/vite' // 自动导入某些包的Api, 生成auto-import.d.ts
   // import { ElementUiResolver } from 'unplugin-vue-components/resolvers'
   // import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
   // import { viteMockServe } from 'vite-plugin-mock'
   import requireTransform from 'vite-plugin-require-transform'

   // https://vitejs.dev/config/
   export default defineConfig(({ command, mode }) => {
     const { VITE_APP_NAME, VITE_APP_PORT } = loadEnv(mode, process.cwd()) // 加载环境变量
     console.log('当前模式', mode)

     return {
       base: VITE_APP_NAME,
       server: {
         host: true,
         port: VITE_APP_PORT,
         // headers: {
         //   'Access-Control-Allow-Origin': '*',
         //   'Access-Control-Allow-Headers': '*',
         //   'Access-Control-Allow-Methods': '*'
         // },
         proxy: {
           // '/api': {
           //   target: 'http://192.168.1.1',
           //   changeOrigin: true
           // },
         }
       },
       plugins: [
         vue(),
         vueJsx(),
         // 解决部分require引入问题
         requireTransform({
           fileRegex: /.vue$|.png$/
         })
         // VueSetupExtend(),
         // createSvgIconsPlugin({
         //   iconDirs: [resolve(__dirname, 'src/assets/svg')],
         //   symbolId: 'icon-[dir]-[name]'
         // }),
         // AutoImport({
         //   // dts: 'src/auto-imports.d.ts', // 可以自定义文件生成的位置，默认是根目录下
         //   // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
         //   imports: ['vue', 'pinia', 'vue-router']
         // }),
         // Components({
         //   dirs: ['src/components/globalComp'],
         //   resolvers: [
         //     ElementUiResolver({
         //       // importStyle: false
         //       // exclude: ['ADatePicker', 'ARangePicker']
         //     })
         //   ]
         // })
         // createStyleImportPlugin({
         //   resolves: [VxeTableResolve()]
         // })
       ],
       resolve: {
         alias: {
           '@': resolve(__dirname, 'src'),
           src: resolve(__dirname, '../src'),
           static: resolve(__dirname, '../static'),
           api: resolve(__dirname, '../src/api')
         },
         extensions: ['.js', '.jsx', '.json', '.png', '.vue']
       },
       css: {
         preprocessorOptions: {
           scss: {
             // modifyVars: generateThemeVars(mode),
             // additionalData: `@import "./src/styles/index.scss";`,
             javascriptEnabled: true,
             sassOptions: { outputStyle: 'expanded' }
           }
         }
       },
       esbuild: {
         loader: 'jsx',
         include: /src\/.*\.jsx?$/,
         exclude: []
       },
       // optimizeDeps: {
       //   esbuildOptions: {
       //     loader: { '.js': 'jsx' },
       //     plugins: [
       //       {
       //         name: 'load-js-files-as-jsx',
       //         setup(build) {
       //           build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
       //             loader: 'jsx',
       //             contents: await fs.readFile(args.path, 'utf8')
       //           }))
       //         }
       //       }
       //     ]
       //   }
       // },
       define: {
         'process.env': process.env
       }
     }
   })

   ```
6. 修改环境变量（VUE_APP_XXX  -->   VITE_APP_XXX）
7. 调整package.json scripts

   ```
     "scripts": {
       "dev": "vite --mode development",
       "build:dev": "vite build --mode test",
       "build:prod": "vite build --mode production"
     },
   ```
8. 注意sass版本，高版本启动时会在控制台打印很多警告
9. 解决require导入问题（改import或使用vite-plugin-require-transform）
10. 使用wujie加载导致样式丢失问题（跟高版本Vite相关），[Github issue 参考链接](https://github.com/Tencent/wujie/issues/434)

其他参考链接：[vue2 迁移到vite](https://juejin.cn/post/7265524106816700479#heading-1)、[从 Vue-cli 迁移到 vite 的记录](https://carljin.com/posts/migrating-from-webpack-vue-cli-to-vitejs/)
