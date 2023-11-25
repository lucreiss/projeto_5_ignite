import { styled } from "../../styles"

export const Container = styled('div', {
  position: 'relative',
  display: 'block',
  width: 'fit-content',
})


export const DetailsContainer = styled('div', {
  position: 'absolute',

  fontFamily: '$default',
  whiteSpace: 'nowrap',
  color: '$gray100',

  backgroundColor: '$gray900',
  borderRadius: '$sm',
  padding: '$3 $4 ',

  variants: {},

  '&::after': {
    content: "",
    position: 'absolute',
    
    top: '100%',
    left: '50%',
    
    marginLeft: '-8px',
    borderWidth: '8px',
    borderStyle: 'solid',
    borderColor: '$gray900 transparent transparent transparent',
  }
})