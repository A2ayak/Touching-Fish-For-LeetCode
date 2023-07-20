### 1、使用`<a>`标签下载时，window.URL.revokeObjectURL(a.href)最好放在 setTimeout 内，否则下载行为将被取消.

#### 目前已发现问题版本 V45.0.2

#### 附下载代码

```javascript
// blobType: application/vnd.ms-office等
// fileName一般通过响应头 content-disposition 获取
const blob = new Blob([res.data], { type: blobType })
var $a = document.createElement('a')
$a.setAttribute('href', URL.createObjectURL(blob))
$a.setAttribute('download', fileName) //需要加上后缀名
document.body.appendChild($a)
$a.click()

// 兼容火狐click，防止click事件被浏览器拦截
// const evt = document.createEvent('Event');
// evt.initEvent("click", true, true);
// $a.dispatchEvent(evt);

setTimeout(() => {
  window.URL.revokeObjectURL($a.href)
  document.body.removeChild($a)
}, 100)
```

### 2、HTMLElement 缺少 insertAdjacentElement、insertAdjacentText 方法

#### 目前已发现问题版本 <= V47

```javascript
if (!HTMLElement.prototype.insertAdjacentText) {
  HTMLElement.prototype.insertAdjacentElement = function (where, node) {
    const position = String(where).toLowerCase()
    switch (position) {
      case 'beforebegin':
        this.parentNode.insertBefore(node, this)
        break
      case 'afterbegin':
        this.insertBefore(node, this.firstChild)
        break
      case 'beforeend':
        this.appendChild(node)
        break
      case 'afterend':
        if (this.nextSibling)
          this.parentNode.insertBefore(node, this.nextSibling)
        else this.parentNode.appendChild(node)
        break
    }
  }
  HTMLElement.prototype.insertAdjacentText = function (where, txt) {
    var parsedText = document.createTextNode(txt)
    this.insertAdjacentElement(where, parsedText)
  }
}
```
