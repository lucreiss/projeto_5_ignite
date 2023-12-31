import type { StoryObj, Meta } from "@storybook/react";

import { Heading, HeadingProps } from "@projeto_5/react";


export default {
  title: "Typography/Heading",
  component: Heading,

  args: {
    children: 'Custom title',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  }
} as Meta<HeadingProps>;


// export const Primary = (args: StoryObj) => <Button {...args} />;
// export const Secondary = (args: StoryObj) => <Button {...args} />;
export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1'
  },
  parameters: {
    docs: {
      description: {
        story: 'Por padrão, o componente Heading renderiza um h2. Você pode alterar o elemento HTML que ele renderiza usando a prop "as".'
      }
    }
  }
}
