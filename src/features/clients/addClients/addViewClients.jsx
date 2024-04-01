import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addClients } from '../../actions/clientsActions/client.actions';
import { Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import {
  StyledContainer,
  StyledFormContainer,
} from '../../../components/RegstrationForm/RegistrationForm.styles';
import { Formik } from 'formik';

import AddClients from './addClients';

const AddViewClients = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addClientsState = useSelector((state) => state?.clients);
  const [error, setError] = useState('');

  useEffect(() => {
    if (addClientsState.error) {
      setError(addClientsState.error);
    }
    if (addClientsState.clients) {
      navigate('/');
    }
  }, [addClientsState]);

  const defaultValues = {
    name: '',
    email: '',
    Address: '',
    telephone: '',
  };

  const yupObject = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    Address: Yup.string().required(),
    telephone: Yup.string().required(),
  });
  const handleSubmit = (values) => {
    const { name, email, Address, telephone } = values;

    const addClientsData = {
      name,
      email,
      Address,
      telephone,
    };
    dispatch(addClients(addClientsData));
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
          {(formik) => <AddClients formik={formik} />}
        </Formik>
      </StyledFormContainer>
    </StyledContainer>
  );
};

export default AddViewClients;
