import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 配合storybook使用，开发组件库时使用
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/index.tsx'),
      name: 'anan-rcom',
      fileName: (format) => `anan-rcom.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // 确保外部化处理那些你不想打包进库的依赖
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
