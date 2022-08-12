import styledComponents from 'styled-components'

export const StyledBadge = styledComponents.div`
  font-size: ${(p) => (p.fontSize ? p.fontSize : 'inherit')};
  border-radius: ${(p) => (p.radius ? p.radius : '500px')};
  color: ${(p) => (p.textColor ? p.textColor : '#fff')};
  min-width: ${(p) => (p.size ? p.size : '22px')};
  background: ${(p) => (p.bg ? p.bg : '#007fff')};
  height: ${(p) => (p.size ? p.size : '22px')};
  box-sizing: border-box;
  padding: 0 5px;
  vertical-align: middle;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 0;
  ${(p) => (p.custom ? p.custom : null)};
`
