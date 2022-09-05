import React from 'react'
import styled from 'styled-components'
//import fire from '../assets/fire.svg'
// import chicken from '../assets/chicken.svg'
// import apple from '../assets/apple.svg'
// import cheeseburger from '../assets/cheeseburger.svg'

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
`
const IcoContainer = styled.div`
  box-sizing: border-box;
  margin: 10px;
  width: 60px;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  overflow: hidden;
  ${(props) => props.$calories && `background: #ff000010;`};
  ${(props) => props.$proteines && `background: #4ab8ff10;`};
  ${(props) => props.$glucides && `background: #fdcc0c10;`};
  ${(props) => props.$lipides && `background: #fd518110;`};
`

const Ico = styled.img`
  height: 20px;
  margin: 0;
  padding-top: 5px;
`

const ProfilNutriments = ({ nutriment, quantity }) => {
  function uniformise(element) {
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
      {(() => {
        nutriment.forEach((nut, index) => {
          const type = uniformise(nut)
          const count = quantity[index]
          return (
            <Nutriment key={type}>
              <IcoContainer>
                <Ico
                  src={require(`../assets/${type}.svg`)}
                  alt={`icone des ${nut}`}
                />
              </IcoContainer>
              <p>{count}</p>
              <p>{nut}</p>
            </Nutriment>
          )
        })
      })()}
    </Container>
  )
}

export default ProfilNutriments

/* <Nutriment>
        <IcoContainer calories>
          <Ico
            src={require(`../assets/${nutriment[0]}.svg`)}
            alt={`icone des ${nutriment[0]}`}
          />
        </IcoContainer>
        <p>{quantity[0]}</p>
        <p>{nutriment[0]}</p>
      </Nutriment>
      <Nutriment>
        <IcoContainer proteines>
          <Ico src={chicken} alt={`icone des protéines`} />
        </IcoContainer>
        <p>{quantity[1]}</p>
        <p>{nutriment[1]}</p>
      </Nutriment>
      <Nutriment>
        <IcoContainer glucides>
          <Ico src={apple} alt={`icone des glucides`} />
        </IcoContainer>
        <p>{quantity[2]}</p>
        <p>{nutriment[2]}</p>
      </Nutriment>
      <Nutriment>
        <IcoContainer lipides>
          <Ico src={cheeseburger} alt={`icone des lipides`} />
        </IcoContainer>
        <p>{quantity[3]}</p>
        <p>{nutriment[3]}</p>
      </Nutriment> */
