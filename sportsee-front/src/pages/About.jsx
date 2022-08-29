import Dropdown from '../components/Dropdown'
import styled from 'styled-components'
import couverture from '../assets/about-couverture.jpg'

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px 100px 0 100px;
  @media all and (max-width: 795px) {
    padding: 20px 20px 0 20px;
  }
`

const PageTitle = styled.div`
  width: 100%;
  height: 223px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  overflow: hidden;
  @media all and (max-width: 795px) {
    border-radius: 10px;
  }
`

const BlackFilter = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: #00000030;
  position: absolute;
  z-index: 1;
`

const Couverture = styled.img`
  position: absolute;
  width: 100%;
  height: none;
  object-fit: cover;
  transform: translate(0, 60px);
  @media all and (max-width: 795px) {
    transform: translate(-15px, -10px) scale(1.3);
    height: 100%;
    width: none;
  }
`

const ContainerDrops = styled.div`
  width: 85%;
  margin-bottom: 100px;
  @media all and (max-width: 795px) {
    width: 100%;
  }
`

function About() {
  return (
    <Container>
      <PageTitle>
        <BlackFilter />
        <Couverture src={couverture} alt="image de couverture" />
      </PageTitle>
      <ContainerDrops>
        <Dropdown
          about
          title="Fiabilité"
          description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        />
        <Dropdown
          about
          title="Respect"
          description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Dropdown
          about
          title="Service"
          description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <Dropdown
          about
          title="Sécurité"
          description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </ContainerDrops>
    </Container>
  )
}

export default About
