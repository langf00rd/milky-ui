import styledComponents from 'styled-components';

export const StyledMOutlinedButton = styledComponents.button`
    padding: .7rem 1.3rem;
    height: ${p => p.height ? p.height : ''};
    width: ${p => p.width ? p.width : 'max-content'};
    border: 2.3px solid ${p => p.color ? p.color : '#007fff'};
    cursor: pointer;
    border-radius: ${p => p.radius ? p.radius : '10px'};
    background: transparent;
    color: ${p => p.color ? p.color : '#007fff'};
    transition: 0.1s linear;
    display:flex;
    align-items:center;
    justify-content:center;

    &:hover,
    &:active {
        color: ${p => p.hoverColor ? p.hoverColor : p.hoverColor};
        border-color: ${p => p.hoverColor ? p.hoverColor : p.hoverColor};
    }

    &:active {
        transform: scale(0.9);
        box-shadow: rgb(38 57 77) 0px 6px 21px -11px;
    }
`;