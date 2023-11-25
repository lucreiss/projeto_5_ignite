import { X } from 'phosphor-react'
import { Container } from './styles'

export interface ToastProps { }

export function Toast() {
  return (
    <Container>
      <div>
        <strong>Agendamento realizado</strong>
        <X size={20} />
      </div>
      <span>Quarta-feira, 23 de Outubro às 16h</span>
    </Container>
  )
}

