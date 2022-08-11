import React from 'react'
import { StyledMButton, StyledMLinkButton } from './styles'

const LinkButton = ({ props }) => {
  const {
    bg,
    to,
    radius,
    label,
    height,
    width,
    borderColor,
    textColor,
    hoverTextColor,
    hoverBg,
    action,
    custom
  } = props
  return (
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
      custom={custom}
    >
      {label}
    </StyledMLinkButton>
  )
}

/***/

const DefaultButton = ({ props }) => {
  const {
    bg,
    radius,
    label,
    height,
    width,
    borderColor,
    textColor,
    hoverTextColor,
    hoverBg,
    action,
    custom
  } = props
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
      custom={custom}
    >
      {label}
    </StyledMButton>
  )
}

export const Button = (props) => {
  const { to } = props
  if (to) return <LinkButton props={props} />
  return <DefaultButton props={props} />
}
