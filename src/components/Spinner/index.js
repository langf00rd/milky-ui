import React from 'react'
import { StyledSpinner, StyledSpinner1, StyledSpinner2 } from './styles'

export const Spinner = (props) => {
  const { size, color, variant, thickness, speed } = props
  if (variant === 1)
    return (
      <StyledSpinner1
        thickness={thickness}
        speed={speed}
        size={size}
        color={color}
      />
    )
  if (variant === 2)
    return (
      <StyledSpinner2
        thickness={thickness}
        speed={speed}
        size={size}
        color={color}
      />
    )
  return (
    <StyledSpinner
      thickness={thickness}
      speed={speed}
      size={size}
      color={color}
    />
  )
}
