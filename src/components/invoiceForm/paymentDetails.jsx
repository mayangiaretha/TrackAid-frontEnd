import { Box, Container, TextField, Typography, Stack } from '@mui/material';
import { Button } from '../../elements/button';
import { COLORS } from '../../style/theme';

const PaymentDetails = () => {
  return (
    <>
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          height: 'auto',
        }}
      >
        <Box
          style={{
            alignSelf: 'flex-end',
            marginBottom: 8,
            width: 300,
            display: 'flex',
            alignItems: 'center',
            marginTop: 8,
          }}
        >
          <Typography variant="body1" style={{ marginRight: 8 }}>
            subTotal:
          </Typography>
          <TextField
            placeholder="$"
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            style={{ flex: 1 }}
          />
        </Box>
        <Box
          style={{
            alignSelf: 'flex-end',
            marginBottom: 8,
            width: 300,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography variant="body1" style={{ marginRight: 8 }}>
            Discount:
          </Typography>
          <TextField
            placeholder="0.00"
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            style={{ flex: 1 }}
          />
        </Box>
        <Box
          style={{
            alignSelf: 'flex-end',
            marginBottom: 8,
            width: 300,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography variant="body1" style={{ marginRight: 8 }}>
            Tax(18%):
          </Typography>
          <TextField
            placeholder="$0.18"
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            style={{ flex: 1 }}
          />
        </Box>
        <Box
          style={{
            alignSelf: 'flex-end',
            marginBottom: 8,
            width: 300,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography variant="body1" style={{ marginRight: 15 }}>
            Discount:
          </Typography>
          <TextField
            placeholder="00.00"
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            style={{ flex: 1 }}
          />
        </Box>
        <Box
          style={{
            alignSelf: 'flex-end',
            marginBottom: 15,
            width: 300,
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          {/* Blue line */}
          <Box
            style={{
              position: 'absolute',
              width: '100%',
              borderTop: '2px solid #03a9fc',
              marginTop: '-55px',
            }}
          />
          <Typography variant="body1" style={{ marginRight: 8 }}>
            Total:
          </Typography>
          <TextField
            placeholder="$1000"
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            style={{ flex: 1 }}
          />
        </Box>
        <Box style={{ alignSelf: 'flex-start', marginTop: -150 }}>
          {' '}
          <Typography variant="h3" style={{ marginBottom: 8 }}>
            Payment method:
          </Typography>
          {/* New parent container */}
          <Box
            style={{
              alignSelf: 'flex-start',
              marginBottom: 8,
              width: 300,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography variant="body1" style={{ marginRight: 8 }}>
              Bank Name:
            </Typography>
            <TextField
              placeholder="standard chartered Bank"
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              style={{ flex: 1 }}
            />
          </Box>
          <Box
            style={{
              alignSelf: 'flex-start',
              marginBottom: 8,
              width: 300,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography variant="body1" style={{ marginRight: 8 }}>
              Account No:
            </Typography>
            <TextField
              placeholder="01235689000"
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              style={{ flex: 1 }}
            />
          </Box>
          <Box
            style={{
              alignSelf: 'flex-start',
              marginBottom: 8,
              width: 300,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography variant="body1" style={{ marginRight: 8 }}>
              Account Name:
            </Typography>
            <TextField
              placeholder="John Doe"
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              style={{ flex: 1 }}
            />
          </Box>
          <Box
            style={{
              alignSelf: 'flex-start',
              marginBottom: 8,
              width: 300,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography variant="body1" style={{ marginRight: 8 }}>
              Branch Name:
            </Typography>
            <TextField
              placeholder="xyz"
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              style={{ flex: 1 }}
            />
          </Box>
          <Stack my={4} marginTop={-10}>
            <Button
              type="submit"
              variant="text"
              sx={{
                width: '10rem',
                backgroundColor: COLORS.BLUE_1,
                color: 'white',
              }}
            >
              save invoice
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default PaymentDetails;
