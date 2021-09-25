import { styled, useTheme, ThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import SideMenu from '../src/components/SideMenu/SideMenu';
import Topbar from '../src/components/Topbar/Topbar';
import { TopbarFiller } from '../src/components/Topbar/styled';
import CssBaseline from '@material-ui/core/CssBaseline';
import overrideTheme from '../src/theme/overrideTheme'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  box-sizing: border-border-box;
}
main {
  background-color: #F9F9F9;
}
`
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function MyApp({ Component, pageProps }) {

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={overrideTheme}>
        <Box sx={{ display: 'flex' }}>
          <Topbar />
          <SideMenu alwaysOpened/>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <TopbarFiller />
            <Component {...pageProps} />
          </Box>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default MyApp
