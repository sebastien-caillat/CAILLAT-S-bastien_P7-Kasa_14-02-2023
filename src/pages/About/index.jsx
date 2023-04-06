import styled from "styled-components"
import Banner from "../../components/Banner"
import Collapse from "../../components/Collapse"

const StyledAbout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: auto;
    margin-bottom: 550px;
    @media(max-width: 768px) {
        margin-bottom: 360px;
    }
`

function About() {
    return(
        <StyledAbout>
            <Banner origin='about' />
            <Collapse origin='about' label='Fiabilité'>
            <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
            </p>
            </Collapse>
            <hr />
            <Collapse origin='about' label='Respect'>
                <p>
                La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                </p>
            </Collapse>
            <hr />
            <Collapse origin='about' label='Service'>
                <p>
                Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                </p>
            </Collapse>
            <hr />
            <Collapse origin='about' label='Sécurité'>
                <p>
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                </p>
            </Collapse>
        </StyledAbout>        
    )
}

export default About