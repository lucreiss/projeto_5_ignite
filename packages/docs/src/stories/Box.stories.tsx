import type { StoryObj, Meta } from "@storybook/react";

import { Box, BoxProps, Text } from "@projeto_5/react";


export default {
  title: "Surfaces/Box",
  component: Box,

  args: {
    children: (
      <>
        <h1>Ola</h1>
        <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores voluptatum nesciunt nisi cumque cum iste provident tempore magni consequuntur facere, explicabo officiis possimus perspiciatis! Numquam ullam dignissimos quibusdam sit reprehenderit!</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>;


// export const Primary = (args: StoryObj) => <Button {...args} />;
// export const Secondary = (args: StoryObj) => <Button {...args} />;
export const Primary: StoryObj<BoxProps> = {
  args: {
    variant: "primary",
  },
}

export const Secondary: StoryObj<BoxProps> = {
  args: {
    variant: "secondary",
  },
}