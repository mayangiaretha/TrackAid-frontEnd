import { useState, useEffect } from 'react';

import { Alert } from '@mui/material';
import { Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import RegistrationForm from '../../../components/RegstrationForm/RegistrationForm';
import {
  StyledContainer,
  StyledFormContainer,
} from '../../../elements/Containers/Containers.styles';
import { registerUser } from '../authActions/auth.actions';

const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state?.authentication);
  const [error, setError] = useState('');

  useEffect(() => {
    if (authState.error) {
      setError(authState.error);
    }
    if (authState.isAuthenticated) {
      navigate('/clients');
    }
  }, [authState]);

  const defaultValues = {
    username: '',
    email: '',
    password: '',
  };

  const yupObject = Yup.object({
    username: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const handleSubmit = (values) => {
    const { email, password, username } = values;

    const registrationData = {
      email,
      password,
      username,
    };
    dispatch(registerUser(registrationData));
  };

  return (
    <StyledContainer maxWidth="1200px">
      {error.length > 0 && (
        <Alert severity="error">This is an error Alert.</Alert>
      )}
      <StyledFormContainer>
        <Formik
          initialValues={defaultValues}
          validationSchema={yupObject}
          onSubmit={handleSubmit}
        >
          {(formik) => <RegistrationForm formik={formik} login={false} />}
        </Formik>
      </StyledFormContainer>
    </StyledContainer>
  );
};

export default Registration;
