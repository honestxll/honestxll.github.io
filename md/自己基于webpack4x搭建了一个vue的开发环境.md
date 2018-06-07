# 前言

折腾了两个小时研究了一下，弄了一个很 `basic` 的模版，类似于

```bash
vue init webpack-simple xxx
```

创建出来的 `webpack3` 的模版，不同的地方就是更加的简单一点，用的 `webpack4`，代码放在了 [git 仓库里](https://github.com/honestxll/webpack4-vue.git)。

# 目录结构

```bash
tree vue-webpack-test -I node_modules
vue-webpack-test
├── dist
│   ├── bundle.js
│   └── index.html
├── index.html
├── package-lock.json
├── package.json
├── src
│   ├── App.vue
│   └── main.js
└── webpack.config.js

2 directories, 8 files
```

# 配置文件

package.json

```js
{
  "name": "vue-webpack-test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "webpack-dev-server --hot --open",
    "build": "webpack --progress --hide-modules"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.4",
    "babel-preset-env": "^1.7.0",
    "css-loader": "^0.28.11",
    "file-loader": "^1.1.11",
    "html-loader": "^0.5.5",
    "html-webpack-plugin": "^3.2.0",
    "node-sass": "^4.9.0",
    "sass-loader": "^7.0.3",
    "style-loader": "^0.21.0",
    "url-loader": "^1.0.1",
    "vue-loader": "^15.2.4",
    "vue-style-loader": "^4.1.0",
    "vue-template-compiler": "^2.5.16",
    "webpack": "^4.11.1",
    "webpack-cli": "^3.0.3",
    "webpack-dev-server": "^3.1.4"
  },
  "dependencies": {
    "vue": "^2.5.16"
  }
}
```

webpack.config.js

```js
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const debug = false

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname ,'dist')
  },
  mode: 'development',
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.css$/, loader: 'vue-style-loader!css-loader' },
      { test: /\.scss$/, loader: 'vue-style-loader!css-loader!sass-loader' },
      { test: /\.js/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: 'file-loader?name=[name].[ext]?[hash]' }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'My Webpack App',
      minify: debug ? false : {
        collapseWhitespace: true
      },
    }),
  ]
}
```

# 总结

从 [vue-loader官网](https://vue-loader.vuejs.org/migrating.html#notable-breaking-changes) 中找到了从 `vue-loader v14` 迁移到 `vue-loader v15` 的方法。

> Vue Loader v15现在需要一个附带的webpack插件才能正常工作

# 注意事项

在使用 `vue` 和其模版的时候，不要使用 `CommonJs` 加载，如果非要用 `CommonJs` 方法的话，可以像下面这样：

```js
const Vue = require('vue').default
```
