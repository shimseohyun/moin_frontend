import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './style/globalStyle'
import { theme } from "./style/theme.js";
import { Layout } from './Router';


function App() {
  return (
    <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout/>
        </ThemeProvider>
    </>
  )
}

export default App
