import {
  Box,
  Container,
  Stack,
  FormControl,
  FilledInput,
  InputLabel,
  InputAdornment,
} from '@mui/material';
import { Form } from 'formik';

import Drawer from '../../../layout/drawer/drawer';
import { Button } from '../../../elements/button';

const AddClients = ({ formik }) => {
  const { handleSubmit, handleChange, values, touched, errors } = formik;
  console.log(errors, 'the errors ==================>');
  return (
    <Drawer>
      <Container>
        <Form sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <Box mt={20}>
            <FormControl fullWidth sx={{ m: 4 }} variant="filled">
              <InputLabel htmlFor="filled-adornment-amount">Name</InputLabel>
              <FilledInput
                id="filled-adornment-amount"
                value={values.name}
                onChange={handleChange}
                error={touched.name && Boolean(errors.name)}
                startAdornment={
                  <InputAdornment position="start"></InputAdornment>
                }
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 4 }} variant="filled">
              <InputLabel htmlFor="filled-adornment-amount">Email</InputLabel>
              <FilledInput
                id="filled-adornment-amount"
                value={values.email}
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                startAdornment={
                  <InputAdornment position="start"></InputAdornment>
                }
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 4 }} variant="filled">
              <InputLabel htmlFor="filled-adornment-amount">Address</InputLabel>
              <FilledInput
                id="filled-adornment-amount"
                value={values.address}
                onChange={handleChange}
                error={touched.address && Boolean(errors.address)}
                startAdornment={
                  <InputAdornment position="start"></InputAdornment>
                }
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 4 }} variant="filled">
              <InputLabel htmlFor="filled-adornment-amount">
                telephone
              </InputLabel>
              <FilledInput
                id="filled-adornment-amount"
                value={values.telephone}
                onChange={handleChange}
                error={touched.telephone && Boolean(errors.telephone)}
                startAdornment={
                  <InputAdornment position="start"></InputAdornment>
                }
              />
            </FormControl>

            <Box>
              <Stack direction="row" gap={2} ml={4}>
                <Button type="submit" variant="outlined" color="primary">
                  Save
                </Button>
                <Button type="submit" variant="outlined" color="secondary">
                  Close
                </Button>
              </Stack>
            </Box>
          </Box>
        </Form>
      </Container>
    </Drawer>
  );
};

export default AddClients;
