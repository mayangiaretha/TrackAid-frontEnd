import { Container, Box, Typography, Stack, Grid } from '@mui/material';
import BackgroundImage from '../../assets/office.png';
import ClientImage from '../../assets/clientImage.png';
import InvoiceImage from '../../assets/invoiceImage.png';
import ServicesImage from '../../assets/services.png';
import ReviewImage from '../../assets/reviews.png';
import { COLORS } from '../../style/theme';
import { Button } from '../../elements/button';
import { Link } from 'react-router-dom';

const Homepage = ({ login }) => {
  return (
    <Box
      sx={{
        marginTop: '64px',
        background: COLORS.WHITE_2,
        height: 'auto',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column', // Align text to the right
          alignItems: 'flex-start',
          padding: 10,
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
          width: '100%',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: COLORS.BLACK_1,
            fontWeight: 'bold', // Make font more bold
            lineHeight: '1.2em', //
            marginBottom: '50px', // Add margin bottom for spacing
          }}
        >
          Effortless invoicing.
          <br />
          Streamline Your Billing Process <br /> with our online invoice
          creator.
        </Typography>
        <Typography
          variant="h7"
          sx={{
            textAlign: 'left',
            color: COLORS.BLACK_1,
            marginBottom: '50px',
          }}
        >
          Collaborate, manage finances, and reach new productivity peaks. Your
          team's unique approach sets it apart.
          <br /> Achieve success in all these endeavors with Track-Aid.
        </Typography>
        <Stack my={4} marginTop={6}>
          <Link to={login ? '/login' : '/register'}>
            <Button
              type="submit"
              variant="text"
              sx={{
                width: '15rem',
                backgroundColor: COLORS.BLUE_1,
                color: 'white',
                margin: '5px 50px',
              }}
            >
              Start Using Track-Aid
            </Button>
          </Link>
        </Stack>
      </Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              padding: 1,
              backgroundImage: `url(${ClientImage})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              width: '60%',
              height: '400px', // Move the box to the right
              marginLeft: '119px',
              marginTop: '1px', // Add margin top to separate from the content above
            }}
          ></Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack direction="row" spacing={2} marginTop={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                padding: 1,
                backgroundImage: `url(${InvoiceImage})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '400px', // Add margin top to separate from the content above
                marginRight: '160px', // Move the box to the left by aligning its right margin to auto
              }}
            ></Box>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              padding: 1,
              backgroundImage: `url(${ServicesImage})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              width: '84%',
              height: '300px',
              margin: 'auto',
            }}
          ></Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              padding: 1,
              backgroundImage: `url(${ReviewImage})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              width: '84%',
              height: '800px',
              margin: 'auto',
            }}
          ></Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          background: COLORS.BLUE_1,
          color: COLORS.WHITE_2,
          padding: '20px 0',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body1" align="center">
            &copy; {new Date().getFullYear()} Track Aid. All rights reserved.
          </Typography>
          <Typography variant="body2" align="center">
            Contact Us:
          </Typography>
          <Typography variant="body2" align="center">
            Phone: +1234567890
          </Typography>
          <Typography variant="body2" align="center">
            Email: info@trackaid.com
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Homepage;
