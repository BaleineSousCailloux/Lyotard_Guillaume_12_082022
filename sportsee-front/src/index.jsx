import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DataProvider } from './Utils/DataProvider'
import Home from './pages/Home'
import Profil from './pages/Profil'
import Setting from './pages/Setting'
import Community from './pages/Community'
import Header from './components/Header'
import AsideMenu from './components/AsideMenu'
// import Error404 from './components/Error404'
import GlobalStyle from './style/GlobalStyle'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <AsideMenu />
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:userId" element={<Profil />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </DataProvider>
    </Router>
  </React.StrictMode>
)
