import React from 'react'
import { StyledMBadge } from './styles'

export const MBadge = ({
  label = '',
  bg = '',
  size = '',
  textColor = '',
  radius = '',
  fontSize = '',
  custom
}) => {
  return (
    <StyledMBadge
      bg={bg}
      textColor={textColor}
      radius={radius}
      fontSize={fontSize}
      size={size}
      custom={custom}
    >
      {label}
    </StyledMBadge>
  )
}
