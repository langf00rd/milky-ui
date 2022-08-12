import styledComponents from 'styled-components'
import { colors } from '../../constants/colors.const'
import { constStyles } from '../../constants/styles.const'

export const StyledLabel = styledComponents.div`
    background: ${(p) => (p.bg ? p.bg : colors.primary)};
    border-radius: ${constStyles.radius};
    color: ${(p) => (p.color ? p.color : '#fff')};
    padding: 2px 8px;
`
