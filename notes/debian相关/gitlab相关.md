1. 启动 GitLab：
   `sudo gitlab-ctl start`
2. 停止 GitLab：
   `sudo gitlab-ctl stop`
3. 重启 GitLab：
   `sudo gitlab-ctl restart`
4. 查看 GitLab 状态：
   `sudo gitlab-ctl status`
5. 设置 GitLab 开机启动：
   GitLab 通常会在安装时自动设置为开机启动。如果需要手动设置，可以使用以下命令：
   `sudo systemctl enable gitlab-runsvdir`
6. 禁用 GitLab 开机启动：
   `sudo systemctl disablegitlab-runsvdir`

### 一、 解决 GitLab 未启动 systemctl start gitlab-runsvdir.service 无反应

报错如下

```
$ sudo gitlab-ctl start
fail: alertmanager: runsv not running
fail: gitaly: runsv not running
fail: gitlab-exporter: runsv not running
fail: gitlab-workhorse: runsv not running
fail: grafana: runsv not running
fail: logrotate: runsv not running
fail: nginx: runsv not running
fail: node-exporter: runsv not running
fail: postgres-exporter: runsv not running
fail: postgresql: runsv not running
fail: prometheus: runsv not running
fail: puma: runsv not running
fail: redis: runsv not running
fail: redis-exporter: runsv not running
fail: sidekiq: runsv not running
```

解决方法

```bash
# 查看正在启动的任务
sudo systemctl list-jobs

# 手动关闭plymouth-quit-wait.service
sudo systemctl stop plymouth-quit-wait.service
# 重启gitlab
sudo systemctl start gitlab-runsvdir.service
sudo gitlab-ctl start
```
