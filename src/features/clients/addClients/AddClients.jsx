import { Formik } from 'formik';
import { object, string } from 'yup';

import ClientsForm from '../../../components/ClientsForm/ClientsForm';
import MiniDrawer from '../../../layout/drawer/drawer';
import { addClients } from '../clientsActions/client.actions';
import { useDispatch } from 'react-redux';

const AddClients = () => {
  const dispatch = useDispatch();
  const addClientActionCreator = addClients();

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
    <MiniDrawer>
      <Formik
        initialValues={defaultValues}
        onSubmit={handleSubmit}
        validationSchema={yupObject}
      >
        {(formik) => <ClientsForm formik={formik} />}
      </Formik>
    </MiniDrawer>
  );
};

export default AddClients;
