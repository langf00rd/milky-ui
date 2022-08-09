import styledComponents from 'styled-components'

export const StyledMBadge = styledComponents.div`
  background: ${(p) => (p.bg ? p.bg : '#007fff')};
  box-sizing: border-box;
  min-width: ${(p) => (p.size ? p.size : '18px')};
  height: ${(p) => (p.size ? p.size : '18px')};
  padding: 0 5px;
  border-radius: ${(p) => (p.radius ? p.radius : '500px')};
  vertical-align: middle;
  color: ${(p) => (p.textColor ? p.textColor : '#fff')};
  font-size: ${(p) => (p.fontSize ? p.fontSize : '11px')};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 0;
`
