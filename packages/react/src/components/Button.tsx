import { ComponentProps, ElementType } from "react";

import { ArrowRight } from "phosphor-react";

import { styled } from "../styles";

export const Button = styled('button', {
  all: 'unset',
  boxSizing: 'border-box',

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: '$2',
  
  fontFamily: '$default',
  fontWeight: "$medium",
  fontSize: '$sm',
  textAlign: 'center',
  minWidth: 120,
  
  borderRadius: '$sm',
  padding: '0 $4',
  
  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        background: '$ignite500',
        color: "$white",

        '&:not(:disabled):hover': {
          background: '$ignite300',
        },

        '&:disabled': {
          background: '$gray200',
        },
      },
      secondary: {
        color: "$ignite300",
        border: '2px solid $ignite500',
        
        '&:not(:disabled):hover': {
          background: '$ignite500',
          color: '$white',
        },
        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },
      terciary: {
        background: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white',
        },
        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      }
    }
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  }
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}


export function ButtonWithIcon() {
  return (
    <Button>
      Proximo
      <ArrowRight weight="bold" />
    </Button>
  )
}

ButtonWithIcon.displayName = 'ButtonWithIcon'
Button.displayName = 'Button'