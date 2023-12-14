### npm/yarn/pnpm 快速切换/还原安装源(淘宝)

##### 查看源

```
npm get registry
yarn config get registry
pnpm get registry
```

##### 切换 TB 源

```
npm config set registry https://registry.npm.taobao.org
yarn config set registry https://registry.npm.taobao.org/
pnpm config set registry https://registry.npm.taobao.org
```

##### 还原

```
npm config set registry https://registry.npmjs.org
pnpm config set registry https://registry.npmjs.org
```

##### 临时修改

```
npm --registry https://registry.npm.taobao.org install any-touch
yarn add any-touch@latest --registry=https://registry.npmjs.org/
pnpm --registry https://registry.npm.taobao.org install any-touch
```
