/**
 * @file is the launcher of the App React
 * @author Guillaume Lyotard
 * @see https://github.com/BaleineSousCailloux/Lyotard_Guillaume_12_082022/tree/main/sportsee-front
 */

import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { DataProvider } from './Utils/DataProvider'
import Home from './pages/Home'
import Profil from './pages/Profil'
import Setting from './pages/Setting'
import Community from './pages/Community'
import UnderConstruction from './pages/UnderConstruction'
import Error404 from './pages/Error404'
import Header from './components/Header'
import AsideMenu from './components/AsideMenu'
import styled from 'styled-components'
import GlobalStyle from './style/GlobalStyle'

const MainContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  height: calc(100vh - 91px);
`
/**
 * DOM Injector and Router
 * @type {DOM}
 */
const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <MainContainer>
        <AsideMenu />
        <DataProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:userId" element={<Profil />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/community" element={<Community />} />
            <Route path="/soon" element={<UnderConstruction />} />
            <Route path="/not-found" element={<Error404 />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes>
        </DataProvider>
      </MainContainer>
    </Router>
  </React.StrictMode>
)
