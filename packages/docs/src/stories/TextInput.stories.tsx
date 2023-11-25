import type { StoryObj, Meta } from "@storybook/react";

import { Box, Text, TextInput, TextInputProps } from "@projeto_5/react";


export default {
  title: "Form/Text Input",
  component: TextInput,

  args: {
    disabled: false,
  },
  decorators: [
    (Story) => (
      <Box as='label' css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
        <Text size='sm'>User Name</Text>
        {Story()}
      </Box>
    ),
  ]
} as Meta<TextInputProps>;


// export const Primary = (args: StoryObj) => <Button {...args} />;
// export const Secondary = (args: StoryObj) => <Button {...args} />;
export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: "Type something...",
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: "call.com/",
  },
}
