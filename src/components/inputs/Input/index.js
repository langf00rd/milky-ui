import React from 'react'
import { StyledInput, StyledMultilineInput } from './styles'

export const Input = ({
  disabled = false,
  height = '',
  resize = '',
  padding = '',
  isMultiline = false,
  onChange = () => {},
  value,
  focusBg = '',
  focusBorderColor = '',
  width = '',
  radius = '',
  placeholder = '',
  borderColor = '',
  bg = '',
  custom
}) => {
  if (isMultiline)
    return (
      <StyledMultilineInput
        focusBorderColor={focusBorderColor}
        borderColor={borderColor}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        custom={custom}
        focusBg={focusBg}
        padding={padding}
        resize={resize}
        radius={radius}
        height={height}
        value={value}
        width={width}
        bg={bg}
      />
    )

  return (
    <StyledInput
      focusBorderColor={focusBorderColor}
      borderColor={borderColor}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      focusBg={focusBg}
      padding={padding}
      radius={radius}
      value={value}
      width={width}
      bg={bg}
    />
  )
}
