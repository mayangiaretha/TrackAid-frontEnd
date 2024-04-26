import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Stack,
  TableBody,
  Container,
  Typography,
} from '@mui/material';
import LogoImage from '../../../assets/logo2.png';
import dayjs from 'dayjs';
import { COLORS } from '../../../style/theme';
import { Button } from '../../../elements/button';

export const Invoice = ({ foundInvoice }) => {
  const {
    items,
    email,
    dueDate,
    status,
    invoiceNo,
    address,
    telephone,
    name,
    accountNo,
    accountName,
    subtotal,
    tax,
    total,
    bankName,
  } = foundInvoice;

  return (
    <container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
      }}
    >
      <Box style={{ marginBottom: 20 }}>
        <img
          src={LogoImage}
          alt="Logo"
          style={{ width: 200, height: 'auto' }}
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
          Status:
        </Typography>
        <Typography variant="standard">{status}</Typography>
      </Box>
      <Box style={{ alignSelf: 'flex-start', marginTop: -250 }}>
        {' '}
        <Typography variant="h3" style={{ marginBottom: 10 }}>
          INVOICE:
        </Typography>
        <Stack alignItems="center" direction="row" mb={4}>
          <Typography variant="body1" style={{ marginRight: 8 }}>
            invoiceNo:
          </Typography>
          <Typography variant="standard">{invoiceNo}</Typography>
        </Stack>
        <Stack alignItems="center" direction="row" mb={4}>
          <Typography variant="body1" style={{ marginRight: 8 }}>
            Date:
          </Typography>
          <Typography variant="standard">
            {dayjs().format('YYYY-MM-DD')}
          </Typography>
        </Stack>
        <Stack alignItems="center" direction="row" mb={8}>
          <Typography variant="body1" style={{ marginRight: 8 }}>
            dueDate:
          </Typography>
          <Typography variant="standard">{dueDate}</Typography>
        </Stack>
        <Box>
          <Typography variant="h3" style={{ marginBottom: 8 }}>
            Billed to:
          </Typography>
          <Stack alignItems="center" direction="row" mb={4}>
            <Typography variant="body1" style={{ marginRight: 8 }}>
              Name:
            </Typography>
            <Typography variant="standard">{name}</Typography>
          </Stack>
          <Stack alignItems="center" direction="row" mb={4}>
            <Typography variant="body1" style={{ marginRight: 8 }}>
              Address:
            </Typography>
            <Typography variant="standard">{address}</Typography>
          </Stack>
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
              telephone:
            </Typography>
            <Typography variant="standard">{telephone}</Typography>
          </Box>
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
            Email:
          </Typography>
          <Typography variant="standard">{email}</Typography>
        </Box>
      </Box>
      <TableContainer sx={{ width: '100%', marginTop: 10 }}>
        <Table style={{ minWidth: '100%' }}>
          <TableHead>
            <TableRow style={{ backgroundColor: COLORS.BLUE_1 }}>
              <TableCell>Product</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>UnitPrice</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography variant="body1">{item.product}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{item.description}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{item.quantity}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{item.unitPrice}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">
                    <Typography variant="body1">{item.total}</Typography>
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
            marginTop: 30,
          }}
        >
          <Typography variant="body1" style={{ marginRight: 8 }}>
            subtotal:
          </Typography>
          <Typography variant="standard">{subtotal}</Typography>
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
          <Typography variant="standard">{tax}</Typography>
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
          <Box
            style={{
              position: 'absolute',
              width: '100%',
              borderTop: '2px solid #03a9fc',
              marginTop: '-40px',
            }}
          />
          <Typography variant="body1" style={{ marginRight: 8 }}>
            Total:
          </Typography>
          <Typography variant="standard">{total}</Typography>
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
          <Stack my={4} marginTop={5}>
            <Button
              type="submit"
              variant="text"
              sx={{
                width: '10rem',
                backgroundColor: COLORS.BLUE_1,
                color: 'white',
              }}
            >
              send invoice
            </Button>
          </Stack>
        </Box>

        <Box style={{ alignSelf: 'flex-start', marginTop: -200 }}>
          {' '}
          <Typography variant="h3" style={{ marginTop: 8 }}>
            Payment method:
          </Typography>
          <Box
            style={{
              alignSelf: 'flex-start',
              marginTop: 10,
              width: 300,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography variant="body1" style={{ marginRight: 8 }}>
              Account Number:
            </Typography>
            <Typography variant="standard">{accountNo}</Typography>
          </Box>
          <Box
            style={{
              alignSelf: 'flex-start',
              marginTop: 10,
              width: 300,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography variant="body1" style={{ marginRight: 8 }}>
              Bank Name:
            </Typography>
            <Typography variant="standard">{bankName}</Typography>
          </Box>
        </Box>
        <Box
          style={{
            alignSelf: 'flex-start',
            marginTop: 10,
            width: 300,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography variant="body1" style={{ marginRight: 8 }}>
            Account Name:
          </Typography>
          <Typography variant="standard">{accountName}</Typography>
        </Box>
      </Container>
    </container>
  );
};

export default Invoice;
