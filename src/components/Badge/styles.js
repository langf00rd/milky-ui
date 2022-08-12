import styledComponents from 'styled-components'

export const StyledBadge = styledComponents.div`
  background: ${(p) => (p.bg ? p.bg : '#007fff')};
  box-sizing: border-box;
  min-width: ${(p) => (p.size ? p.size : '22px')};
  height: ${(p) => (p.size ? p.size : '22px')};
  padding: 0 5px;
  border-radius: ${(p) => (p.radius ? p.radius : '500px')};
  vertical-align: middle;
  color: ${(p) => (p.textColor ? p.textColor : '#fff')};
  font-size: ${(p) => (p.fontSize ? p.fontSize : 'inherit')};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 0;
  ${(p) => (p.custom ? p.custom : null)};
`
