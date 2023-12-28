### npm/yarn/pnpm 快速切换/还原安装源(淘宝)

##### 当前使用版本

```
20.9.0 (npm@10.1.0) // 解决npm i时卡在idealTree:xxxxxx
18.14.2
16.15.0 (npm@9.x)
14.16.0
```

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

##### Windows 脚本(.bat)

```shell
@echo off
setlocal

rem 此处rem为注释，也可用::
rem set registry=https://registry.npmjs.org/

set registry=https://registry.npm.taobao.org/
npm config set registry %registry%

endlocal
pause
```
