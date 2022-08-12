import styledComponents from 'styled-components'
import { colors } from '../../constants/colors.const'

export const StyledLabel = styledComponents.div`
    background: ${p=>p.bg?p.bg:colors.primary};
    padding: 2px 8px;
`
