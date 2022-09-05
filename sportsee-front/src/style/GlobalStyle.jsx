import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
  }

  body {
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    margin: 0;
    background: #ffffff;

  }
`
function GlobalStyle() {
  return <StyledGlobalStyle />
}
export default GlobalStyle
