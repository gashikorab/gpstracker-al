import { Paper, Box, Typography, Link as MuiLink } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { Link as RouterLink } from 'react-router-dom';

import LogoImage from './LogoImage';

// Put your background image in: public/images/roads-bg.jpg
// Recommended size: 2560x1440 (desktop). CSS uses background-size: cover.
const BG_IMAGE_URL = '/roads-bg.jpg';

const useStyles = makeStyles()((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    position: 'relative',
    overflow: 'hidden',
    // Background image
    backgroundImage: `url(${BG_IMAGE_URL})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  // Subtle overlay so text stays readable
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'rgba(15, 23, 42, 0.35)',
    pointerEvents: 'none',
  },
  content: {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(6),
    gap: theme.spacing(6),

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      padding: theme.spacing(3),
      gap: theme.spacing(3),
    },

    // App (WebView) mode: center the card, remove split layout spacing
    ':global(.is-app) &': {
      justifyContent: 'center',
      padding: theme.spacing(3),
      gap: theme.spacing(0),
    },
  },
  left: {
    flex: 1,
    maxWidth: 680,
    color: '#ffffff',

    [theme.breakpoints.down('md')]: {
      display: 'none',
    },

    // Hide the left info area inside the mobile app
    ':global(.is-app) &': {
      display: 'none',
    },
  },
  leftCard: {
    background: 'rgba(255, 255, 255, 0.10)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    backdropFilter: 'blur(6px)',
    borderRadius: 18,
    padding: theme.spacing(3),
  },
  right: {
    flex: '0 0 auto',
    display: 'flex',
    justifyContent: 'flex-end',
    width: 520,

    [theme.breakpoints.down('md')]: {
      width: '100%',
      justifyContent: 'center',
    },

    // App mode: take full width and center
    ':global(.is-app) &': {
      width: '100%',
      justifyContent: 'center',
    },
  },
  card: {
    width: 420,
    padding: theme.spacing(6),
    borderRadius: 20,
    boxShadow: '0 20px 40px rgba(0,0,0,0.18)',
    textAlign: 'center',
    backgroundColor: '#ffffff',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      maxWidth: 420,
      padding: theme.spacing(4),
    },

    // App mode: slightly tighter padding for smaller screens
    ':global(.is-app) &': {
      padding: theme.spacing(4),
      boxShadow: '0 12px 28px rgba(0,0,0,0.20)',
    },
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
  footer: {
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(1.5),
    background: 'rgba(255,255,255,0.92)',
    borderTop: '1px solid rgba(0,0,0,0.08)',
    backdropFilter: 'blur(6px)',

    [theme.breakpoints.down('md')]: {
      display: 'none',
    },

    // Hide footer inside the mobile app
    ':global(.is-app) &': {
      display: 'none',
    },
  },
  footerInner: {
    width: '100%',
    maxWidth: 1200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: theme.spacing(1),
    },
  },
  footerLinks: {
    display: 'flex',
    gap: theme.spacing(2),
  },
}));

const LoginLayout = ({ children }) => {
  const { classes } = useStyles();

  return (
    <main className={classes.root}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        {/* Left side (info area) */}
        <div className={classes.left}>
          <div className={classes.leftCard}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              Mirë se vini në GPS Tracker Albania
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.95, mb: 2, lineHeight: 1.7 }}>
              Ne jemi një kompani e besueshme me përvojë të gjatë në fushën e monitorimit dhe menaxhimit të
              flotës. Platforma jonë ofron zgjidhje moderne për ndjekjen në kohë reale të automjeteve dhe
              pajisjeve tuaja, me siguri dhe saktësi maksimale.
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.95, mb: 2, lineHeight: 1.7 }}>
              Me fokus në cilësi dhe shërbim profesional, u ofrojmë klientëve stabilitet, performancë të lartë
              dhe mbështetje teknike të shpejtë. Zgjidhja jonë është ndërtuar për biznese që kërkojnë kontroll
              dhe transparencë të plotë.
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9, lineHeight: 1.7 }}>
              Zgjidhni sigurinë. Zgjidhni përvojën. Zgjidhni GPS Tracker Albania.
            </Typography>
          </div>
        </div>

        {/* Right side (login card) */}
        <div className={classes.right}>
          <Paper className={classes.card}>
            <div className={classes.logo}>
              <LogoImage useServerLogo={false} />
            </div>
            <form className={classes.form}>{children}</form>
          </Paper>
        </div>
      </div>

      {/* Bottom bar */}
      <footer className={classes.footer}>
        <div className={classes.footerInner}>
          <Typography variant="caption" sx={{ color: 'rgba(0,0,0,0.65)' }}>
            © {new Date().getFullYear()} GPS Tracker Albania
          </Typography>
          <div className={classes.footerLinks}>
            <MuiLink component={RouterLink} to="/terms" underline="hover" variant="caption">
              Terms & Conditions
            </MuiLink>
            <MuiLink component={RouterLink} to="/privacy" underline="hover" variant="caption">
              Privacy Policy
            </MuiLink>
            <MuiLink component={RouterLink} to="/contact" underline="hover" variant="caption">
              Contact
            </MuiLink>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default LoginLayout;
