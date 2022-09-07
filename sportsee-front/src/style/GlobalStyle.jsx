import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
  }

  body {
    margin: 0;
    background: #ffffff;

  }
`
function GlobalStyle() {
  return <StyledGlobalStyle />
}
export default GlobalStyle
