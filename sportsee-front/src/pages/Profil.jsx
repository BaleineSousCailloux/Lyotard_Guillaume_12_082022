import React, { useEffect, useState, useContext, Fragment } from 'react'
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

const MainCont = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: calc(100% - 117px);
  padding: 55px 85px 90px 85px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`

const Welcome = styled.div`
  box-sizing: border-box;
  width: fit-content;
  font-size: 18px;
`
const Hi = styled.h2`
  font-size: 48px;
  margin: 0;
`
const Name = styled.span`
  color: #ff0101;
  padding-left: 10px;
`
const StatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  box-sizing: border-box;
  min-height: calc(100% - 200px);
  width: 100%;
  justify-content: space-between;
`
const GraphContainer = styled.div`
  box-sizing: border-box;
  margin: 30px 30px 0 0;
  width: 20%;
  height: 60%;
  border-radius: 5px;
  overflow: hidden;
`
const FirstBlock = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-between;
  min-width: 834px;
  width: calc(100% - 288px);
  margin-right: 30px;
  min-height: 100%;
`
const SecondBlock = styled.div`
  box-sizing: border-box;
  width: 258px;
  min-height: 100%;
`
const FirstGroup = styled.div`
  box-sizing: border-box;
  max-width: 100%;
  min-height: 320px;
  border-radius: 5px;
  padding-right: 30px;
  overflow: hidden;
`
const SecondGroup = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  max-width: 100%;
  min-height: 263px;
  justify-content: space-between;
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

  return (
    <MainCont>
      {isLoading ? (
        'Loading...'
      ) : (
        <Fragment>
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
              <ProfilNutriments
                nutriment={datas?.userDatas?.formatNutriments()}
                quantity={datas?.userDatas?.nutrimentsCount()}
              />
            </SecondBlock>
          </StatsContainer>
        </Fragment>
      )}
    </MainCont>
  )
}
export default Profil
