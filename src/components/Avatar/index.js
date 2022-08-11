import React from 'react'
import { StyledAvatar, StyledAvatarWrapper, StyledEmptyAvatar } from './styles'

export const Avatar = ({
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
      <StyledAvatarWrapper>
        <StyledEmptyAvatar
          fit={fit}
          bg={bg}
          custom={custom}
          size={size}
          radius={radius}
          src={src}
          onClick={action}
          isEmpty={isEmpty}
        />
      </StyledAvatarWrapper>
    )

  return (
    <StyledAvatarWrapper>
      <StyledAvatar
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
    </StyledAvatarWrapper>
  )
}
