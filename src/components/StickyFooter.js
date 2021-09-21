import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Meeks' Honey
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '50vh',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2, background: 'rgba(255,255,255,0.6)' }} maxWidth="sm">
        <Typography variant="h3" component="h2" gutterBottom sx={{ fontFamily: 'Pinyon Script', textAlign: 'center', paddingTop: '15px' }}>
          Thank you for visiting.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Check out the following links for more information about our company and the National Honey Board.'}
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 'bold', paddingBottom: '10px' }}>
          {<><a href="http://meekshoney.com/about/faq1.html">Meeks' Honey FAQ</a><br /></>}
          {<><a href="http://honey.com/">National Honey Board Website</a><br /></>}
          {<><a href="https://www.santacruzsentinel.com/2012/05/16/the-sweet-science-honey-is-a-passion-for-local-beekeepers/">Alayne Meeks featured in the Santa Cruz Sentinel</a><br /></>}
        </Typography>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}