```bash
# 1、创建SSH Key
ssh-keygen -t rsa -C "example@qq.com"
# 回车
# 2、将公钥（.pub文件，位于C:\Users\电脑用户名\.ssh）放到github上
# 3、验证
ssh -T git@github.com
# 4、到项目目录下
git remote set-url origin ssh.git
# 查看当前源
git remote -v
```

如遇到以下情况

```
$ ssh -T git@github.com
ssh: connect to host github.com port 22: Connection timed out
```

尝试覆盖 ssh 配置

```
vim ~/.ssh/config
```

添加以下内容

```
Host github.com
  Hostname ssh.github.com
  Port 443
```

重新测试一下

```
$ ssh -T git@github.com
Hi xxxxx! You've successfully authenticated, but GitHub does not
provide shell access.
```
