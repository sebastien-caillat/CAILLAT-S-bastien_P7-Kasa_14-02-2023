import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from './colors'

export const StyledLink = styled(Link)`
    font-size: 24px;
    line-height: 2.3;
    color: ${colors.primary};
    display: flex;
    align-items: flex-end;
    text-decoration: none;
    margin-left: 57px;
    &:hover{
        text-decoration-line: underline;
    }
    @media(max-width: 768px) {
        font-size: 12px;
        text-transform: uppercase;
        line-height: 5;
        padding: 10px;
        margin-left: 10px;
    }
`

export const StyledLinkErrorPage = styled(Link)`
    font-size: 24px;
    color: ${colors.primary};
`