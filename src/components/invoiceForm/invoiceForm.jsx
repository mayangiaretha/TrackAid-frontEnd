import {
  Typography,
  Container,
  InputAdornment,
  TextField,
  Stack,
  Box,
} from '@mui/material';
import { Form } from 'formik';
import TagIcon from '@mui/icons-material/Tag';
import TableForm from './tableForm';
import PaymentDetails from './paymentDetails';

const InvoiceForm = ({ formik }) => {
  const { handleSubmit, values, handleChange, touched, errors, setFieldValue } =
    formik;

  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Form
        onSubmit={handleSubmit}
        style={{
          width: '100%',
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box style={{ alignSelf: 'flex-end', marginBottom: 8 }}>
          <Typography variant="h1" component="strong">
            INVOICE
          </Typography>
        </Box>
        <Stack direction="row" justifyContent="flex-end">
          <TextField
            placeholder="Invoice No."
            variant="outlined"
            name="invoiceNo"
            value={values.invoiceNo}
            onChange={handleChange}
            error={touched.invoiceNo && Boolean(errors.invoiceNo)}
            helperText={touched.invoiceNo && errors.invoiceNo}
            disabled
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TagIcon />
                </InputAdornment>
              ),
            }}
            sx={{ color: 'black' }}
          />
        </Stack>

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
          <Stack alignItems="center" direction="row" mb={2}>
            <Typography variant="body1" style={{ marginRight: 8 }}>
              Name:
            </Typography>
            <TextField
              placeholder="Enter Client's Name"
              name="name"
              variant="standard"
              value={values.name}
              onChange={handleChange}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
              InputProps={{
                disableUnderline: true,
              }}
            />
          </Stack>
          <Stack alignItems="center" direction="row" mb={2}>
            <Typography variant="body1" style={{ marginRight: 8 }}>
              Company:
            </Typography>
            <TextField
              placeholder="Company Name"
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
            />
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
        <Container mt={12}>
          <TableForm
            values={values}
            handleChange={handleChange}
            errors={errors}
            touched={touched}
            setFieldValue={setFieldValue}
          />
        </Container>
        <PaymentDetails values={values} handleChange={handleChange} />
      </Form>
    </Container>
  );
};

export default InvoiceForm;
