import { createMuiTheme } from '@material-ui/core/styles';

const custom = createMuiTheme({
  palette: {
    primary: {
      light: '#6fbf73',
      main: '#4caf50',
      dark: '#357a38',
      contrastText: '#fff',
    }
  },
});

export default custom