import { useEffect, useState } from 'react';
import { InvoicesDataGrid } from './invoiceDataGrid';
import { getAllInvoices } from '../invoiceActions/invoice.action';
import { useDispatch, useSelector } from 'react-redux';

const ViewInvoices = () => {
  const [allInvoices, setAllInvoices] = useState([]);
  const dispatch = useDispatch();
  const invoices = useSelector((state) => state?.invoices.invoices);

  useEffect(() => {
    dispatch(getAllInvoices());
  }, []);

  useEffect(() => {
    if (invoices.length > 0) {
      const cleanedInvoices = invoices.map(
        ({ invoiceId, name, address, email, status, telephone }) => ({
          id: invoiceId,
          name,
          address,
          telephone,
          email,
          invoiceStatus: status,
        }),
      );
      setAllInvoices(cleanedInvoices);
    }
  }, [invoices]);

  return <InvoicesDataGrid getInvoices={allInvoices} />;
};

export default ViewInvoices;
