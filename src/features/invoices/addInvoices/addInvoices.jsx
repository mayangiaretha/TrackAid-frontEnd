import MiniDrawer from '../../../layout/drawer/drawer';
import InvoiceForm from '../../../components/invoiceForm/invoiceForm';
import { useDispatch } from 'react-redux';
import { object, string } from 'yup';
import { addInvoices } from '../invoiceActions/invoice.action';
import { Formik } from 'formik';

const AddInvoices = () => {
  const dispatch = useDispatch;
  const addInvoiceActionCreator = addInvoices();

  const defaultValues = {
    name: '',
    email: '',
    telephone: '',
    invoiceId: '',
    address: '',
    items: [],
    amount: 0,
    dueDate: '',
    status: '',
  };
  const yupObject = object({
    name: string().required('name is required'),
    address: string().required('address is required'),
    email: string().email().required('email is required'),
    telephone: string().required('telephone is required'),
    // dueDate: string(),
    // status: string(),
    // amount: number()
    //   .required('Amount is required')
    //   .min(0, 'Amount must be greater than or equal to 0'),
    // items: array()
    //   .of(itemSchema)
    //   .required('Items are required')
    //   .min(1, 'At least one item is required'),
  });
  const handleSubmit = (values) => {
    console.log(values, 'the values ===========>');
    // const { name, address, telephone, email } = values;
    //
    // const data = {
    //   name,
    //   email,
    //   address,
    //   telephone,
    // };
    // dispatch(addInvoices(data));
  };
  return (
    <MiniDrawer>
      <Formik
        initialValues={defaultValues}
        onSubmit={handleSubmit}
        validationSchema={yupObject}
      >
        {(formik) => <InvoiceForm formik={formik} />}
      </Formik>
    </MiniDrawer>
  );
};

export default AddInvoices;
