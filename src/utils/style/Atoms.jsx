import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from './colors'

export const StyledLink = styled(Link)`
    font-size: 24px;
    color: ${colors.primary};
    padding: 50px;
    display: flex;
    align-items: flex-end;
    text-align: right;
    text-decoration: none;
    &:hover{
        text-decoration-line: underline;
    }
`