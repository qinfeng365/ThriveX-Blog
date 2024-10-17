# 如果服务器配置较低，建议使用如下脚本：
# 需要在本地运行 npm run build 将打包好的文件上传到服务器，最后执行 docker 命令

# <-----------------------------
# 使用官方的Node.js镜像作为基础镜像
# FROM node:20-alpine

# # 设置工作目录
# WORKDIR /thrive

# # 复制所有文件到工作目录
# COPY . /thrive

# # 暴露应用运行的端口
# EXPOSE 9001

# # 启动Next.js应用
# CMD ["npm", "start"]
# ------------------------------>



# 如果服务器配置高，可以采用如下脚本：
# 使用服务器打包，实现全自动

# <-----------------------------
# 使用官方的Node.js镜像作为基础镜像
FROM node:20-alpine

# 设置工作目录
WORKDIR /thrive

# 配置 npm 镜像源
RUN npm config set registry https://registry.npmmirror.com

# 复制package.json和package-lock.json
COPY package*.json /thrive

# 安装依赖
RUN npm install

# 复制所有文件到工作目录
COPY . /thrive

# 构建Next.js应用
RUN npm run build

# 暴露应用运行的端口
EXPOSE 9001

# 启动Next.js应用
CMD ["npm", "start"]
# ------------------------------>