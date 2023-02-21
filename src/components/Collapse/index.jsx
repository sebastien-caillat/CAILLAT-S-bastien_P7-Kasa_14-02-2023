import styled from "styled-components";
import colors from "../../utils/style/colors"

const StyledCollapse = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    height: 47px;
    background-color: ${colors.primary};
`

const StyledToggleButton = styled.button`
    transform: rotate(90deg);
    color: #FFFFFF;
    background-color: ${colors.primary};
    border: none;
    margin-right: 15px;
    font-size: 40px;
`

const StyledTitle = styled.h2`
    font-size: 24px;
    color: #FFFFFF;
`

function Collapse() {

    // const [open, setOpen] = useState(false);

    return(
        <StyledCollapse>
            <StyledTitle>Collapse</StyledTitle>
            <StyledToggleButton> {'>'} </StyledToggleButton>
        </StyledCollapse>
    )
}

export default Collapse