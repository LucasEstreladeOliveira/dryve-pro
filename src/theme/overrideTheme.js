import { createTheme } from '@material-ui/core/styles';

export default createTheme({  
  palette: {
    primary: {
      main: '#0065FF',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
      contrastText: '#1D2C4B',
    },
  },
  components: {
    MuiAppBar: {
      variants: [
        {
          props: { position: 'fixed'},
          style: {
            height: '72px',
            flexDirection: 'row',
          }
        }
      ]
    }
  }
});