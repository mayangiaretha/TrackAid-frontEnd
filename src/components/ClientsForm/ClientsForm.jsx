import { Form } from 'formik';
import { Link } from 'react-router-dom';
import { Box, Grid, Stack } from '@mui/material';
import { TextField } from '../../elements/textfield';
import { Button } from '../../elements/button';
import { StyledContainer } from '../../elements/Containers/Containers.styles';

const ClientsForm = ({ formik }) => {
  const { handleSubmit, values, handleChange, touched, errors } = formik;

  return (
    <StyledContainer height="60vh">
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
          <Grid item xs={12}>
            <TextField
              placeholder="Enter client telephone"
              name="telephone"
              fullWidth
              variant="filled"
              value={values.telephone}
              onChange={handleChange}
              error={touched.telephone && Boolean(errors.telephone)}
              helperText={touched.telephone && errors.telephone}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Enter client email"
              name="email"
              fullWidth
              variant="filled"
              value={values.email}
              onChange={handleChange}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
          </Grid>

          <Grid item xs={6}>
            <Box mt={7}>
              <Stack direction="row" gap={2} ml={4}>
                <Button type="submit" variant="outlined" color="primary">
                  Save
                </Button>
                <Link to="/clients">
                  <Button variant="outlined" color="secondary">
                    Back
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
