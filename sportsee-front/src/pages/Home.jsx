import styled from 'styled-components'
import Profils from '../components/Profils'

const Container = styled.div`
  box-sizing: border-box;
  margin-left: 117px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
`

function Home() {
  return (
    <Container>
      <Profils />
    </Container>
  )
}

export default Home
