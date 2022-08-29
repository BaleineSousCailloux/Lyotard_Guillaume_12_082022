import { useContext } from 'react'
import { DataContext } from '../Utils/DataProvider'
import styled from 'styled-components'
import AllDatasProvider from '../API/AllDatasProvider'

const Container = styled.div`
  box-sizing: border-box;
  margin-left: 117px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
`

function Setting() {
  const { ToogleDataSource, dataSourceOnline } = useContext(DataContext)
  return (
    <Container>
      <button onClick={() => ToogleDataSource(dataSourceOnline)}>
        Mode en ligne
      </button>
      <AllDatasProvider />
    </Container>
  )

  //   const [isOnline, setIsOnline] = useState(false)

  //   return !isOnline ? (
  //     <div>
  //       return (
  //       <Container>
  //         <p onClick={() => setIsOnline(true)}>TEST1</p>
  //       </Container>
  //       )
  //     </div>
  //   ) : (
  //     <div>
  //       return (
  //       <Container>
  //         <p onClick={() => setIsOnline(false)}>TEST2</p>
  //       </Container>
  //       )
  //     </div>
  //   )
}

export default Setting
