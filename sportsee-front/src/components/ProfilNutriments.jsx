import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Nutriment = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 124px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 32px 0 0 0;
`
const IcoContainer = styled.div`
  box-sizing: border-box;
  min-width: 60px;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  overflow: hidden;
  &.calories {
    background: #ff000020;
  }
  &.proteines {
    background: #4ab8ff20;
  }
  &.glucides {
    background: #fdcc0c20;
  }
  &.lipides {
    background: #fd518120;
  }
`

const Ico = styled.img`
  height: 20px;
  margin: 0;
`
const Legend = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  margin: 0 0 0 1.5em;
`
const Quanty = styled.p`
  margin: 0 0 2px 0;
  font-size: 1.25em;
  font-weight: 700;
  color: #282d30;
`
const Nutry = styled.p`
  margin: 0;
  font-size: 0.875em;
  font-weight: 500;
  color: #74798c;
`

/**
 * Component user's key datas (nutriments)
 * @param {Array} nutriment user's nutriments labels in french
 * @param {Array} quantity nutriments quantities formated
 * @returns All cards of nutriments (icone, icone background, quantity and label)
 */
function ProfilNutriments({ nutriment, quantity }) {
  const uniformise = (element) => {
    if (typeof element !== 'string') {
      console.log('uniformisation impossible')
      return ''
    } else {
      let elementUniforme = element
        .toLowerCase()
        .normalize('NFKD')
        .replace(/[\u0300-\u036F\u1DC0-\u1DFF\u1AB0-\u1AFF]+/g, '')
        .toString()
      return elementUniforme
    }
  }
  return (
    <Container>
      {nutriment.map((nut, index) => {
        const nutUniformise = uniformise(nut)
        const count = quantity[index]
        return (
          <Nutriment key={nutUniformise}>
            <IcoContainer className={nutUniformise}>
              <Ico
                src={require(`../assets/${nutUniformise}.svg`)}
                alt={`icone des ${nut}`}
              />
            </IcoContainer>
            <Legend>
              <Quanty>{count}</Quanty>
              <Nutry>{nut}</Nutry>
            </Legend>
          </Nutriment>
        )
      })}
    </Container>
  )
}

ProfilNutriments.propTypes = {
  nutriment: PropTypes.array.isRequired,
  quantity: PropTypes.array.isRequired,
}

export default ProfilNutriments
