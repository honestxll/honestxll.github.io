# 前言

理解和学习 `webpack` 可以带来很多好处，我一直都是只会简单使用。而如今 `webpack` 已经发展到了 `4x`，正好公司里的项目已经接近尾声，趁这个机会，在这里，我打算把自己接下来学习 `webpack` 的过程记录下来。

# 参考文档

- [webpack官网-英文文档](https://webpack.js.org/)
- [webpack中文网](https://webpack.docschina.org/)
- 详细的教程可以看 [Webpack中文指南](https://zhaoda.gitbooks.io/webpack/content/)
- [vue-loader 中文文档](https://vue-loader-v14.vuejs.org/zh-cn/)

# 学习目标

- 多页面的 `webpack` 配置
- 配合 `vue-loader` 可以自己搭建出一个适合自己的 `vue` 开发环境

# 准备工作

需要先了解以下内容：
- Node.js
- npm
- 模块加载 (CommonJS、AMD、CMD、UMD、ES6 模块)

我现在的 `webpack` 版本：

```bash
webpack -v
4.4.1
```

# 安装

```bash
npm i -g webpack webpack-cli
```

`4.x` 的 `webpack` 如果不安装 `webpack-cli` 会出现如下的提示：

```bash
The CLI moved into a separate package:webpack-cli.
Please install 'webpack-cli' in addition to webpack itself to use the CLI.
->when using npm: npm install webpack-cli -D
->when using yarn: yarn add webpack-cli -D
```

# 基础

我看文档上说 `4.x` 的 `webpack` 说是可以不用配置文件，那么我们先进到一个目录里面自己试一试运行一下 `webpack`，会出现以下的提示：

```bash
webpack
Hash: bf326f4e4360ffc2cd42
Version: webpack 4.4.1
Time: 76ms
Built at: 2018-5-23 11:55:32

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/concepts/mode/

ERROR in Entry module not found: Error: Can\'t resolve './src' in '/Users/honest/Desktop/study-webpack'
```

告诉我们没有设置打包模式会默认用 `production` 模式，也没有找到入口模块，我们来解决这些问题：

- 添加 `src` 目录
- 添加 `src/index.js` 文件
- 再运行 `webpack --mode development`

这次就没有问题了，所以我们可以猜测默认的配置文件应该如下：

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    output: 'bundle.js'
  }
}
```
