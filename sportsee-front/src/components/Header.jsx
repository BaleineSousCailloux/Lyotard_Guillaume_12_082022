import React from 'react'
import { NavLink } from 'react-router-dom'
import { GetAllUsers } from '../API/fetchDatas'
import logo from '../assets/logo.svg'
import styled from 'styled-components'

const HeaderLogo = styled.img`
  height: 61px;
  width: 178px;
`

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 91px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px 87px 19px 29px;
  background: #020203;
`

const NavigationLink = styled.div`
  box-sizing: border-box;
  margin: 0;
  font-weight: 500;
  font-size: 24px;
`

function Header() {
  const users = GetAllUsers()
  const defaultUser = users[0].id
  return (
    <Container>
      <HeaderLogo src={logo} alt="logo sportsee" />
      <NavigationLink>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: '#ffffff',
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          Accueil
        </NavLink>
      </NavigationLink>
      <NavigationLink>
        {defaultUser ? (
          <NavLink
            to={`/user/${defaultUser}`}
            style={({ isActive }) => ({
              color: '#ffffff',
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            Profil
          </NavLink>
        ) : (
          <NavLink
            to={`/not-found`}
            style={({ isActive }) => ({
              color: '#ffffff',
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            Profil
          </NavLink>
        )}
      </NavigationLink>
      <NavigationLink>
        <NavLink
          to="/setting"
          style={({ isActive }) => ({
            color: '#ffffff',
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          Réglage
        </NavLink>
      </NavigationLink>
      <NavigationLink>
        <NavLink
          to="/community"
          style={({ isActive }) => ({
            color: '#ffffff',
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          Communauté
        </NavLink>
      </NavigationLink>
    </Container>
  )
}

export default Header
