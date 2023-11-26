import type { StoryObj, Meta } from "@storybook/react";

import { Toast, ToastProps } from "@projeto_5/react";

export default {
  title: "Notification/Toast",
  component: Toast,

  args: {
    disabled: false,
  },
  decorators: [
  ]
} as Meta<ToastProps>;


export const Primary: StoryObj<ToastProps> = {
  
}