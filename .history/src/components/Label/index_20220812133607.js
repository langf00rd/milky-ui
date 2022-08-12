import React from 'react'
import { StyledLabel } from './styles'

export const Label = (props) => {
    const {text} = props
  return <StyledLabel>
    {text}
  </StyledLabel>
}
