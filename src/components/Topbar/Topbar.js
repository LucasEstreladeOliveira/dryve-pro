import MuiAppBar from '@material-ui/core/AppBar';
import { styled, ThemeProvider } from '@material-ui/core/styles';
import Logo from '../Logo/Logo'
import BusinessUnit from '../BusinessUnit/BusinessUnit'
import MenuOptions from '../MenuOptions/MenuOptions'
import overrideTheme from '../../theme/overrideTheme'

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