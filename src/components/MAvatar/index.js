import React from 'react'
import {
  StyledMAvatar,
  StyledMAvatarWrapper,
  StyledMEmptyAvatar
} from './styles'

export const MAvatar = ({
  action,
  alt,
  bg,
  isEmpty,
  fit,
  size,
  src,
  radius
}) => {
  if (isEmpty)
    return (
      <StyledMAvatarWrapper>
        <StyledMEmptyAvatar
          fit={fit}
          bg={bg}
          size={size}
          radius={radius}
          src={src}
          alt={alt}
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
