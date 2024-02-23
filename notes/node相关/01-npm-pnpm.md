### npm/yarn/pnpm 快速切换/还原安装源(淘宝)

##### 当前使用版本

```
20.9.0 (npm@10.1.0) // 解决npm i时卡在idealTree:xxxxxx
18.14.2
16.15.0 (npm@9.x)
14.16.0
```

### 内网 verdaccio 安装不成功可尝试 👇

##### 先删除 lock 文件（pnpm-lock.yaml、yarn-lock.yaml、package-lock.json 等），再执行以下命令，成功后有可能会覆盖部分原有依赖，重复试几次就能成功（npm 实在太抽象了

```
npm i xxx@1.0.0 --force --ignore-scripts
```

##### 查看源

```
npm get registry
yarn config get registry
pnpm get registry
```

##### 切换 TB 源

```
// 注意淘宝源已从https://registry.npm.taobao.org/ 改为 https://registry.npmmirror.com
npm config set registry https://registry.npmmirror.com
yarn config set registry https://registry.npmmirror.com
pnpm config set registry https://registry.npmmirror.com
```

##### 还原

```
npm config set registry https://registry.npmjs.org/
pnpm config set registry https://registry.npmjs.org/
```

##### 临时修改

```
npm --registry https://registry.npmmirror.com install any-touch
yarn add any-touch@latest --registry=https://registry.npmjs.org/
pnpm --registry https://registry.npmmirror.com install any-touch
```

##### Windows 脚本(.bat)

```shell
@echo off
setlocal

rem 此处rem为注释，也可用::
rem set registry=https://registry.npmjs.org/

set registry=https://registry.npmmirror.com
npm config set registry %registry%

endlocal
pause
```
