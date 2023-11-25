import type { StoryObj, Meta } from "@storybook/react";

import { Tooltip, TooltipProps } from "@projeto_5/react";


export default {
  title: "Notification/Tooltip",
  component: Tooltip,

  args: {
    disabled: false,
  },
  decorators: [
  ]
} as Meta<TooltipProps>;


export const Primary: StoryObj<TooltipProps> = {}