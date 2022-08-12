import styledComponents from 'styled-components'
import { constStyles } from '../../../constants/styles.const'

export const StyledOutlinedButton = styledComponents.button`
    // padding: .7rem 1.3rem;
    // height: ${(p) => (p.height ? p.height : '')};
    // width: ${(p) => (p.width ? p.width : 'max-content')};
    // border: 2.3px solid ${(p) => (p.color ? p.color : '#007fff')};
    // cursor: pointer;
    // border-radius: ${(p) => (p.radius ? p.radius : '10px')};
    // background: transparent;
    // color: ${(p) => (p.color ? p.color : '#007fff')};
    // transition: 0.1s linear;
    // display:flex;
    // align-items:center;
    // justify-content:center;
    // user-select: none;

    border-radius: ${(p) => (p.radius ? p.radius : constStyles.radius)};
    border: 2.3px solid ${(p) => (p.color ? p.color : '#007fff')};
    width: ${(p) => (p.width ? p.width : 'max-content')};
    color: ${(p) => (p.color ? p.color : '#007fff')};
    height: ${(p) => (p.height ? p.height : '')};
    cursor: pointer;
    background: transparent;
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

    &:hover  {
        color: ${(p) => (p.hoverColor ? p.hoverColor : p.hoverColor)};
        border-color: ${(p) => (p.hoverColor ? p.hoverColor : p.hoverColor)};
    }

    &:active {
        box-shadow: rgb(38 57 77) 0px 6px 21px -11px;
        transform: scale(0.9);
    }

    ${(p) => (p.custom ? p.custom : null)};
`
