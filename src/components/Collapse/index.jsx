import styled from "styled-components";
import colors from "../../utils/style/colors"
import vector from "../../assets/vector.svg"

const StyledCollapse = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 47px;
    margin: 15px;
    border-radius: 5px;
    background-color: ${colors.primary};
`

const StyledToggleButton = styled.button`
    background-color: ${colors.primary};
    border: none;
    margin-right: 15px;
`

const StyledTitle = styled.h2`
    font-size: 24px;
    color: #FFFFFF;
    padding-left: 12px;
`

function Collapse() {

    // const [open, setOpen] = useState(false);

    return(
            <StyledCollapse>
                <StyledTitle>Collapse</StyledTitle>
                <StyledToggleButton><img src={vector} alt='vector' /></StyledToggleButton>
            </StyledCollapse>
    )
}

export default Collapse