import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i, // 当前的控制面板中的颜色控件将匹配 background 或 color 结尾的控制
        date: /Date$/i, // 当前的控制面板中的日期控件将匹配 Date 结尾的控制
      },
    },
  },
};

export default preview;
