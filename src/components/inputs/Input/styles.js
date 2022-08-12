import styledComponents from 'styled-components'
import { colors } from '../../../constants/colors.const'
import { constStyles } from '../../../constants/styles.const'

export const StyledInput = styledComponents.input`
    border-color: ${(p) =>
      p.borderColor ? p.borderColor : colors.borderColor};
    border-width: ${(p) => (p.borderWidth ? p.borderWidth : '1px')};
    border-radius: ${(p) => (p.radius ? p.radius : constStyles.radius)};
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
    outline-color: ${(p) =>
      p.focusBorderColor ? p.focusBorderColor : colors.inputOutlineColor};
    height: ${(p) => (p.height ? p.height : '')};
    resize ${(p) => (p.resize ? p.resize : 'none')};
    border-color: ${(p) =>
      p.borderColor ? p.borderColor : colors.borderColor};
      border-width: ${(p) => (p.borderWidth ? p.borderWidth : '1px')};
    border-radius: ${(p) => (p.radius ? p.radius : constStyles.radius)};
    border-style: ${(p) => (p.borderStyle ? p.borderStyle : 'solid')};
    background: ${(p) => (p.bg ? p.bg : '#fff')};
    width: ${(p) => (p.width ? p.width : '100%')};
    font-family: inherit;
    padding: 0.8rem 1rem;
    text-align: left;
    
    &:focus {
      background: ${(p) => (p.focusBg ? p.focusBg : '#fff')};
      box-shadow: 0 0 10px 0px ${colors.shadowColor};
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
