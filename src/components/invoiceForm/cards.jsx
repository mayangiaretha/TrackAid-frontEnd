import { Stack, Card, CardContent, Typography } from '@mui/material';

const CardsExample = ({ getInvoices }) => {
  console.log(getInvoices, '===========================>');
  const totalPaid = getInvoices.filter(
    (invoice) => invoice.invoiceStatus === 'Paid',
  ).length;
  const totalPending = getInvoices.filter(
    (invoice) => invoice.invoiceStatus === 'Pending',
  ).length;
  const totalInvoices = getInvoices.length;
  return (
    <Stack
      direction="row"
      justifyContent="space-evenly"
      mt={30}
      sx={{
        borderRadius: '5',
      }}
    >
      <Card style={{ width: 300 }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            TOTAL PAID
          </Typography>
          <Typography variant="body2">PAID:{totalPaid}</Typography>
        </CardContent>
      </Card>

      <Card style={{ width: 300 }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            TOTAL PENDING
          </Typography>
          <Typography variant="body2">PENDING: {totalPending}</Typography>
        </CardContent>
      </Card>

      <Card style={{ width: 300 }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            TOTAL INVOICES
          </Typography>
          <Typography variant="body2">INVOICES:{totalInvoices}</Typography>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default CardsExample;
