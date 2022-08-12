import React from 'react'
import { StyledLabel } from './styles'

export const Label = (props) => {
  const { text, color, bg,type } = props
  return (
    <StyledLabel color={color} bg={bg}>
      {text}
    </StyledLabel>
  )
}
