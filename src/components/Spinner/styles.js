import styledComponents from 'styled-components'
import { colors } from '../../constants/colors.const'

export const StyledSpinner = styledComponents.div`
  width: ${(p) => (p.size ? p.size : '48px')};
  height: ${(p) => (p.size ? p.size : '48px')};
  border: ${(p) => (p.thickness ? p.thickness : '4px')} solid ${(p) =>
  p.color ? p.color : colors.primary};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation  ${(p) => (p.speed ? p.speed : '2s')} linear infinite;

  @keyframes rotation {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

/***/

export const StyledSpinner1 = styledComponents.div`
  width: ${(p) => (p.size ? p.size : '48px')};
  height: ${(p) => (p.size ? p.size : '48px')};
  border: 5px dotted ${(p) => (p.color ? p.color : colors.primary)};
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation ${(p) => (p.speed ? p.speed : '2s')} linear infinite;

  @keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`

/***/

export const StyledSpinner2 = styledComponents.div`
  width: ${(p) => (p.size ? p.size : '48px')};
  height: ${(p) => (p.size ? p.size : '48px')};
  border-radius: 50%;
  display: inline-block;
  border-top: ${(p) => (p.thickness ? p.thickness : '3px')} solid ${(p) =>
  p.color ? p.color : colors.primary};
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: rotation  ${(p) => (p.speed ? p.speed : '2s')} linear infinite;

  @keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`
