import React from 'react'
import { StyledErrorLabel, StyledLabel, StyledSucessLabel } from './styles'

export const Label = (props) => {
  const { text, textColor, bg, type } = props
  if (type === 'success') return <StyledSucessLabel>{text}</StyledSucessLabel>
  if (type === 'error') return <StyledErrorLabel>{text}</StyledErrorLabel>
  return (
    <StyledLabel color={textColor} bg={bg}>
      {text}
    </StyledLabel>
  )
}
