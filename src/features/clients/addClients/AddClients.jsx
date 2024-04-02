import { Formik } from 'formik';
import { object, string } from 'yup';

import ClientsForm from '../../../components/ClientsForm/ClientsForm';
import MiniDrawer from '../../../layout/drawer/drawer';

const AddClients = () => {
  const defaultValues = { name: '', address: '' };

  const yupObject = object({
    name: string().required('name is required'),
    address: string().required('address is required'),
  });

  const handleSubmit = (values) => {
    const { name, address } = values;
    console.log(address, 'address', name, 'the name ===============>');
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
