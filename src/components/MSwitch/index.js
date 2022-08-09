import React from 'react'
import { StyledMLabel, StyledMSwitch } from './style'

export const MSwitch = ({
  value = false,
  onChange = () => {},
  thumbColor,
  activeColor,
  inactiveColor
}) => {
  return (
    <span>
      <StyledMSwitch
        activeColor={activeColor}
        checked={value}
        onChange={onChange}
        type='checkbox'
        id='switch'
      />
      <StyledMLabel
        thumbColor={thumbColor}
        inactiveColor={inactiveColor}
        htmlFor='switch'
      />
    </span>
  )
}
