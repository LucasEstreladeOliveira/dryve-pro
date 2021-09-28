// vendors
import MuiAppBar from '@material-ui/core/AppBar';
import { styled, ThemeProvider } from '@material-ui/core/styles';

// components
import Logo from '@/components/Logo/Logo'
import BusinessUnit from '@/components/BusinessUnit/BusinessUnit'
import MenuOptions from '@/components/MenuOptions/MenuOptions'

// theme
import overrideTheme from '@/theme/overrideTheme'

const drawerWidth = 240;

function Topbar () {
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  return (
    <ThemeProvider theme={overrideTheme}>
      <AppBar position="fixed" color="secondary">
        <Logo />
        <BusinessUnit />
        <MenuOptions />
      </AppBar>
    </ThemeProvider>
  ) 
}

export default Topbar