import { styled } from "../../styles";


export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  padding: '$3 $5',
  minWidth: '360px',
  width: 'fit-content',

  background: '$gray600',
  borderRadius: '$sm',

  fontFamily: '$default',
  color: '$gray200',

  div: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },

  strong: {
    fontSize: '$xl',
    lineHeight: '$base',
    color: '$white'
  },

  span: {
    fontSize: '$sm',
    lineHeight: '$base',
  }
})