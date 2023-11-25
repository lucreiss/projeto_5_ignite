import type { StoryObj, Meta } from "@storybook/react";

import { Button, ButtonProps, ButtonWithIcon } from "@projeto_5/react";


export default {
  title: "Form/Button",
  component: Button,

  args: {
    children: "Send",
    variant: "primary",
    size: "md",
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "terciary"],
      control: "inline-radio",
    },
    size: {
      options: ["sm", "md"],
      control: "inline-radio",
    },
    onClick: { action: "click" },
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: "primary",
    disabled: false,
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: "secondary",
    disabled: false,
  },
}

export const Terciary: StoryObj<ButtonProps> = {
  args: {
    variant: "terciary",
    children: "Cancel",
    disabled: false,
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: "sm",
    disabled: false,
  },
}


export const WithIcon = (args: StoryObj) => <ButtonWithIcon {...args} />;
