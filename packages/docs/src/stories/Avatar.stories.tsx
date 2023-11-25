import type { StoryObj, Meta } from "@storybook/react";

import { Avatar, AvatarProps } from "@ignite-ui/react";


export default {
  title: "Data display/Avatar",
  component: Avatar,

  args: {
    src: 'https://avatars.githubusercontent.com/u/64665878?v=4',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>;


// export const Primary = (args: StoryObj) => <Button {...args} />;
// export const Secondary = (args: StoryObj) => <Button {...args} />;
export const Primary: StoryObj<AvatarProps> = {}
export const Fallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  }
}