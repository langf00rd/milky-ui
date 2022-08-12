import React from 'react'
import { StyledLabel, StyledSwitch } from './style'

export const Switch = ({
  value = false,
  onChange = () => {},
  thumbColor = '',
  activeColor = '',
  inactiveColor = ''
}) => {
  return (
    <span>
      <StyledSwitch
        activeColor={activeColor}
        checked={value}
        onChange={onChange}
        type='checkbox'
        id='switch'
      />
      <StyledLabel
        thumbColor={thumbColor}
        inactiveColor={inactiveColor}
        htmlFor='switch'
      />
    </span>
  )
}
