import {Root, Image, Fallback} from '@radix-ui/react-avatar'

import { styled } from "../../styles";


export const AvatarContainer = styled(Root, {
  borderRadius: "$full",
  display: "inline-block",
  width: '$12',
  height: '$12',
  overflow: "hidden",
})

export const AvatarImage = styled(Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: '$gray600',

  svg: {
    width: '$6',
    height: '$6',
    color: '$white'
  }
})


