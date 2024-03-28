import * as fs from 'fs'
import { EOL } from 'os'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

// 首先把swagger导出的JSON文件放到本文件夹下，然后配置tag、swaggerJsonFileName、fileName
// 以下为三个必填配置
const tag = 'someTag'
const swaggerJsonFileName = './default_OpenAPI.json' // swagger导出的JSON文件
const generateFileName = 'index.ts' // 生成的文件名
const prefix = '/api'

console.log(`
====================================文件信息====================================
swagger导出的JSON文件 => ${swaggerJsonFileName}
生成文件 => ${generateFileName}
====================================开始执行====================================
`)

const __dirname = dirname(fileURLToPath(import.meta.url)) // 文件夹目录
// fs.readFileSync从项目文件夹运行目录process.cwd()启动，可夹resolve解决或使用'./${dirname}/default_OpenApi.json'
const jsonPath = resolve(__dirname, swaggerJsonFileName)
const rawData = fs.readFileSync(jsonPath)
const jsonData = JSON.parse(rawData)

const realFilePath = resolve(__dirname, generateFileName)
fs.writeFileSync(realFilePath, `import request from '@/utils/axios/index'${EOL}`)

console.log('匹配到的api如下：')
Object.keys(jsonData.paths).map((apiPath) => {
  let url = apiPath.replace(prefix, '')
  const apiPathSplitArr = apiPath.split('/')
  let fnName = apiPathSplitArr[apiPathSplitArr.length - 1]
  // get在url中传参的情况，如`api/id/${someNumber}`
  const reg = /(?<=\{)(.+)(?=\})/g
  const urlParams = url.match(reg)
  const urlParamsIndex = url.indexOf('{')
  if (urlParams) {
    const lastWord = apiPathSplitArr[apiPathSplitArr - 2]
    fnName = 'get' + lastWord.charAt(0).toUpperCase() + lastWord.slice(1)
    url = '`' + url.slice(0, urlParamsIndex) + '$' + url.slice(urlParamsIndex) + '`'
    const method = Object.keys(jsonData.paths[apiPath])[0]
    const details = jsonData.paths[apiPath][method]
    isReqWithParams = Boolean(details?.parameters?.length) && !urlParams
    const isReqWithJson = Boolean(Object.keys(details?.requestBody?.content ?? {})[0] === 'application/json') // 请求是否传JSON
    const notes = details.summary || '暂无注释'
    if (details.tags[0] === tag) {
      console.log(notes + ':' + apiPath)
      // template格式需要自己改
      const fnParams = urlParams ? urlParams : isReqWithParams ? 'params' : isReqWithJson ? 'data' : ''
      const template = `
      // ${notes}
      export function ${fnName}(${fnParams}) {
        return request<baseRequestResult>(
          {
            url: '${url}',
            method: '${method}',${isReqWithParams ? '\n\t\t\tparams' : isReqWithJson ? '\n\t\t\tdata' : ''}
          }
        )
      }
      `
      try {
        fs.appendFileSync(realFilePath, template)
      } catch (err) {
        console.log(err)
      }
    }
  }
})
console.log('====================================执行结束====================================')
