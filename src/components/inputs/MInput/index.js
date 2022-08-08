import React from 'react'
import { StyledMInput } from './styles'

export const MInput = ({ onChange, value, activeBg, activeBorderColor, width, radius, placeholder, borderColor, bg }) => {
    return (
        <StyledMInput
            bg={bg}
            activeBg={activeBg}
            borderColor={borderColor}
            activeBorderColor={activeBorderColor}
            width={width}
            radius={radius}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    )
}