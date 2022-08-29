import PropTypes from 'prop-types'
import styled from 'styled-components'

const CardWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 275px;
  width: 275px;
  border-radius: 10px;
  background: #ff0101;
  margin: 15px;
`

const CardTitleContainer = styled.div`
  position: absolute;
  bottom: 0px;
  padding: 20px;
  margin: 0;
  line-height: 36px;
`
const CardTitle = styled.h2`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  font-size: 32px;
  font-weight: 500;
  margin: 0;
`

const Gradient = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: linear-gradient(#ffffff00, #00000080);
  position: absolute;
`

// const CardImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `

function Card({ first, last }) {
  return (
    <CardWrapper>
      <Gradient />
      <CardTitleContainer>
        <CardTitle>
          <span>{first}</span>
          <span>{last}</span>
        </CardTitle>
      </CardTitleContainer>
    </CardWrapper>
  )
}

Card.propTypes = {
  first: PropTypes.string.isRequired,
  last: PropTypes.string.isRequired,
}

Card.defaultProps = {
  first: 'Unknown',
  last: 'user',
}

export default Card
