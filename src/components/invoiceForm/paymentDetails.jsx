import { Box, Container, TextField, Typography, Stack } from '@mui/material';
import { Button } from '../../elements/button';
import { COLORS } from '../../style/theme';
import { useState, useEffect } from 'react';

const PaymentDetails = ({
  values,
  handleChange,
  touched,
  errors,
  setFieldValue,
}) => {
  const [priceValues, setPriceValues] = useState({
    subTotal: 0,
    tax: 0,
    total: 0,
  });

  useEffect(() => {
    const subTotal = values.items.reduce(
      (acc, item) => acc + parseFloat(item.total),
      0,
    );
    const tax = subTotal * 0.18;
    const total = subTotal + tax;

    setPriceValues({ subTotal, tax, total });
    setFieldValue('subTotal', subTotal);
    setFieldValue('tax', tax);
    setFieldValue('total', total);
  }, [values.items, setFieldValue]);

  console.log(values.items, 'the values =====>');
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
            marginTop: 30,
          }}
        >
          <Typography variant="body1" style={{ marginRight: 8 }}>
            subTotal:
          </Typography>
          <TextField
            placeholder="$"
            variant="standard"
            name="subTotal"
            value={priceValues.subTotal}
            onChange={handleChange}
            error={touched.subTotal && Boolean(errors.subTotal)}
            helperText={touched.subTotal && errors.subTotal}
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
            name="tax"
            value={priceValues.tax}
            onChange={handleChange}
            error={touched.tax && Boolean(errors.tax)}
            helperText={touched.tax && errors.tax}
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
            name="total"
            value={priceValues.total}
            onChange={handleChange}
            error={touched.total && Boolean(errors.total)}
            helperText={touched.total && errors.total}
            InputProps={{
              disableUnderline: true,
            }}
            style={{ flex: 1 }}
          />
        </Box>
        <Box style={{ alignSelf: 'flex-start', marginTop: -100 }}>
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
              name="bankName"
              onChange={handleChange}
              value={values.bankName}
              error={touched.bankName && Boolean(errors.bankName)}
              helperText={touched.bankName && errors.bankName}
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
              Account Number:
            </Typography>
            <TextField
              placeholder="01235689000"
              name="accountNo"
              variant="standard"
              onChange={handleChange}
              value={values.accountNo}
              error={touched.accountNo && Boolean(errors.accountNo)}
              helperText={touched.accountNo && errors.accountNo}
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
              name="accountName"
              variant="standard"
              value={values.accountName}
              onChange={handleChange}
              error={touched.accountName && Boolean(errors.accountName)}
              helperText={touched.accountName && errors.accountName}
              InputProps={{
                disableUnderline: true,
              }}
              style={{ flex: 1 }}
            />
          </Box>
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
              save invoice
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default PaymentDetails;
