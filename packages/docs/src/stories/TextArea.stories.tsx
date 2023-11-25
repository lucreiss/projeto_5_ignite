import type { StoryObj, Meta } from "@storybook/react";

import { Box, Text, TextArea, TextAreaProps } from "@ignite-ui/react";


export default {
  title: "Form/Text Area",
  component: TextArea,

  args: {
    disabled: false,
  },
  decorators: [
    (Story) => (
      <Box as='label' css={{display:'flex', flexDirection:'column', gap: '$2'}}>
        <Text  size='sm'>Observations</Text>
        {Story()}
      </Box>
    ),
  ]
} as Meta<TextAreaProps>;


// export const Primary = (args: StoryObj) => <Button {...args} />;
// export const Secondary = (args: StoryObj) => <Button {...args} />;
export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: "Add your observations here",
  },
}
