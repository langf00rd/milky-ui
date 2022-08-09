import React from 'react'
import { StyledMOutlinedButton } from './styles'

export const MOutlineButton = ({
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
    <StyledMOutlinedButton
      height={height}
      width={width}
      hoverColor={hoverColor}
      radius={radius}
      color={color}
      onClick={action}
      custom={custom}
    >
      {label}
    </StyledMOutlinedButton>
  )
}
