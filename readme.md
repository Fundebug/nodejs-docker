#### 构建镜像

```
sudo docker build -t fundebug/nodejs .
```

#### 运行容器

```
sudo docker run -d --net=host --name=hello-fundebug fundebug/nodejs
```

#### 测试

```
curl localhost:3000
Hello Fundebug!
```
