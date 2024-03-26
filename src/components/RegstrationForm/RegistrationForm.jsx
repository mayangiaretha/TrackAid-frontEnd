import { Container, Grid, Stack } from '@mui/material';
import { Form } from 'formik';

import { StyledButton } from './RegistrationForm.styles';
import { TextField} from "../../elements/textfield";

const RegistrationForm = ({ formik, login }) => {
  const { handleSubmit, handleChange, values, touched, errors } = formik;
  return (
    <Container component="main">
      <Form sx={{ mt: 3 }} onSubmit={handleSubmit}>
        <h1
          style={{
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {login ? 'Sign in' : 'Create an account'}
        </h1>
        {!login && (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                placeholder="Enter First Name"
                name="firstname"
                fullWidth
                id="firstname"
                value={values.username}
                onChange={handleChange}
                error={touched.username && Boolean(errors.username)}
                helperText={touched.username && errors.username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                name="email"
                autoComplete="email"
                placeholder="Enter Email"
                value={values.email}
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="password"
                type="password"
                id="password"
                placeholder="Enter Password"
                autoComplete="new-password"
                onChange={handleChange}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <Stack
                direction={'row'}
                gap={5}
                justifyContent={'center'}
                alignContent={'center'}
                mt={8}
                mx={4}
              >
                <StyledButton variant="contained" fullWidth>
                  Back
                </StyledButton>
                <StyledButton type="submit" variant="contained" fullWidth>
                  {' '}
                  Submit{' '}
                </StyledButton>
              </Stack>
            </Grid>
          </Grid>
        )}
      </Form>
    </Container>
  );
};

export default RegistrationForm;
