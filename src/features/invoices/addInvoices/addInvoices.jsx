import MiniDrawer from '../../../layout/drawer/drawer';
import InvoiceForm from '../../../components/invoiceForm/invoiceForm';
import { useDispatch, useSelector } from 'react-redux';
import { number, object, string, array } from 'yup';
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

  console.log(countInvoices, 'the invoices =====>');

  const defaultValues = {
    invoiceNo: countInvoices,
    name: '',
    email: '',
    telephone: '',
    address: '',
    items: [
      {
        product: '',
        description: '',
        unitPrice: 0,
        total: 0,
        quantity: 0,
      },
    ],
    total: 0,
    dueDate: '',
    status: '',
    bankName: '',
    accountNo: '',
    accountName: '',
    subtotal: 0,
    tax: 0,
  };

  const itemSchema = object().shape({
    product: string().required('Product is required'),
    description: string().required('Description is required'),
    unitPrice: number().required('Unit price is required'),
    total: number().required('Total is required'),
    quantity: number().required('Quantity is required'),
  });

  const yupObject = object({
    name: string().required('name is required'),
    invoiceNo: number().required('invoice is required'),
    items: array()
      .of(itemSchema)
      .required('Items are required')
      .min(1, 'At least one item is required'),
    address: string().required('address is required'),
    email: string().email().required('email is required'),
    telephone: string().required('telephone is required'),
    dueDate: string().required('dueDate is required'),
    total: number()
      .required('Amount is required')
      .min(0, 'Amount must be greater than or equal to 0'),
  });
  const handleSubmit = async (values) => {
    await dispatch(addInvoices(values));
    await dispatch(getAllInvoices());
  };

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
