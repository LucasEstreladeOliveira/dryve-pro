// vendors
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';

// components
import SideMenu from '@/components/SideMenu/SideMenu';
import Topbar from '@/components/Topbar/Topbar';
import { TopbarFiller } from '@/components/Topbar/styled';

// theme
import overrideTheme from '@/theme/overrideTheme'

// contexts
import { UsersProvider } from '@/contexts/users-context'
import { VehiclesProvider } from '@/contexts/vehicles-context'

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
      <VehiclesProvider>
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
      </VehiclesProvider>
    </UsersProvider>
  )
}

export default MyApp
