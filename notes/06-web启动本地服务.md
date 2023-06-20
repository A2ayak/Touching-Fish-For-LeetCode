```reg
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\myapp]
@=" test exe"
"URL Protocol"=""

[HKEY_CLASSES_ROOT\myapp\DefaultIcon]
@="C:\\WINDOWS\\system32\\calc.exe,1"

[HKEY_CLASSES_ROOT\myapp\shell]

[HKEY_CLASSES_ROOT\myapp\shell\open]

[HKEY_CLASSES_ROOT\myapp\shell\open\command]
@="\"D:\\Microsoft VS Code\\Code.exe\" \"%1\""
```

##### 保存为 reg 后缀文件并执行，win + R 输入 regedit 进入注册表查看是否成功注册自定义协议。

##### 执行后即可在浏览器输入 协议://参数 （myapp://params）即可尝试打开本地应用

##### protocolcheck.js（https://github.com/ismailhabib/custom-protocol-detection）可用于检测本地注册表是否存在自定义协议，不准确，2023年实测不支持最新版本的chrome，npm上关于custom-protocol-detection的最新库在9个月以前。

##### 附：[QQ 邮箱和百度网盘解决方案](https://juejin.cn/post/6903305494681780232#heading-3)
