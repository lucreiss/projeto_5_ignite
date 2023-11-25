import type { StoryObj, Meta } from "@storybook/react";

import { Box, Text, MultiStep, MultiStepProps } from "@ignite-ui/react";


export default {
  title: "Form/Multi Step",
  component: MultiStep,

  args: {
    size: 4,
    currentStep: 3,
  },
  decorators: [
    (Story) => (
      <Box as='label' css={{display:'flex', flexDirection:'column', gap: '$2'}}>
        {Story()}
      </Box>
    ),
  ]
} as Meta<MultiStepProps>;


// export const Primary = (args: StoryObj) => <Button {...args} />;
// export const Secondary = (args: StoryObj) => <Button {...args} />;
export const Primary: StoryObj<MultiStepProps> = {}