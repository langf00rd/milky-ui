import React from 'react'
import { StyledOutlinedButton } from './styles'

export const OutlineButton = ({
  height = '',
  width = '',
  radius = '',
  color = '',
  hoverColor = '',
  label = '',
  action = () => {},
  custom
}) => {
  return (
    <StyledOutlinedButton
      height={height}
      width={width}
      hoverColor={hoverColor}
      radius={radius}
      color={color}
      onClick={action}
      custom={custom}
    >
      {label}
    </StyledOutlinedButton>
  )
}
