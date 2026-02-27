import { Paper, Typography, Container, Box, Button, Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const phoneAl = '+355682004343';
const phoneKs = '+38349589985';

// WhatsApp needs numbers without the "+"
const waAl = 'https://wa.me/355682004343';
const waKs = 'https://wa.me/38349589985';

export default function ContactPage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          Contact
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
          Contact us for any questions regarding the service, installation, or technical support.
        </Typography>

        <Typography variant="h6" sx={{ mb: 1 }}>
          Phone
        </Typography>

        <Typography variant="body2" sx={{ mb: 1 }}>
          Albania: <MuiLink href={`tel:${phoneAl}`}>{phoneAl}</MuiLink>
        </Typography>

        <Typography variant="body2" sx={{ mb: 2 }}>
          Kosovo: <MuiLink href={`tel:${phoneKs}`}>{phoneKs}</MuiLink>
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
          Email
        </Typography>

        <Typography variant="body2" sx={{ mb: 2 }}>
          <MuiLink href="mailto:info@gpstracker.al">info@gpstracker.al</MuiLink>
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
          WhatsApp
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
          <Button component="a" href={waAl} target="_blank" rel="noreferrer" variant="contained">
            WhatsApp Albania
          </Button>

          <Button component="a" href={waKs} target="_blank" rel="noreferrer" variant="contained">
            WhatsApp Kosovo
          </Button>
        </Box>

        <MuiLink component={RouterLink} to="/login" underline="hover">
          ← Back to Login
        </MuiLink>
      </Paper>
    </Container>
  );
}