import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { Form } from 'formik';
import { Link } from 'react-router-dom';

import { StyledButton } from './RegistrationForm.styles';
import { TextField } from '../../elements/textfield';
import { COLORS } from '../../style/theme';

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
          {login ? (
            <Stack
              sx={{ position: 'absolute', top: '250px', right: '750px' }}
              spacing={1}
            >
              <Typography
                variant="h5"
                sx={{ fontFamily: 'italic', fontSize: '24px' }}
              >
                <strong>Sign in</strong>
              </Typography>
              <Stack direction="row">
                <Typography variant="caption">
                  New User?{' '}
                  <Link to="/register">
                    <Box sx={{ color: `${COLORS.BLUE}` }} component="span">
                      Create an account
                    </Box>
                  </Link>
                </Typography>
              </Stack>
            </Stack>
          ) : (
            <Stack>
              <Typography variant="h4">Create an account</Typography>
            </Stack>
          )}
        </h1>
        <Grid container>
          {!login && (
            <Grid item xs={12}>
              <TextField
                placeholder="Enter First Name"
                name="username"
                fullWidth
                id="username"
                value={values.username}
                onChange={handleChange}
                error={touched.username && Boolean(errors.username)}
                helperText={touched.username && errors.username}
              />
            </Grid>
          )}
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
              <StyledButton type="submit" variant="text" fullWidth>
                {' '}
                Submit{' '}
              </StyledButton>
            </Stack>
          </Grid>
        </Grid>
      </Form>
    </Container>
  );
};

export default RegistrationForm;
