import React from 'react'
import { StyledLoader, StyledLoader1, StyledLoader2 } from './styles'

export const Loader = (props) => {
  const { size, color, variant } = props
  if (variant === 1) return <StyledLoader1 size={size} color={color} />
  if (variant === 2) return <StyledLoader2 size={size} color={color} />
  return <StyledLoader size={size} color={color} />
}
