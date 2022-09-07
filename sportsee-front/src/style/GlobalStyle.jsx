import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;

  }

  body {
    margin: 0;
    background: #ffffff;
    font-size: 100%
    

  }
`
function GlobalStyle() {
  return <StyledGlobalStyle />
}
export default GlobalStyle
