import React from 'react'
import { StyledErrorLabel, StyledLabel, StyledSucessLabel } from './styles'

export const Label = (props) => {
  const { text, color, bg, type } = props
  if (type === 'sucess') return <StyledSucessLabel>{text}</StyledSucessLabel>
  if (type === 'error') return <StyledErrorLabel>{text}</StyledErrorLabel>
  return (
    <StyledLabel color={color} bg={bg}>
      {text}
    </StyledLabel>
  )
}
