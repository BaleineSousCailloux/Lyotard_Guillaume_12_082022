import styled from 'styled-components'
import Button from './Button'

const CopyRight = styled.p`
  box-sizing: border-box;
  width: 142px;
  height: 24px;
  line-height: 24px;
  transform: rotate(-90deg);
  font-size: 12px;
  font-weight: 500;
  color: #ffffff;
`

const AsideContainer = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0 118px 0;
  height: calc(100% - 91px);
  width: 117px;
  background-color: #020203;
  align-items: center;
  overflow: hidden;
`

const VerticalNavContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: fit-content
  width: fit-content;
  align-items: center;
`

function AsideMenu() {
  return (
    <AsideContainer>
      <div></div>
      <VerticalNavContainer>
        <Button type="yoga" />
        <Button type="natation" />
        <Button type="velo" />
        <Button type="muscu" />
      </VerticalNavContainer>
      <CopyRight>Copyryght, SportSee 2020</CopyRight>
    </AsideContainer>
  )
}

export default AsideMenu