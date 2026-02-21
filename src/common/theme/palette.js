import { grey } from '@mui/material/colors';

export default () => ({
  mode: 'light',
  background: {
    default: '#ffffff',
    paper: '#ffffff',
  },
  primary: {
    main: grey[900],
  },
  secondary: {
    main: grey[700],
  },
  neutral: {
    main: grey[500],
  },
  geometry: {
    main: grey[600],
  },
  alwaysDark: {
    main: grey[900],
  },
  text: {
    primary: grey[900],
    secondary: grey[700],
  },
  divider: grey[200],
  action: {
    hover: grey[50],
    selected: grey[100],
    disabledBackground: grey[200],
  },
});
