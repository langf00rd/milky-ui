import styledComponents from 'styled-components'
import { colors } from '../../../constants/colors.const'
import { constStyles } from '../../../constants/styles.const'

export const StyledInput = styledComponents.input`
    border-color: ${(p) =>
      p.borderColor ? p.borderColor : colors.borderColor};
    border-width: ${(p) => (p.borderWidth ? p.borderWidth : '1px')};
    border-radius: ${(p) => (p.radius ? p.radius : constStyles.inputRadius)};
    border-style: ${(p) => (p.borderStyle ? p.borderStyle : 'solid')};
    padding: 0.8rem 1rem;
    background: ${(p) => (p.bg ? p.bg : '#fff')};
    width: ${(p) => (p.width ? p.width : '100%')};
    outline-color: ${(p) =>
      p.focusBorderColor ? p.focusBorderColor : colors.inputOutlineColor};
    
    &:focus {
      box-shadow: 0 0 10px 0px ${colors.shadowColor};
      background: ${(p) => (p.focusBg ? p.focusBg : '#fff')};
    }

    &:disabled {
        background: ${colors.disabledInputColor};
    }

    &::placeholder {
      color: ${(p) =>
        p.placeholderColor ? p.placeholderColor : colors.placeholderColor}
    }

    ${(p) => (p.custom ? p.custom : null)};
`

export const StyledMultilineInput = styledComponents.textarea`
    border-radius: ${(p) => (p.radius ? p.radius : '8px')};
    border: 1px solid;
    height: ${(p) => (p.height ? p.height : '')};
    resize ${(p) => (p.resize ? p.resize : 'none')};
    background: ${(p) => (p.bg ? p.bg : '#fff')};
    border-color: ${(p) =>
      p.borderColor ? p.borderColor : colors.inputBorderColor};
    padding: ${(p) => (p.padding ? p.padding : '0.8rem 0.9rem')};
    width: ${(p) => (p.width ? p.width : '100%')};
    text-align: left;
    transition: 0.1s linear;
    font-family: inherit;
    outline-color: ${(p) =>
      p.inputOutlineColor ? p.inputOutlineColor : colors.inputOutlineColor};

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
