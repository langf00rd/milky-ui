import React from 'react'
import { StyledLoader, StyledLoader1, StyledLoader2 } from './styles'

export const Loader = (props) => {
  const { size, color, variant, thickness, speed } = props
  if (variant === 1)
    return (
      <StyledLoader1
        thickness={thickness}
        speed={speed}
        size={size}
        color={color}
      />
    )
  if (variant === 2)
    return (
      <StyledLoader2
        thickness={thickness}
        speed={speed}
        size={size}
        color={color}
      />
    )
  return (
    <StyledLoader
      thickness={thickness}
      speed={speed}
      size={size}
      color={color}
    />
  )
}
