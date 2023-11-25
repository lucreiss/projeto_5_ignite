import {Root, Indicator} from '@radix-ui/react-checkbox'
import { styled, keyframes } from '../../styles'


export const CheckboxContainer = styled(Root, {
  all: 'unset',

  width: '$6',
  height: '$6',
  border: '2px solid $gray900',
  background: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,

  overflow: 'hidden',
  boxSizing: 'border-box',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  cursor: 'pointer',

  '&:focus, &[data-state="checked"]': {
    border: '2px solid $ignite300',
  },

  '&[data-state="checked"]': {
    backgroundColor: '$ignite300',
    borderColor: '$ignite300',
  },
})


const slideIn = keyframes({
  from: { transform: 'scale(0)' },
  to: { transform: 'scale(1)' },
})

const slideOut = keyframes({
  from: { transform: 'scale(1)' },
  to: { transform: 'scale(0)' },
})


export const CheckboxIndicator = styled(Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
})