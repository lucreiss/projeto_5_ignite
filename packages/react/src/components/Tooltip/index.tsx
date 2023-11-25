import { ComponentProps } from 'react'
import { Container, DetailsContainer } from './styles'

export interface TooltipProps { }

export function Tooltip() {
  return (
    <Container>
      <DetailsContainer>

        21 de Outubro - Indisponível
      </DetailsContainer>
    </Container>
  )
}


Tooltip.displayName = 'Tooltip'