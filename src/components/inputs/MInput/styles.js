import styledComponents from 'styled-components'

export const StyledMInput = styledComponents.input`
    padding: 0.7rem;
    border-radius: ${p => p.radius ? p.radius : '10px'};
    border: 1px solid;
    background: ${p => p.bg ? p.bg : '#f1f1f1'};
    border-color: ${p => p.borderColor ? p.borderColor : '#e1e1e1'};
    text-align: left;
    outline: none;
    transition: 0.1s linear;
    width: ${p => p.width ? p.width : '50%'};
    
    &:focus {
        background: #fff;
        background: ${p => p.activeBg ? p.activeBg : '#f1f1f1'};
        border-color: ${p => p.activeBorderColor ? p.activeBorderColor : '#e1e1e1'};
    }
`;