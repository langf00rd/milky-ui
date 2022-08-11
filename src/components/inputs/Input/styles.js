import styledComponents from 'styled-components'

export const StyledInput = styledComponents.input`
    border: 1px solid;
    border-radius: ${(p) => (p.radius ? p.radius : '10px')};
    background: ${(p) => (p.bg ? p.bg : '#fff')};
    height: ${(p) => (p.height ? p.height : '')};
    border-color: ${(p) => (p.borderColor ? p.borderColor : '#e1e1e1')};
    padding: ${(p) => (p.padding ? p.padding : '1rem')};
    width: ${(p) => (p.width ? p.width : '100%')};
    text-align: left;
    outline: none;
    transition: 0.1s linear;

    &:focus {
        background: ${(p) => (p.focusBg ? p.focusBg : '#fff')};
        border-color: ${(p) =>
          p.focusBorderColor ? p.focusBorderColor : '#e1e1e1'};
    }

    &:disabled {
        background: #f1f1f1cc;
    }

    ${(p) => (p.custom ? p.custom : null)};
`

export const StyledMultilineInput = styledComponents.textarea`
    border-radius: ${(p) => (p.radius ? p.radius : '10px')};
    border: 1px solid;
    height: ${(p) => (p.height ? p.height : '')};
    resize ${(p) => (p.resize ? p.resize : 'none')};
    background: ${(p) => (p.bg ? p.bg : '#fff')};
    border-color: ${(p) => (p.borderColor ? p.borderColor : '#e1e1e1')};
    padding: ${(p) => (p.padding ? p.padding : '1rem')};
    width: ${(p) => (p.width ? p.width : '100%')};
    text-align: left;
    outline: none;
    transition: 0.1s linear;
    font-family: inherit;

    &:focus {
        background: ${(p) => (p.focusBg ? p.focusBg : '#fff')};
        border-color: ${(p) =>
          p.focusBorderColor ? p.focusBorderColor : '#e1e1e1'};
    }

    &:disabled {
        background: #f1f1f1cc;
    }

    ${(p) => (p.custom ? p.custom : null)};
`
