import { useState, useEffect } from 'react';

import { Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';

import RegForm from './regForm/regForm';
import { registerUser } from '../actions/auth.actions';

const Registration = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state?.authentication);
  const [error, setError] = useState('');

  useEffect(() => {
    if (authState.error) {
      setError(authState.error);
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
    <div className="container">
      {error.length > 0 && <div className="error">{error}</div>}
      <div className="form-container">
        <Formik
          initialValues={defaultValues}
          validationSchema={yupObject}
          onSubmit={handleSubmit}
        >
          {(formik) => <RegForm formik={formik} />}
        </Formik>
      </div>
    </div>
  );
};

export default Registration;
