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
  width: calc(100vw - 117px);
  padding: 4% 5% 7% 7%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
  height: calc(100% - 100px);
  width: 100%;
  justify-content: space-between;
`
const GraphContainer = styled.div`
  box-sizing: border-box;
  width: 30.5%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
`
const FirstBlock = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-between;
  width: 72%;
  height: 100%;
`
const SecondBlock = styled.div`
  box-sizing: border-box;
  width: 23%;
  height: 100%;
`
const FirstGroup = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 55%;
`
const SecondGroup = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 41%;
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
        console.log(
          `=====échec de récupération de l'ensemble des données=====`,
          error
        )
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
                  <ProfilLineChart
                    data={datas?.userSessions?.formatForLineChart()}
                  />
                </GraphContainer>
                <GraphContainer>
                  <ProfilRadar
                    data={datas?.userPerformance?.formatForRadar().reverse()}
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
