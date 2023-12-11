import type { Meta, StoryObj } from '@storybook/react';

import Button, { ButtonProps } from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
// const meta = {
//   title: 'Components/Button',
//   component: Button,
//   parameters: {
//     // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
//     layout: 'centered',
//   },
//   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
//   tags: ['autodocs'],
//   // More on argTypes: https://storybook.js.org/docs/api/argtypes
//   argTypes: {
//     // 这里的参数类型是根据组件的props来决定的
//     disabled: {
//       description: '是否禁用',
//       type: { name: 'boolean', required: false },
//       defaultValue: false,
//       control: { type: 'boolean' },
//     },
//     children: {
//       description: '按钮内容',
//       type: { name: 'string', required: false },
//       defaultValue: '按钮',
//       control: { type: 'text' },
//     },
//   },
// } satisfies Meta<typeof Button>;

// export default meta;
// type Story = StoryObj<typeof meta>;
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export default {
  component: Button,
  title: 'Components/Button',
};
const Template: Story<ButtonProps> = (args) => <Button {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: '按钮',
};
