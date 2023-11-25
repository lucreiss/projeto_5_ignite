import { ComponentProps } from "react"
import { styled } from "../styles"

export const Box = styled('div', {
  // Reset
  boxSizing: 'border-box',
  padding: '$6',
  borderRadius: '$md',
  background: '$gray800',
  border: '1px solid $gray600',


  // Default
  variants: {
    variant: {
      primary: {
      },
      secondary: {
        backgroundColor: '$ignite300',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export interface BoxProps extends ComponentProps<typeof Box> { }

Box.displayName = 'Box'