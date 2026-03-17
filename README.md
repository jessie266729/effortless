# Effortless CSS

[![npm version](https://badge.fury.io/js/effortless.svg)](https://badge.fury.io/js/effortless)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Effortless CSS 是一个现代化的 PostCSS 插件，能够智能地从项目文件中的 `className` 属性动态生成对应的 CSS 规则。

## ✨ 核心特性

- 🚀 **智能扫描**：自动扫描 JS/TS/JSX/TSX/HTML 文件，提取 className 属性
- 🎨 **丰富语法**：支持 `属性-[值]` 语法，如 `w-[100px]`、`color-[#ff0000]`
- ⚡ **高性能**：优化的正则匹配和字符串处理，支持大规模项目
- 🔥 **动画系统**：内置 40+ 预定义动画效果，支持自定义动画参数
- 🛡️ **安全验证**：完整的 CSS 属性值验证，防止生成无效 CSS
- 📦 **多格式输出**：同时支持 CommonJS 和 ES Module
- 🔧 **TypeScript**：完整的 TypeScript 类型定义
- 🎯 **状态支持**：原生支持 hover、focus 等状态类

## 🏗️ 架构优势

- **零运行时**：构建时生成 CSS，无运行时开销
- **Tree Shaking**：只生成实际使用的 CSS 规则
- **模块化设计**：易于扩展和自定义
- **现代构建**：使用 Rollup 构建，支持 Source Map

## 📦 安装

```bash
# npm
npm install effortless --save-dev

# yarn
yarn add effortless --dev

# pnpm
pnpm add effortless --save-dev
```

## 🚀 使用方法

### 1. PostCSS 配置

```javascript
// postcss.config.js
module.exports = {
  plugins: [
    require('effortless')(),
    // 其他插件...
  ]
}
```

### 2. Umi.js 项目

```javascript
// .umirc.ts
import { defineConfig } from '@umijs/max';
import effortless from 'effortless';

export default defineConfig({
  extraPostCSSPlugins: [effortless()],
  // 其他配置...
});
```

### 3. Webpack 配置

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
                  require('effortless')()
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

### 4. Vite 项目

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import effortless from 'effortless';

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        effortless()
      ]
    }
  }
});
```

## 🎨 语法指南

### 基础属性语法

```html
<!-- 尺寸属性 -->
<div className="w-[100px] h-[50%] min-w-[200px] max-h-[300px]">
  <!-- 生成: .w-\[100px\] { width: 100px; } -->
</div>

<!-- 边距和填充 -->
<div className="m-[10px] p-[20px_10px] mt-[5px] mb-[15px]">
  <!-- 生成: .p-\[20px_10px\] { padding: 20px 10px; } -->
</div>

<!-- 颜色和背景 -->
<div className="color-[#ff0000] bg-[rgb(255,0,0)] border-color-[#00ff00]">
  <!-- 生成: .color-\[#ff0000\] { color: #ff0000; } -->
</div>

<!-- 字体和文本 -->
<div className="text-[16px] font-[bold] line-height-[1.5] text-align-[center]">
  <!-- 生成: .text-\[16px\] { font-size: 16px; } -->
</div>
```

### 状态类语法

```html
<!-- 支持 hover、focus、active 等状态 -->
<button className="hover:bg-[#f0f0f0] focus:border-[2px_solid_blue] active:scale-[0.95]">
  <!-- 生成: .hover\:bg-\[#f0f0f0\]:hover { background: #f0f0f0; } -->
</button>
```

### 动画系统

Effortless CSS 内置了丰富的动画效果：

```html
<!-- 基础动画 -->
<div className="animation-[fade-in_0.5s_ease-out]">淡入效果</div>
<div className="animation-[slide-in-up_0.3s]">上滑进入</div>
<div className="animation-[bounce_1s_infinite]">弹跳效果</div>

<!-- 组合动画 -->
<div className="animation-[fade-in-up_0.6s_ease-out_bounce-in_0.8s]">组合动画</div>

<!-- 现代UI动画 -->
<button className="animation-[float_3s_ease-in-out_infinite]">浮动按钮</button>
<div className="animation-[pulse_2s_infinite]">脉动效果</div>
```

### 支持的动画类别

- **淡入淡出**: `fade-in`, `fade-out`, `fade-in-up`, `fade-in-down` 等
- **滑动效果**: `slide-in-up`, `slide-out-down`, `slide-in-left` 等
- **缩放效果**: `zoom-in`, `zoom-out`, `zoom-in-up` 等
- **弹跳效果**: `bounce`, `bounce-in`, `bounce-out`
- **旋转效果**: `spin`, `spin-reverse`, `rotate-in`
- **现代特效**: `float`, `jello`, `rubber-band`, `wobble`
- **加载动画**: `loading-spin`, `loading-pulse`, `progress`

## ⚙️ 配置选项

```javascript
require('effortless')({
  // 基础配置
  base: './src',                    // 扫描的根目录，默认 process.cwd()
  
  // 输出配置
  output: 'generated.css',          // 生成的CSS文件名
  minify: process.env.NODE_ENV === 'production', // 是否压缩输出
  
  // 扫描配置
  include: ['**/*.{js,jsx,ts,tsx,html}'], // 包含的文件模式
  exclude: ['node_modules', '.umi', '.umi-production'], // 排除的目录
  
  // 开发配置
  watch: process.env.NODE_ENV !== 'production', // 文件监听
  
  // 验证配置
  strict: true,                     // 严格模式，验证CSS属性值
  
  // 性能配置
  cache: true,                      // 启用缓存提升性能
  parallel: true                    // 并行处理
})
```

## 🛠️ 开发指南

### 项目结构

```
effortless/
├── src/
│   ├── animate/           # 动画系统
│   │   └── constant.ts    # 预定义动画
│   ├── utils/             # 工具函数
│   │   ├── generateCSS.ts # CSS生成核心
│   │   └── tools.ts       # 文件扫描工具
│   └── index.ts           # 主入口文件
├── dist/                  # 构建输出
├── package.json
├── rollup.config.js       # Rollup配置
└── tsconfig.json         # TypeScript配置
```

### 本地开发

```bash
# 克隆项目
git clone <repository-url>
cd effortless

# 安装依赖
pnpm install

# 开发模式（监听文件变化）
pnpm run dev

# 构建项目
pnpm run build

# TypeScript类型检查
pnpm run type-check
```

### 测试插件

```bash
# 在包目录链接
cd packages/effortless
pnpm link --global

# 在项目中使用
cd /path/to/your/project
pnpm link effortless
```

## 📈 性能优化

### 构建优化
- 使用 Rollup 进行 Tree Shaking
- 支持 Source Map 便于调试
- 生产环境自动压缩代码

### 运行时优化
- 智能缓存机制
- 并行文件处理
- 增量扫描更新

### 内存优化
- 使用 Set 数据结构去重
- 流式字符串处理
- 及时释放内存

## 🔧 高级用法

### 自定义动画

您可以扩展预定义的动画系统：

```typescript
// 扩展动画常量
import { PREDEFINED_KEYFRAMES } from 'effortless';

const customAnimations = {
  ...PREDEFINED_KEYFRAMES,
  'my-custom-animation': '@keyframes my-custom-animation { /* 自定义关键帧 */ }'
};
```

### 插件扩展

EffortlessCSS 采用模块化设计，易于扩展：

```typescript
// 自定义CSS生成器
import { generateCSS } from 'effortless';

function customGenerateCSS(classNames: string[]): string {
  const baseCSS = generateCSS(classNames);
  // 添加自定义逻辑
  return baseCSS + customRules;
}
```

## 🤝 贡献指南

我们欢迎各种形式的贡献！

### 报告问题
- 使用 [GitHub Issues](https://github.com/your-username/effortless/issues) 报告 bug
- 提供详细的重现步骤和环境信息

### 提交代码
1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

### 开发规范
- 使用 TypeScript 编写代码
- 遵循现有的代码风格
- 添加适当的测试用例
- 更新相关文档

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🏆 致谢

感谢所有为这个项目做出贡献的开发者！

## 🔗 相关链接

- [GitHub Repository](https://github.com/your-username/effortless)
- [npm Package](https://www.npmjs.com/package/effortless)
- [Issue Tracker](https://github.com/your-username/effortless/issues)

## 📊 版本历史

### v1.0.0 (当前)
- 🎉 初始稳定版本发布
- ✨ 完整的动画系统（40+ 预定义动画）
- 🔧 安全的CSS属性值验证
- ⚡ 性能优化和缓存机制
- 📦 多格式输出支持（CJS/ESM）
- 🛠️ TypeScript 完整支持
- 🎨 状态类语法支持（hover、focus等）

### 即将到来
- 🔮 CSS变量支持
- 🌐 响应式断点语法
- 🎯 更智能的类名解析
- 📱 移动端优化

---

**Effortless CSS** - 让CSS编写变得轻松愉快！ 🚀