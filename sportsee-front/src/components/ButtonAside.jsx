import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const IcoContainer = styled.div`
  box-sizing: border-box;
  margin: 10px;
  width: 64px;
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  overflow: hidden;
  background: #ffffff;
`

const Ico = styled.img`
  height: 32px;
  margin: 0;
  padding-top: 5px;
`

function ButtonAside({ type }) {
  return (
    <IcoContainer key={type}>
      {(() => {
        if (type) {
          return (
            <NavLink to={`/:id/${type}`}>
              <Ico
                src={require(`../assets/${type}.svg`)}
                alt={`icone de ${type}`}
              />
            </NavLink>
          )
        }
      })()}
    </IcoContainer>
  )
}

ButtonAside.propTypes = {
  type: PropTypes.string.isRequired,
}

export default ButtonAside
