import React from 'react'
import {
  StyledMAvatar,
  StyledMAvatarWrapper,
  StyledMEmptyAvatar
} from './styles'

export const MAvatar = ({
  action = () => {},
  alt = '',
  bg = '',
  isEmpty = false,
  fit = '',
  size = '',
  src = '',
  radius = '',
  custom
}) => {
  if (isEmpty)
    return (
      <StyledMAvatarWrapper>
        <StyledMEmptyAvatar
          fit={fit}
          bg={bg}
          custom={custom}
          size={size}
          radius={radius}
          src={src}
          onClick={action}
          isEmpty={isEmpty}
        />
      </StyledMAvatarWrapper>
    )

  return (
    <StyledMAvatarWrapper>
      <StyledMAvatar
        fit={fit}
        bg={bg}
        custom={custom}
        size={size}
        radius={radius}
        src={src}
        alt={alt}
        onClick={action}
        isEmpty={isEmpty}
      />
    </StyledMAvatarWrapper>
  )
}
