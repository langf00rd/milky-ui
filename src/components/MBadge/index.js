import React from 'react'
import { StyledMBadge } from './styles'

export const MBadge = ({ label, bg, size, textColor, radius, fontSize }) => {
  return (
    <StyledMBadge
      bg={bg}
      textColor={textColor}
      radius={radius}
      fontSize={fontSize}
      size={size}
    >
      {label}
    </StyledMBadge>
  )
}
