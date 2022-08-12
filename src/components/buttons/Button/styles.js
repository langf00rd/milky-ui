import styledComponents from 'styled-components'
import { constStyles } from '../../../constants/styles.const'

export const StyledMButton = styledComponents.button`
    border-radius: ${(p) => (p.radius ? p.radius : constStyles.radius)};
    border: 2.3px solid ${(p) => (p.bg ? p.bg : '#007fff')};
    color: ${(p) => (p.textColor ? p.textColor : '#fff')};
    width: ${(p) => (p.width ? p.width : 'max-content')};
    background: ${(p) => (p.bg ? p.bg : '#007fff')};
    height: ${(p) => (p.height ? p.height : '')};
    cursor: pointer;
    transition: 0.1s linear;
    align-items:center;
    justify-content:center;
    user-select: none;
    display: inline-flex;
    -webkit-box-align: center;
    white-space: nowrap;
    vertical-align: middle;
    line-height: 1.2;
    padding: 0.4rem 0.7rem;

    &:hover {
        color: ${(p) => (p.hoverTextColor ? p.hoverTextColor : p.textColor)};
        border-color: ${(p) => (p.hoverBg ? p.hoverBg : p.hoverBg)};
        background: ${(p) => (p.hoverBg ? p.hoverBg : p.bg)};
    }

    &:active {
        transform: scale(0.9);
        box-shadow: rgb(38 57 77) 0px 6px 21px -11px;
    }

    ${(p) => (p.custom ? p.custom : null)};
`

/***/

export const StyledMLinkButton = styledComponents.a`
    height: ${(p) => (p.height ? p.height : '')};
    width: ${(p) => (p.width ? p.width : 'max-content')};
    border: 2.3px solid ${(p) => (p.bg ? p.bg : '#007fff')};
    cursor: pointer;
    border-radius: ${(p) => (p.radius ? p.radius : constStyles.radius)};
    background: ${(p) => (p.bg ? p.bg : '#007fff')};
    color: ${(p) => (p.textColor ? p.textColor : '#fff')};
    transition: 0.1s linear;
    align-items:center;
    justify-content:center;
    user-select: none;
    display: inline-flex;
    -webkit-box-align: center;
    white-space: nowrap;
    vertical-align: middle;
    line-height: 1.2;
    padding: 0.4rem 0.7rem;
    text-decoration: none;
    font-size: 14px;

    &:hover,
    &:active {
        color: ${(p) => (p.bg ? p.bg : p.textColor)};
        background: ${(p) => (p.hoverBg ? p.hoverBg : p.bg)};
        border-color: ${(p) => (p.hoverBg ? p.hoverBg : p.hoverBg)};
    }

    &:active {
        transform: scale(0.9);
        box-shadow: rgb(38 57 77) 0px 6px 21px -11px;
    }

    ${(p) => (p.custom ? p.custom : null)};
`
