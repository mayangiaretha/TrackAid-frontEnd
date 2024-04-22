import {
  Typography,
  Container,
  InputAdornment,
  TextField,
  Stack,
  Box,
  MenuItem,
} from '@mui/material';
import { Form } from 'formik';
import TagIcon from '@mui/icons-material/Tag';
import dayjs from 'dayjs';
import TableForm from './tableForm';
import PaymentDetails from './paymentDetails';

const InvoiceForm = ({ formik }) => {
  const { handleSubmit, values, handleChange, touched, errors, setFieldValue } =
    formik;

  console.log(errors, 'errors =====>');

  console.log(values, 'the get values values ==========>');

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
            Date:
          </Typography>
          <TextField
            placeholder="Enter date"
            variant="standard"
            name="date"
            value={dayjs().format('YYYY-MM-DD')}
            onChange={handleChange}
            error={touched.date && Boolean(errors.date)}
            helperText={touched.date && errors.date}
            disabled
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
            Due Date:
          </Typography>
          <TextField
            placeholder="due date"
            variant="standard"
            name="dueDate"
            value={values.dueDate}
            onChange={handleChange}
            error={touched.dueDate && Boolean(errors.dueDate)}
            helperText={touched.dueDate && errors.dueDate}
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
            Status:
          </Typography>
          <TextField
            select
            variant="standard"
            name="status"
            value={values.status}
            onChange={handleChange}
            error={touched.status && Boolean(errors.status)}
            helperText={touched.status && errors.status}
            InputProps={{
              disableUnderline: true,
            }}
            style={{ flex: 1 }}
          >
            <MenuItem value="paid">Paid</MenuItem>
            <MenuItem value="pending">Pending</MenuItem>
          </TextField>
        </Box>
        <Box style={{ alignSelf: 'flex-start', marginTop: -180 }}>
          {' '}
          <Typography variant="h3" style={{ marginBottom: 8 }}>
            INVOICE TO:
          </Typography>
          <Stack alignItems="center" direction="row" mb={2}>
            <Typography variant="body1" style={{ marginRight: 8 }}>
              Name:
            </Typography>
            <TextField
              placeholder="Enter Company Name"
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
              Address:
            </Typography>
            <TextField
              placeholder="Company Address"
              name="address"
              variant="standard"
              value={values.address}
              onChange={handleChange}
              error={touched.address && Boolean(errors.address)}
              helperText={touched.address && errors.address}
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
              telephone:
            </Typography>
            <TextField
              placeholder="Phone Number"
              name="telephone"
              onChange={handleChange}
              value={values.telephone}
              error={touched.telephone && Boolean(errors.telephone)}
              helperText={touched.telephone && errors.telephone}
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
              name="email"
              onChange={handleChange}
              value={values.email}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
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
        <PaymentDetails
          values={values}
          handleChange={handleChange}
          errors={errors}
          touched={touched}
          setFieldValue={setFieldValue}
        />
      </Form>
    </Container>
  );
};

export default InvoiceForm;
