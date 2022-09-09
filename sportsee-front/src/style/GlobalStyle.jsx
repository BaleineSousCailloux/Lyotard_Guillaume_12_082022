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
/**
 * Style global for all components
 * @returns CSS for all(*) and for <body>
 */
function GlobalStyle() {
  return <StyledGlobalStyle />
}
export default GlobalStyle
