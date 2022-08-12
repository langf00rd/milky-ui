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
  borderStyle = '',
  placeholderColor = '',
  borderColor = '',
  bg = '',
  borderWidth = '',
  custom
}) => {
  if (isMultiline)
    return (
      <StyledMultilineInput
        focusBorderColor={focusBorderColor}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        custom={custom}
        focusBg={focusBg}
        padding={padding}
        borderWidth={borderWidth}
        resize={resize}
        radius={radius}
        height={height}
        value={value}
        borderStyle={borderStyle}
        placeholderColor={placeholderColor}
        borderColor={borderColor}
        width={width}
        bg={bg}
      />
    )

  return (
    <StyledInput
      focusBorderColor={focusBorderColor}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      focusBg={focusBg}
      padding={padding}
      borderWidth={borderWidth}
      radius={radius}
      borderStyle={borderStyle}
      placeholderColor={placeholderColor}
      borderColor={borderColor}
      value={value}
      width={width}
      bg={bg}
    />
  )
}
