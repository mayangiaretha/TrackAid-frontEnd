import { useEffect } from 'react';
import { Formik } from 'formik';
import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getClient, editClient } from '../clientsActions/client.actions';
import MiniDrawer from '../../../layout/drawer/drawer';
import ClientsForm from '../../../components/ClientsForm/ClientsForm';

const EditClients = () => {
  const { clientId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClient(clientId));
  }, []);

  const client = useSelector((state) => state?.clients.client.client);

  console.log(client, 'the client ============>');

  const defaultValues = {
    name: client ? client.name : '',
    address: client ? client.address : '',
    email: client ? client.email : '',
    telephone: client ? client.telephone : '',
  };

  const yupObject = object({
    name: string().required('name is required'),
    address: string().required('address is required'),
    email: string().email().required('email is required'),
    telephone: string().required('telephone is required'),
  });

  const handleSubmit = (values) => {
    const { name, address, telephone, email } = values;
    const editClientData = {
      name,
      email,
      address,
      telephone,
    };
    dispatch(editClient(editClientData, clientId));
  };

  return (
    <MiniDrawer>
      <Formik
        initialValues={defaultValues}
        onSubmit={handleSubmit}
        validationSchema={yupObject}
        enableReinitialize
      >
        {(formik) => <ClientsForm formik={formik} />}
      </Formik>
    </MiniDrawer>
  );
};

export default EditClients;
