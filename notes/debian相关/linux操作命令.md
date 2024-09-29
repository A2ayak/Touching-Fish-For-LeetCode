##### 查看所有正在运行的服务：

```
systemctl list-units --type=service
```

##### 查看网络占用的端口

```
# 可以列出打开的文件和网络连接
lsof -i -P -n
# 常用的网络工具
netstat -tuln
# 所有正在监听的端口及其对应的服务
ss -tuln
# 系统资源
top


```
