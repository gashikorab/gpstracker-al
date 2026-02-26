import { Paper, Typography, Container, Box, Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function PrivacyPage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          Privacy Policy
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          {/* Replace this text with your real privacy policy */}
          This Privacy Policy explains how we collect, use, and protect your data when you use our GPS tracking platform.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
          1. Data We Collect
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Account details, device/location data (as configured), and usage logs required to operate the service.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
          2. How We Use Data
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          To provide the service, improve reliability, ensure security, and comply with legal obligations.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
          3. Data Sharing
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          We do not sell personal data. Data may be shared only with service providers or as required by law.
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