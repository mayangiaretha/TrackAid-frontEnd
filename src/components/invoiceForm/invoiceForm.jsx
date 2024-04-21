import {
  Typography,
  Container,
  InputAdornment,
  TextField,
  Box
} from '@mui/material';
import { Form } from 'formik';
import TagIcon from '@mui/icons-material/Tag';
import TableForm from './tableForm';
import PaymentDetails from './paymentDetails';

const InvoiceForm = ({ formik }) => {
  const { handleSubmit, values, handleChange, touched, errors } = formik;

  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        height: 'auto',
      }}
    >
      <Form
        onSubmit={handleSubmit}
        style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <Box style={{ alignSelf: 'flex-end', marginBottom: 8 }}>
          <Typography variant="h1" component="strong">
            INVOICE
          </Typography>
        </Box>
        <Box style={{ alignSelf: 'flex-end', marginBottom: 8 }}>
          <TextField
            placeholder="Invoice No."
            variant="outlined"
            value={values.invoiceId}
            onChange={handleChange}
            error={touched.invoiceId && Boolean(errors.invoiceId)}
            helperText={touched.invoiceId && errors.invoiceId}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TagIcon />
                </InputAdornment>
              ),
            }}
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
            Invoice Date:
          </Typography>
          <TextField
            placeholder="Enter date"
            variant="standard"
            InputProps={{
              disableUnderline: true, // This removes the underline
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
            Due Date:
          </Typography>
          <TextField
            placeholder="Enter date"
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            style={{ flex: 1 }}
          />
        </Box>
        <Box style={{ alignSelf: 'flex-start', marginTop: -180 }}>
          {' '}
          <Typography variant="h3" style={{ marginBottom: 8 }}>
            INVOICE TO:
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
              Name:
            </Typography>
            <TextField
              placeholder="Enter Client's Name"
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
              Company:
            </Typography>
            <TextField
              placeholder="Company Name"
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
              Phone:
            </Typography>
            <TextField
              placeholder="Phone Number"
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
              Email:
            </Typography>
            <TextField
              placeholder="Email Address"
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              style={{ flex: 1 }}
            />
          </Box>
        </Box>
        <Container
          style={{
            marginTop: 12,
            width: '100%',
          }}
        >
          <TableForm />
        </Container>
        <PaymentDetails />
      </Form>
    </Container>
  );
};

export default InvoiceForm;
