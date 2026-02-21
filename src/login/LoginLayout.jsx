import { Paper } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import LogoImage from './LogoImage';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#f4f6fb',
  },
  card: {
    width: 420,
    padding: theme.spacing(6),
    borderRadius: 20,
    boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
    textAlign: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    marginBottom: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
    '& img, & svg': {
      maxWidth: '480px',
      maxHeight: '240px',
      width: 'auto',
      height: 'auto',
    },
  },
  form: {
    width: '100%',
  },
}));

const LoginLayout = ({ children }) => {
  const { classes } = useStyles();

  return (
    <main className={classes.root}>
      <Paper className={classes.card}>
        <div className={classes.logo}>
          <LogoImage useServerLogo={false} />
        </div>
        <form className={classes.form}>{children}</form>
      </Paper>
    </main>
  );
};

export default LoginLayout;
