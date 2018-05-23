# Plugins

插件可以解决 `loader` 不能做的事情。比如我们不写 `index.html` 让 `webpack` 给我生成一个 `index.html` 文件，可以使用 `html-webpack-plugin`

先进入到项目的根目录安装一下，因为 `html-webpack-plugin` 所以我们还需要在本地安装一个 `webpack`

```bash
npm init -y
npm i -D webpack html-webpack-plugin
```

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
  	new HtmlWebpackPlugin()
  ]
}
```
