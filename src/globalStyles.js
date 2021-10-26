import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${props => props.theme.font};
    color: ${props => props.theme.colors.textPrimary};
  }

  html, body {
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.backgound};
  }

  body {
    & > #root {
      width: 100%;
      height: 100%;
    }
  }
`
