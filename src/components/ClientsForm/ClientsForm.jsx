import { Form } from 'formik';
import {Link} from 'react-router-dom'
import { Box, Grid, Stack } from '@mui/material';
import { TextField } from '../../elements/textfield';
import { Button } from '../../elements/button';
import { StyledContainer } from '../../elements/Containers/Containers.styles';

const ClientsForm = ({ formik }) => {
  const { handleSubmit, values, handleChange, touched, errors } = formik;
  return (
    <StyledContainer customHeight='60vh'>
      <Form id="clientsForm" onSubmit={handleSubmit}>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <TextField
              placeholder="Enter client name"
              name="name"
              fullWidth
              variant="filled"
              value={values.name}
              onChange={handleChange}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Enter client address"
              name="address"
              fullWidth
              variant="filled"
              value={values.address}
              onChange={handleChange}
              error={touched.address && Boolean(errors.address)}
              helperText={touched.address && errors.address}
            />
          </Grid>

          <Grid item xs={6}>
            <Box mt={7}>
              <Stack direction="row" gap={2} ml={4}>
                <Button type="submit" variant="outlined" color="primary">
                  Save
                </Button>
                <Link to="/clients">
                  <Button  variant="outlined" color="secondary">
                    Close
                  </Button>
                </Link>

              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Form>
    </StyledContainer>
  );
};

export default ClientsForm;
