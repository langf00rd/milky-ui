import React from 'react'
import { StyledLabel, StyledSucessLabel } from './styles'

export const Label = (props) => {
  const { text, color, bg,type } = props

  if(type==='sucess') <StyledSucessLabel color={color} bg={bg}>{text}
  </StyledSucessLabel>

  return (
    <StyledLabel color={color} bg={bg}>
      {text}
    </StyledLabel>
  )
}
