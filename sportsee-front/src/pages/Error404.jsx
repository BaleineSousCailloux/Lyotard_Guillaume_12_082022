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
  color: #ff0000;
  font-size: 200px;
  font-weight: 700;
  text-align: center;
  margin: 0;
`

const Oups = styled.h2`
  color: #ff0000;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  margin: 0;
`

const StyledLink = styled(Link)`
  color: #ff0000;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  margin: 150px 0 0 0;
`

function Error404() {
  return (
    <Container>
      <ErrorNumber>404</ErrorNumber>
      <Oups>Oups ! La page que vous demandez n'existe pas.</Oups>
      <StyledLink to="/">Retourner à l'acccueil</StyledLink>
    </Container>
  )
}

export default Error404
