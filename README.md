# EffortlessCSS

[![npm version](https://badge.fury.io/js/effortlesscss.svg)](https://badge.fury.io/js/effortlesscss)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

EffortlessCSS 是一个 PostCSS 插件，能够自动从项目文件中的 `className` 属性生成对应的 CSS 规则，支持 TailwindCSS 类似的语法。

## 特性

- 🚀 **自动扫描**：自动扫描项目中的 JS/TS/JSX/TSX/HTML 文件
- 🎨 **Tailwind 语法支持**：支持 `color-red`、`m-1`、`w-[100px]` 等语法
- 🔥 **热更新支持**：开发环境下支持文件变化监听和热更新
- 📦 **零配置**：开箱即用，无需复杂配置
- 🛠 **PostCSS 插件**：无缝集成到现有构建流程

## 安装

```bash
npm install effortlesscss --save-dev
# 或
yarn add effortlesscss --dev
# 或
pnpm add effortlesscss --save-dev
```

## 使用方法

### 1. 在 PostCSS 配置中使用

```javascript
// postcss.config.js
module.exports = {
  plugins: [
    require('effortlesscss')(),
    // 其他插件...
  ]
}
```

### 2. 在 Umi.js 中使用

```javascript
// .umirc.ts
import { defineConfig } from '@umijs/max';
import effortlesscss from 'effortlesscss';

export default defineConfig({
  extraPostCSSPlugins: [effortlesscss()],
  // 其他配置...
});
```

### 3. 在 Webpack 中使用

```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('effortlesscss')()
                ]
              }
            }
          }
        ]
      }
    ]
  }
};
```

## 支持的语法

EffortlessCSS 支持以下类名语法：

### 尺寸类
- `w-[100px]` → `.w-\[100px\] { width: 100px; }`
- `h-[50%]` → `.h-\[50%\] { height: 50%; }`

### 边距和填充
- `m-1` → `.m-1 { margin: 1px; }`
- `p-2` → `.p-2 { padding: 2px; }`

### 颜色类
- `color-red` → `.color-red { color: red; }`
- `color-[#ff0000]` → `.color-\[#ff0000\] { color: #ff0000; }`
- `bg-blue-500` → `.bg-blue-500 { background-color: #blue500; }`

### 字体类
- `text-[16px]` → `.text-\[16px\] { font-size: 16px; }`
- `font-bold` → `.font-bold { font-weight: bold; }`

## 配置选项

```javascript
require('effortlesscss')({
  base: './src',           // 扫描的根目录，默认是 process.cwd()
  output: 'generated.css',  // 生成的CSS文件名
  watch: true              // 是否监听文件变化（开发环境默认开启）
})
```

## 开发

### 本地开发

```bash
# 克隆项目
git clone https://github.com/your-username/effortlesscss.git
cd effortlesscss

# 安装依赖
npm install

# 开发模式（监听文件变化）
npm run dev

# 构建
npm run build

# 打包成tgz文件
npm run pack
```

### 测试

在项目中测试插件：

```bash
# 在项目根目录链接本地包
npm link ../path/to/effortlesscss

# 在项目中使用
npm link effortlesscss
```

## 发布

### 发布到 npm

```bash
# 登录 npm
npm login

# 构建并发布
npm run build
npm publish

# 或者发布为公开包
npm publish --access public
```

### 版本管理

```bash
# 更新版本号
npm version patch  # 修复版本
npm version minor  # 小版本
npm version major  # 大版本

# 发布新版本
npm publish
```

## 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 贡献

欢迎提交 Issue 和 Pull Request！

## 更新日志

### v1.0.0
- 初始版本发布
- 支持基本类名扫描和CSS生成
- 支持热更新和文件监听
- 支持TailwindCSS类似语法