import styledComponents from 'styled-components'

export const StyledSwitch = styledComponents.input`
    height: 0;
    width: 0;
    visibility: hidden;

    &:checked+label:after {
        left: calc(100% - 5px);
        transform: translateX(-100%);
    }

    &:checked+label {
        background: ${(p) => (p.activeColor ? p.activeColor : '#2195f351')};
    }
`

export const StyledLabel = styledComponents.label`
    cursor: pointer;
    text-indent: -9999px;
    width: 70px;
    height: 40px;
    display: block;
    border-radius: 100px;
    position: relative;
    background: ${(p) => (p.inactiveColor ? p.inactiveColor : '#2196f31f')};

    &:after {
        content: '';
        position: absolute;
        top: 5px;
        left: 5px;
        width: 30px;
        height: 30px;
        background: ${(p) => (p.thumbColor ? p.thumbColor : '#017cf9')};
        border-radius: 90px;
        transition: 0.3s;
    }

    &:active:after {
        width: 40px;
    }
`
