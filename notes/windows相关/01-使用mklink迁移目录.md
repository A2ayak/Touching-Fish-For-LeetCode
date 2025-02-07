已经将原始数据目录迁移到其他分区，在原路径创建SymbolicLink链接到新目录后，启动程序暂未发现问题。

其实就是这句话描述的，这边是win系统，同理linux或mac用软链接。
Step1. 在应用设置里找到数据目录，复制应用数据路径，关闭CherryStudio，如C:\Users\xxx\AppData\Roaming\CherryStudio
Step2. 将应用数据目录移动到你希望用于存放数据的目的路径，如D:\AppData\CherryStudio
Step3. 创建目录符号链接（创建符号链接需要管理员权限）或目录联接到新路径。
Step4. 验证C:\Users\xxx\AppData\Roaming\CherryStudio正常链接到新路径，启动CherryStudio。

针对CMD，可以用mklink命令，语法为：mklink /D Link Target
示例：mklink /D C:\Users\xxx\AppData\Roaming\CherryStudio D:\AppData\CherryStudio，/D是符号链接，如果换成/J则是目录联接，效果类似。
针对PowerShell，可以用New-Item命令，语法为：New-Item <链接路径> -ItemType <链接类型> -Target <链接目标>
示例：New-Item C:\Users\xxx\AppData\Roaming\CherryStudio -ItemType SymbolicLink -Target D:\AppData\CherryStudio，链接类型换成Junction是目录联接，效果类似。
