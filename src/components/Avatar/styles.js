import styledComponents from 'styled-components'

export const StyledAvatar = styledComponents.img`
    border-radius: ${(p) => (p.radius ? p.radius : '9999px')};
    background: ${(p) => (p.bg ? p.bg : '#f1f1f1')};
    object-fit: ${(p) => (p.fit ? p.fit : 'cover')};
    height: ${(p) => (p.size ? p.size : '60px')};
    width: ${(p) => (p.size ? p.size : '60px')};
    ${(p) => (p.custom ? p.custom : null)};
`

export const StyledEmptyAvatar = styledComponents.div`
    border-radius: ${(p) => (p.radius ? p.radius : '9999px')};
    background: ${(p) => (p.bg ? p.bg : '#f1f1f1')};
    object-fit: ${(p) => (p.fit ? p.fit : 'cover')};
    height: ${(p) => (p.size ? p.size : '60px')};
    width: ${(p) => (p.size ? p.size : '60px')};
    ${(p) => (p.custom ? p.custom : null)};
`

export const StyledAvatarWrapper = styledComponents.div`
    width: max-content;
`
