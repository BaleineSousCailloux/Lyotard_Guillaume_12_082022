import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../Utils/DataProvider'
// import { GetUserDatasMocked } from '../API/fetchDatas.js'
import {
  GetUserDataOk,
  GetUserActivityOk,
  GetUserPerformanceOk,
  GetUserSessionsOk,
} from '../API/AllDatas'
import styled from 'styled-components'

const Container = styled.div`
  box-sizing: border-box;
  margin-left: 117px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
`

const Welcome = styled.div``
const Hi = styled.h2`
  font-size: 48px;
`
const Name = styled.span`
  color: #ff0101;
  padding-left: 10px;
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
    <Container>
      {isLoading ? (
        'Loading...'
      ) : (
        <Welcome>
          <Hi>
            <span>Bonjour</span>
            <Name>{datas.userDatas.userFirstName}</Name>
          </Hi>
        </Welcome>
      )}
    </Container>
  )
}

export default Profil
