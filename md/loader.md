# Loader

`webpack` 本身只是一个模块打包工具，并不能做太多的事，它更多的是依赖 `loader` 加载器和 `plugins` 插件，这些包你可以在 `github.com` 或者是 `npmjs.org` 上找到。

比如我们想用 `webpack` 加载 `css` 模块，肯定是要使用 `css-loader`，简单的使用可以像这样：

```bash
npm i -D style-loader css-loader
```

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      // 可以使用 use 直接指定 loader
      { test: /\.css$/, use: 'style-loader' },
      // 注意使用 loader 这个选项可以把多个 loader 连起来使用
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      // 如果你想配置的更加详细或者是使用多个 loader 可以写成这样
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { modules: true }
          }
        ]
      }
    ]
  }
}
```

同一个规则的 `loader` 是由下往上执行的，比如上面就是先执行的 `css-loader` 再执行 `style-loader`.

如果你不想配置，还有一个内联的写法：

```js
import Styles from 'style-loader!css-loader?modules!./styles.css';
```

这里面运用到了一个小技巧，就是用 `get` 传参的方式把 `{modules: true}` 传给了 `css-loader`。不过虽然这种方式看起来不用配置啥的，但是我们最好还是 **尽可能使用 module.rules，因为这样可以减少源码中的代码量**
