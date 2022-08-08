import React from 'react'
import { StyledMInput, StyledMMultilineInput } from './styles'

export const MInput = ({ disabled, height, resize, padding, isMultiline, onChange, value, focusBg, focusBorderColor, width, radius, placeholder, borderColor, bg }) => {
    if (isMultiline) return (
        <StyledMMultilineInput
            focusBorderColor={focusBorderColor}
            borderColor={borderColor}
            placeholder={placeholder}
            onChange={onChange}
            disabled={disabled}
            focusBg={focusBg}
            padding={padding}
            resize={resize}
            radius={radius}
            height={height}
            value={value}
            width={width}
            bg={bg}
        ></StyledMMultilineInput>
    )

    return (
        <StyledMInput
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