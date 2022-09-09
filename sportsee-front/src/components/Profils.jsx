import { GetAllUsers } from '../API/fetchDatas'
import { NavLink } from 'react-router-dom'
import Card from './Card'
import styled from 'styled-components'

const CardsContainer = styled.div`
  box-sizing: border-box;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`

/**
 * Component for all profils display, and link with their profil's page
 * @returns all profils cards
 */
function Profils() {
  const users = GetAllUsers()

  return (
    <CardsContainer>
      {users.map((user, index) =>
        user.id ? (
          <NavLink to={`/user/${user.id}`} key={index}>
            <Card
              first={user.userInfos.firstName}
              last={user.userInfos.lastName}
            />
          </NavLink>
        ) : (
          (() => {
            console.log(
              `l'utilisateur ${user.userInfos.firstName} ${user.userInfos.lastName} n'a pas d'id`
            )
            return (
              <NavLink to={`/not-found`} key={index}>
                <Card
                  first={user.userInfos.firstName}
                  last={user.userInfos.lastName}
                />
              </NavLink>
            )
          })()
        )
      )}
    </CardsContainer>
  )
}

export default Profils
