import React from 'react'
import styled from 'styled-components'
import fire from '../assets/fire.svg'
import chicken from '../assets/chicken.svg'
import apple from '../assets/apple.svg'
import cheeseburger from '../assets/cheeseburger.svg'

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
  ${(props) => props.calories && `background: #ff000010;`};
  ${(props) => props.proteines && `background: #4ab8ff10;`};
  ${(props) => props.glucides && `background: #fdcc0c10;`};
  ${(props) => props.lipides && `background: #fd518110;`};
`

const Ico = styled.img`
  height: 20px;
  margin: 0;
  padding-top: 5px;
`

const ProfilNutriments = ({ data }) => {
  console.log(data)
  const cal = data[0]
  const prot = data[1]
  const glu = data[2]
  const lip = data[3]

  return (
    <Container>
      <Nutriment>
        <IcoContainer calories>
          <Ico src={fire} alt={`icone des calories`} />
        </IcoContainer>
        <p>{cal}</p>
      </Nutriment>
      <Nutriment>
        <IcoContainer proteines>
          <Ico src={chicken} alt={`icone des protéines`} />
        </IcoContainer>
        <p>{prot}</p>
      </Nutriment>
      <Nutriment>
        <IcoContainer glucides>
          <Ico src={apple} alt={`icone des glucides`} />
        </IcoContainer>
        <p>{glu}</p>
      </Nutriment>
      <Nutriment>
        <IcoContainer lipides>
          <Ico src={cheeseburger} alt={`icone des lipides`} />
        </IcoContainer>
        <p>{lip}</p>
      </Nutriment>
    </Container>
  )
}

export default ProfilNutriments
