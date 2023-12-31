import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'My/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // 参数的控制面板或者说明
  argTypes: {
    children: { description: '按钮的内容' },
    size: { description: '按钮的大小' },
    disabled: { description: '按钮是否禁用' },
    className: { description: '按钮的类名' },
    btnType: { description: '按钮的类型' },
    href: { description: '按钮的链接' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Button',
  },
};

// export const Secondary: Story = {
//   args: {
//     children: 'Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     children: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     children: 'Button',
//   },
// };
