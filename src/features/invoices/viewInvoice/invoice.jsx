import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from '@mui/material';
import LogoImage from '../../../assets/logo2.png';

export const Invoice = ({ foundInvoice }) => {
  const { items } = foundInvoice;

  return (
    <>
      <Box display="flex" justifyContent="center" marginBottom={2}>
        <img
          src={LogoImage}
          alt="Logo"
          style={{ width: 200, height: 'auto' }}
        />
      </Box>

      <TableContainer style={{ width: '100%' }}>
        <Table style={{ minWidth: '100%' }}>
          <TableHead>
            <TableRow>
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
    </>
  );
};

export default Invoice;
