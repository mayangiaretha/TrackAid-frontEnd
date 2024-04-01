import { useState, useEffect } from 'react';

import { Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import RegistrationForm from '../../../components/RegstrationForm/RegistrationForm';
import {
  StyledContainer,
  StyledFormContainer,
} from '../../../elements/Containers/Containers.styles';
import { loginUser } from '../authActions/auth.actions';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector((state) => state?.authentication);
  const [error, setError] = useState('');

  useEffect(() => {
    if (authState.error) {
      setError(authState.error);
    }
    if (authState.isAuthenticated) {
      navigate('/');
    }
  }, [authState]);

  const defaultValues = {
    email: '',
    password: '',
  };

  const yupObject = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const handleSubmit = (values) => {
    const { email, password } = values;

    const loginData = {
      email,
      password,
    };
    dispatch(loginUser(loginData));
  };

  return (
    <StyledContainer maxWidth="1200px">
      {error.length > 0 && <div className="error">{error}</div>}
      <StyledFormContainer>
        <Formik
          initialValues={defaultValues}
          validationSchema={yupObject}
          onSubmit={handleSubmit}
        >
          {(formik) => <RegistrationForm formik={formik} login={true} />}
        </Formik>
      </StyledFormContainer>
    </StyledContainer>
  );
};

export default Login;
