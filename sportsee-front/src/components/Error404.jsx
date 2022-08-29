import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px 100px 150px 100px;
  @media all and (max-width: 795px) {
    margin: 150px 0;
  }
`

const ErrorNumber = styled.h1`
  color: #ff6060;
  font-size: 288px;
  font-weight: 700;
  text-align: center;
  margin: 0;
  @media all and (max-width: 795px) {
    font-size: 96px;
  }
`

const Oups = styled.h2`
  color: #ff6060;
  font-size: 36px;
  font-weight: 500;
  text-align: center;
  margin: 0;
  @media all and (max-width: 795px) {
    font-size: 18px;
    padding: 0 57px;
  }
`

const StyledLink = styled(Link)`
  color: #ff6060;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  margin: 150px 0 0 0;
  @media all and (max-width: 795px) {
    font-size: 14px;
    margin: 133px 0 0 0;
  }
`

function Error404() {
  return (
    <Container>
      <ErrorNumber>404</ErrorNumber>
      <Oups>Oups ! La page que vous demandez n'existe pas.</Oups>
      <StyledLink to="/">Retourner à la page d'acccueil</StyledLink>
    </Container>
  )
}

export default Error404
