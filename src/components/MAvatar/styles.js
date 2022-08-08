import styledComponents from 'styled-components'

export const StyledMAvatar = styledComponents.img`
    width: ${p => p.size ? p.size : '60px'};
    height: ${p => p.size ? p.size : '60px'};
    border-radius: ${p => p.radius ? p.radius : '9999px'};
    object-fit: ${p => p.fit ? p.fit : 'cover'};
    background: ${p => p.bg ? p.bg : '#f1f1f1'};
`;

export const StyledMEmptyAvatar = styledComponents.div`
    width: ${p => p.size ? p.size : '60px'};
    height: ${p => p.size ? p.size : '60px'};
    border-radius: ${p => p.radius ? p.radius : '9999px'};
    object-fit: ${p => p.fit ? p.fit : 'cover'};
    background: ${p => p.bg ? p.bg : '#f1f1f1'};
`;

export const StyledMAvatarWrapper = styledComponents.div`
    width: max-content;
`;