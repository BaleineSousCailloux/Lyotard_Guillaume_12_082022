import styled from 'styled-components'
import Profils from '../components/Profils'

const Container = styled.div`
  height: 100%;
  width: calc(100% - 117px);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
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
