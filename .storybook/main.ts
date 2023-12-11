import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links', // 用于在 Storybook UI 中显示链接到其他故事的链接
    '@storybook/addon-essentials', // 用于在 Storybook UI 中显示文档、源代码和控制面板
    '@storybook/addon-onboarding', // 用于在 Storybook UI 中显示关于如何使用 Storybook 的入门指南
    '@storybook/addon-interactions', // 用于在 Storybook UI 中显示交互式的组件
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
