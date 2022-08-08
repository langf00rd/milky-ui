import React from 'react'
import { StyledMButton, StyledMLinkButton } from './styles'

export const MButton = ({ to, height, width, radius, borderColor, hoverBg, hoverTextColor, bg, textColor, label, action }) => {
    if (to) return (
        <StyledMLinkButton
            bg={bg}
            href={to}
            radius={radius}
            height={height}
            width={width}
            borderColor={borderColor}
            textColor={textColor}
            hoverTextColor={hoverTextColor}
            hoverBg={hoverBg}
            onClick={action}
        >{label}</StyledMLinkButton>
    )

    return (
        <StyledMButton
            bg={bg}
            radius={radius}
            height={height}
            width={width}
            borderColor={borderColor}
            textColor={textColor}
            hoverTextColor={hoverTextColor}
            hoverBg={hoverBg}
            onClick={action}
        >{label}</StyledMButton>
    )
}