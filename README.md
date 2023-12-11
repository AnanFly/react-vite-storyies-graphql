# 项目搭建
1.npm init vite@latest，
2.选择react + ts +swc，
3.安装依赖 pnpm install，
4.npm run dev，启动项目
# 安装prettier
1.pnpm install --save-dev eslint-plugin-prettier eslint-config-prettier
2.在.eslintrc.js的entend中添加'plugin:prettier/recommended',
# 构建时增加ts类型声明
! Vite 虽然天然支持引入 .ts 文件，但 Vite 是使用 esbuild 将 Typescript 转译为 Javascript，而 ! esbuild 不做任何类型检查或声明输出
tsconfig.build.json 配置如下
```md
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    // 指定输出目录
    "outDir": "dist",
    // 不生成输出文件
    "noEmit": false,
    // 仅输出 d.ts 文件，不输出 JavaScript 文件。
    "emitDeclarationOnly": true,
    // 从项目中的 TypeScript 和 JavaScript 文件生成 .d.ts 文件。
    "declaration": true
  },
  "include": ["src/**/*"],
  "exclude": ["src/stories/*"]
}

```
# 配置package.json(--project：TypeScript 根据指定的配置文件编译项目)
```md
  "scripts": {
    "build": "vite build && tsc --project tsconfig.build.json",
  }
```
# 安装storybook
pnpm dlx storybook@latest init
// 这时候只需要在组件下创建一个.stories.tsx文件就可以了