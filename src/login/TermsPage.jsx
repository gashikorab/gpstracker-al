import { Paper, Typography, Container, Box, Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function TermsPage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          Terms & Conditions
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          {/* Replace this text with your real terms */}
          These Terms & Conditions govern the use of our GPS tracking platform. By using the service,
          you agree to comply with these terms.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
          1. Accounts
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          You are responsible for maintaining the confidentiality of your account credentials.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
          2. Acceptable Use
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          You agree not to misuse the service, attempt unauthorized access, or use the platform for illegal purposes.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
          3. Limitation of Liability
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          The service is provided “as is”. We are not liable for indirect or consequential damages to the extent
          permitted by law.
        </Typography>

        <Box sx={{ mt: 4 }}>
          <MuiLink component={RouterLink} to="/login" underline="hover">
            ← Back to Login
          </MuiLink>
        </Box>
      </Paper>
    </Container>
  );
}