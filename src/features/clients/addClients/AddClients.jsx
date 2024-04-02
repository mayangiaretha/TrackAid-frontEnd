import { Formik } from 'formik';
import { object, string } from 'yup';

import ClientsForm from '../../../components/ClientsForm/ClientsForm';
import MiniDrawer from '../../../layout/drawer/drawer';
import { addClients } from '../clientsActions/client.actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Alert, Box } from '@mui/material';

const AddClients = () => {
  const dispatch = useDispatch();
  const addClientsState = useSelector((state) => state?.clients);
  const [error, setError] = useState('');

  const addClientActionCreator = addClients();

  useEffect(() => {
    if (addClientsState.error) {
      setError(addClientsState.error);
    }
  }, [addClientsState]);

  const defaultValues = {
    name: '',
    address: '',
    email: '',
    telephone: '',
  };

  const yupObject = object({
    name: string().required('name is required'),
    address: string().required('address is required'),
    email: string().email().required('email is required'),
    telephone: string().required('telephone is required'),
  });

  const handleSubmit = (values) => {
    const { name, address, telephone, email } = values;
    const addClientData = {
      name,
      email,
      address,
      telephone,
    };
    dispatch(addClientActionCreator(addClientData));
  };

  return (
    <Box sx={{ border: '2px solid grey' }}>
      {error.length > 0 && (
        <Alert severity="error">This is an error Alert.</Alert>
      )}
      <MiniDrawer>
        <Formik
          initialValues={defaultValues}
          onSubmit={handleSubmit}
          validationSchema={yupObject}
        >
          {(formik) => <ClientsForm formik={formik} />}
        </Formik>
      </MiniDrawer>
    </Box>
  );
};

export default AddClients;
