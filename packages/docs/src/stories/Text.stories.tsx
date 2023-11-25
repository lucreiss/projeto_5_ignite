import type { StoryObj, Meta } from "@storybook/react";

import { Text, TextProps } from "@ignite-ui/react";


export default {
  title: "Typography/Text",
  component: Text,

  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque debitis tempora minus aliquid quia et, accusantium fugit explicabo deserunt? Assumenda minima voluptas soluta eos nihil ducimus sit, mollitia quo praesentium!',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    }
  }
} as Meta<TextProps>;


// export const Primary = (args: StoryObj) => <Button {...args} />;
// export const Secondary = (args: StoryObj) => <Button {...args} />;
export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Custom tag',
    as: 'strong'
  }
}
