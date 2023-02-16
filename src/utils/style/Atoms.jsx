import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from './colors'

export const StyledLink = styled(Link)`
    color: ${colors.primary};
    padding: 50px;
    display: flex;
    align-items: flex-end;
    text-align: right;
    text-decoration-line: underline;
`