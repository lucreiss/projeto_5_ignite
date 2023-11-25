import { styled } from "../../styles";
import { Text } from "../Text";


export const MultiStepContainer = styled('div', {})

export const Label = styled(Text, {
  color: '$gray200',

  defaultVariants: {
    size: 'xs',
  }
})


export const StepContainer = styled('div', {
  display: "grid",
  gridTemplateColumns: "repeat(var(--steps-size), 1fr)",
  
  gap: '$2',
  marginTop: '$1',
})

export const Step = styled('div', {
  height: '$1',
  borderRadius: '$px',
  position: "relative",

  variants: {
    status: {
      active: {
        backgroundColor: '$gray100',
      },
      done: {
        backgroundColor: '$gray200',
      },
      pending: {
        backgroundColor: '$gray600',
      },
    }
  },

  defaultVariants: {
    status: 'pending',
  }
})