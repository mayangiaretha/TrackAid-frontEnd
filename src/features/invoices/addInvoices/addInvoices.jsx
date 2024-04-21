import MiniDrawer from '../../../layout/drawer/drawer';
import InvoiceForm from '../../../components/invoiceForm/invoiceForm';
import { useDispatch, useSelector } from 'react-redux';
import { number, object, string } from 'yup';
import { addInvoices, getAllInvoices } from '../invoiceActions/invoice.action';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';

const AddInvoices = () => {
  const [countInvoices, setCountInvoices] = useState(0);
  const dispatch = useDispatch();
  const invoices = useSelector((state) => state?.invoices.invoices);

  useEffect(() => {
    dispatch(getAllInvoices());
  }, []);

  useEffect(() => {
    setCountInvoices(invoices.length + 1);
  }, [invoices]);

  const defaultValues = {
    invoiceNo: countInvoices,
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
    invoiceNo: number().required('invoice is required'),
    // address: string().required('address is required'),
    // email: string().email().required('email is required'),
    // telephone: string().required('telephone is required'),
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
  const handleSubmit = async (values) => {
    const { name, address, telephone, email, invoiceNo } = values;

    const data = {
      name,
      email,
      address,
      telephone,
      invoiceNo,
    };
    await dispatch(addInvoices(data));
  };
  console.log(defaultValues, 'the values default ============>');
  return (
    <MiniDrawer>
      <Formik
        initialValues={defaultValues}
        onSubmit={handleSubmit}
        validationSchema={yupObject}
        enableReinitialize
      >
        {(formik) => <InvoiceForm formik={formik} />}
      </Formik>
    </MiniDrawer>
  );
};

export default AddInvoices;
