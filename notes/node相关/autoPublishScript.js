const fs = require('fs')
const path = require('path')
const process = require('process')
// 导入执行控制台命令的方法
const exec = require('child_process').execSync
// 保存根路径
const rootPath = __dirname
// 全部包的记录，防止包名重复或版本重复而引起的冲突
const allPackagePath = './allPackage.json'

// 已存在的包
const existPackages = fs.readFileSync(allPackagePath, 'utf-8')
const existPackagesArr = JSON.parse(existPackages).packages

const nodeModulesPath = path.join(__dirname, 'node_modules')
if (!fs.existsSync(nodeModulesPath)) return
const moduleStat = fs.statSync(nodeModulesPath)
if (moduleStat.isDirectory()) {
  const modules = fs.readdirSync(nodeModulesPath)
  publishModule(modules, nodeModulesPath)
}

function publishModule(modules, nodeModulesPath) {
  modules.forEach((item) => {
    // 拼接当前包路径
    const modulePath = path.join(nodeModulesPath, item)
    // 获取路径的stat
    const stat = fs.statSync(modulePath)
    // 判断该包路径是否为目录
    if (stat.isDirectory()) {
      // 如果目录包含@则为外层目录，则执行下述操作
      if (modulePath.split('\\').pop().indexOf('@') !== -1) {
        const atModules = fs.readdirSync(modulePath)
        publishModule(atModules, modulePath)
        return
      }
      // 否则为内层包，获取当前包目录下的package.json文件路径
      const packageJsonPath = path.join(modulePath, 'package.json')
      if (fs.existsSync(packageJsonPath)) {
        // 读取当前包目录下的package.json文件的内容，返回字符串
        const packageJsonContentString = fs.readFileSync(packageJsonPath, 'utf-8')
        // 解析package.json文件的内容为json对象
        const parsedPackJson = JSON.parse(packageJsonContentString)
        // 删除以'_'开头的属性，这些属性为包已经安装过后才生成，上传到verdaccio后再下载会卡在“xxx checking installable status”
        Object.keys(parsedPackJson).map((key) => {
          if (String(key).indexOf('_') === 0) {
            delete parsedPackJson[key]
          }
        })

        const { scripts, publishConfig } = parsedPackJson
        if (scripts || publishConfig) {
          if (scripts && Object.keys(scripts).length !== 0) {
            // 防止prepublish等钩子影响
            scripts = {}
          }
          if (publishConfig && Object.keys(publishConfig).length !== 0) {
            // 防止publishConfig影响
            publishConfig = {}
          }
          fs.writeFileSync(packageJsonPath, JSON.stringify(parsedPackJson))
        }
        // 把目录切换到当前包路径下
        process.chdir(modulePath)
        // 在包路径下执行npm publish
        const packageNameAndVersion = parsedPackJson.name + '@' + parsedPackJson.version
        if (!existPackagesArr.includes(packageNameAndVersion)) {
          try {
            console.log(`当前包${packageNameAndVersion}开始添加`)
            exec('npm publish')
            existPackagesArr.push(packageNameAndVersion)
            console.log(`当前包${packageNameAndVersion}结束执行，请检查是否成功`)
            // 包中包情况
            const innerNodeModulesPath = path.join(modulePath, 'node_modules')
            if (fs.existsSync(innerNodeModulesPath)) {
              const innerModules = fs.readFileSync(innerNodeModulesPath)
              publishModule(innerModules, innerNodeModulesPath)
            }
          } catch (error) {
            console.log(error)
          }
        } else {
          console.log(`${packageNameAndVersion}已存在`)
        }
        // 操作完成，把当前路径切换回根目录
        process.chdir(rootPath)
      }
    }
  })
  const data = { packages: existPackagesArr }
  fs.writeFileSync(allPackagePath, JSON.stringify(data, null, 2), 'utf-8', (err) => {
    if (err) {
      console.error('写入文件发生错误', err)
    }
  })
}
