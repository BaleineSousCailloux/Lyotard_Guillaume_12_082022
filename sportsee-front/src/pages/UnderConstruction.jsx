import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  box-sizing: border-box;
  width: calc(100vw - 117px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ErrorNumber = styled.h1`
  color: #ff6010;
  font-size: 50px;
  font-weight: 700;
  text-align: center;
  margin: 0;
`

const Oups = styled.h2`
  color: #ff6010;
  font-size: 25px;
  font-weight: 500;
  text-align: center;
  margin: 30px 0 0 0;
`

const StyledLink = styled(Link)`
  color: #ff6010;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  margin: 150px 0 0 0;
`

function UnderConstruction() {
  return (
    <Container>
      <ErrorNumber>Cette fonctionnalité est en construction...</ErrorNumber>
      <Oups>Revenez voir prochainement 😉</Oups>
      <StyledLink to="/">Retourner à l'acccueil</StyledLink>
    </Container>
  )
}

export default UnderConstruction
