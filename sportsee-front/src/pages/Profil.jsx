import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../Utils/DataProvider'
import {
  GetUserDataOk,
  GetUserActivityOk,
  GetUserPerformanceOk,
  GetUserSessionsOk,
} from '../API/AllDatas'
import ProfilActivity from '../components/ProfilActivity'
import ProfilRadar from '../components/ProfilRadar'
import ProfilLineChart from '../components/ProfilLineChart'
import ProfilScore from '../components/ProfilScore'
import ProfilNutriments from '../components/ProfilNutriments'
import styled from 'styled-components'

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin-left: 117px;
  padding-left: 109px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  background: #ffffff;
  overflow: hidden;
`

const Welcome = styled.div`
  font-size: 18px;
`
const Hi = styled.h2`
  font-size: 48px;
  margin: 40px 0 0 0;
`
const Name = styled.span`
  color: #ff0101;
  padding-left: 10px;
`
const GraphContainer = styled.div`
  box-sizing: border-box;
  width: 258px;
  height: 263px;
  border-radius: 5px;
  margin-right: 30px;
  overflow: hidden;
`
const StatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  box-sizing: border-box;
  width: 100%;
  justify-content: stretch;
`
const FirstBlock = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`
const SecondBlock = styled.div`
  box-sizing: border-box;
  width: 258px;
`
const FirstGroup = styled.div`
  box-sizing: border-box;
  width: 834px;
  height: 320px;
  border-radius: 5px;
  margin-right: 30px;
  margin-bottom: 30px;
  overflow: hidden;
`
const SecondGroup = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`

function Profil() {
  const { userId } = useParams()
  const { dataSourceOnline } = useContext(DataContext)
  const [datas, setDatas] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function GetAllDatas() {
      try {
        const userDatas = await GetUserDataOk(dataSourceOnline, userId)
        const userActivity = await GetUserActivityOk(dataSourceOnline, userId)
        const userPerformance = await GetUserPerformanceOk(
          dataSourceOnline,
          userId
        )
        const userSessions = await GetUserSessionsOk(dataSourceOnline, userId)
        setDatas({ userDatas, userActivity, userPerformance, userSessions })
      } catch (error) {
        console.log('=====error=====', error)
      } finally {
        setIsLoading(false)
      }
    }
    GetAllDatas()
  }, [dataSourceOnline, userId])

  console.log(datas?.userDatas?.nutriments)

  return (
    <Container>
      {isLoading ? (
        'Loading...'
      ) : (
        <div>
          <Welcome>
            <Hi>
              <span>Bonjour</span>
              <Name>{datas?.userDatas?.userFirstName}</Name>
            </Hi>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </Welcome>
          <StatsContainer>
            <FirstBlock>
              <FirstGroup>
                <ProfilActivity data={datas?.userActivity?.formatActivity()} />
              </FirstGroup>
              <SecondGroup>
                <GraphContainer>
                  <ProfilRadar
                    data={datas?.userPerformance?.formatForRadar().reverse()}
                  />
                </GraphContainer>
                <GraphContainer>
                  <ProfilLineChart
                    data={datas?.userSessions?.formatForLineChart()}
                  />
                </GraphContainer>
                <GraphContainer>
                  <ProfilScore data={datas?.userDatas?.formatScore()} />
                </GraphContainer>
              </SecondGroup>
            </FirstBlock>
            <SecondBlock>
              <ProfilNutriments data={datas?.userDatas?.nutrimentsCount()} />
            </SecondBlock>
          </StatsContainer>
        </div>
      )}
    </Container>
  )
}
export default Profil
