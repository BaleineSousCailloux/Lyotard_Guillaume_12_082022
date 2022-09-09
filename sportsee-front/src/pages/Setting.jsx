import { useContext } from 'react'
import { DataContext } from '../Utils/DataProvider'
import styled from 'styled-components'

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 100%;
  width: calc(100% - 117px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
`
const CardWrapperOff = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 200px;
  width: 400px;
  border-radius: 10px;
  background: #ff0101;
`
const CardWrapperOn = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 200px;
  width: 400px;
  border-radius: 10px;
  background: #4dca22;
`

const CardTitleContainer = styled.div`
  margin: auto;
  line-height: 36px;
  z-index: 1;
  user-select: none;
`
const CardTitle = styled.h3`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  text-decoration: none;
  font-size: 36px;
  font-weight: 500;
  margin: 0;
`

const Gradient = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: linear-gradient(#ffffff00, #00000050);
  position: absolute;
`
/**
 * Settings Page
 * @returns Active switch between Offline Datas (mocked) and Online Datas (API)
 */
function Setting() {
  const { ToogleDataSource, dataSourceOnline } = useContext(DataContext)

  return (
    <Container>
      {(() => {
        if (dataSourceOnline === true) {
          return (
            <CardWrapperOn onClick={() => ToogleDataSource(dataSourceOnline)}>
              <Gradient />
              <CardTitleContainer>
                <CardTitle>Mode en ligne</CardTitle>
              </CardTitleContainer>
            </CardWrapperOn>
          )
        } else {
          return (
            <CardWrapperOff onClick={() => ToogleDataSource(dataSourceOnline)}>
              <Gradient />
              <CardTitleContainer>
                <CardTitle>Mode hors ligne</CardTitle>
              </CardTitleContainer>
            </CardWrapperOff>
          )
        }
      })()}
    </Container>
  )
}

export default Setting
