import React from 'react'
import { StyledBadge } from './styles'

export const Badge = ({
  label = '',
  bg = '',
  size = '',
  textColor = '',
  radius = '',
  fontSize = '',
  custom
}) => {
  return (
    <StyledBadge
      bg={bg}
      textColor={textColor}
      radius={radius}
      fontSize={fontSize}
      size={size}
      custom={custom}
    >
      {label}
    </StyledBadge>
  )
}
