import {
  Typography,
  Container,
  InputAdornment,
  Stack,
  TextField,
  TextareaAutosize as TextArea,
} from '@mui/material';
import TagIcon from '@mui/icons-material/Tag';

const InvoiceForm = () => {
  const calculateAmount = (quantity, price) => {
    return quantity * price;
  };

  const items = [
    {
      id: '661670269068f75d33993281',
      productName: 'Product k',
      quantity: 5,
      price: 100,
      amount: calculateAmount(5, 100), // Calculated amount based on quantity and price
    },
  ];
  items.forEach((item) => {
    item.amount = item.quantity * item.price;
  });

  return (
    <Container>
      <Stack spacing={2} mb={12}>
        <Stack direction="row" justifyContent="flex-end">
          <Typography variant="h1">
            <strong>INVOICE</strong>
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="flex-end">
          <TextField
            placeholder="invoice No."
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TagIcon />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Stack>

      <Stack spacing={2}>
        <Stack direction="row" justifyContent="space-between">
          <TextArea
              placeholder="who is this invoice from? (required)"
              minRows={3}
              style={{ width: 300, resize: 'none', padding: '4px 2px 2px 8px' }}
          />
          <Stack spacing={2}>
            <TextField label="Date" variant="outlined" />
            <TextField placeholder="PaymentTerms" variant="outlined" />
          </Stack>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" spacing={2}>
            <TextArea
                placeholder="who is this invoice to? (required)"
                minRows={3}
                style={{ width: 300, resize: 'none', padding: '4px 2px 2px 8px' }}
            />
            <TextArea
                placeholder="who is this invoice from? (required)"
                minRows={3}
                style={{ width: 300, resize: 'none', padding: '4px 2px 2px 8px' }}
            />
          </Stack>
          <TextField placeholder="Due Date" variant="outlined" />
        </Stack>
        <Stack direction="row" justifyContent="flex-end">
          <TextField placeholder="PO Number" variant="outlined" />
        </Stack>
      </Stack>
    </Container>
  );
};

export default InvoiceForm;
