import { styled, useTheme, ThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import SideMenu from '../src/components/SideMenu/SideMenu';
import Topbar from '../src/components/Topbar/Topbar';
import { TopbarFiller } from '../src/components/Topbar/styled';
import CssBaseline from '@material-ui/core/CssBaseline';
import overrideTheme from '../src/theme/overrideTheme'
import { UsersProvider } from '../src/store'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  box-sizing: border-border-box;
  font-family: 'Inter';
  background-color: #F9F9F9;
}
`

function MyApp({ Component, pageProps }) {

  return (
    <UsersProvider>
      <GlobalStyle />
      <ThemeProvider theme={overrideTheme}>
        <CssBaseline />
        <Box sx={{ display: 'flex' }}>
          <Topbar />
          <SideMenu alwaysOpened/>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <TopbarFiller />
            <Component {...pageProps} />
          </Box>
        </Box>
      </ThemeProvider>
    </UsersProvider>
  )
}

export default MyApp
