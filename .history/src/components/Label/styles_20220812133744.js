import styledComponents from 'styled-components'
import { colors } from '../../constants/colors.const'
import { constStyles } from '../../constants/styles.const'

export const StyledLabel = styledComponents.div`
    background: ${p=>p.bg?p.bg:colors.primary};
    padding: 2px 8px;
    border-radius: ${constStyles.radius}
`
