import { Container, Grid, Stack, Typography } from '@mui/material';
import { Form } from 'formik';
import { Link } from 'react-router-dom';

import { Button } from '../../elements/button';
import { TextField } from '../../elements/textfield';
import { COLORS } from '../../style/theme';

const FormLink = ({ login }) => {
  const message = login ? "Don't have an account?" : 'Already have an account?';
  return (
    <Stack
      direction="row"
      alignItems="center"
      width="100%"
      justifyContent="center"
      mt={4}
    >
      <Typography>{message}</Typography>
      <Link to={login ? '/register' : '/login'}>
        <Typography sx={{ color: `${COLORS.BLUE}` }}>
          &nbsp;{login ? 'Register' : 'Login'}
        </Typography>
      </Link>
    </Stack>
  );
};

const RegistrationForm = ({ formik, login }) => {
  const { handleSubmit, handleChange, values, touched, errors } = formik;
  return (
    <Container component="main" px={14}>
      <Form sx={{ mt: 1 }} onSubmit={handleSubmit}>
        <h1>
          {login ? (
            <Stack spacing={1} alignItems="flex-start" ml={12}>
              <Typography
                variant="h5"
                sx={{ fontFamily: 'italic', fontSize: '24px' }}
              >
                <strong>Login</strong>
              </Typography>
            </Stack>
          ) : (
            <Stack direction="row" spacing={1} alignItems="flex-start" ml={10}>
              <Typography variant="h1" spacing={1}>
                Create an account
              </Typography>
            </Stack>
          )}
        </h1>
        <Grid container spacing={login ? 15 : 8} px={8} mt={login ? -4 : 3}>
          {!login && (
            <Grid item xs={12}>
              <TextField
                placeholder="Enter Username"
                name="username"
                fullWidth
                id="username"
                value={values.username}
                onChange={handleChange}
                error={touched.username && Boolean(errors.username)}
                helperText={touched.username && errors.username}
                variant="standard"
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
              variant="standard"
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
              variant="standard"
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
              <Button type="submit" variant="text" fullWidth>
                {' '}
                {login ? 'Login' : 'Create an account'}
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Form>
      <FormLink login={login} />
    </Container>
  );
};

export default RegistrationForm;
