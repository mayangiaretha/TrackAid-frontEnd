import MiniDrawer from '../../../layout/drawer/drawer';
import Invoice from './invoice';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAnInvoice } from '../invoiceActions/invoice.action';

const ViewInvoice = () => {
  const { invoiceId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnInvoice(invoiceId));
  }, []);
  const foundInvoice = useSelector((state) => state?.invoices.invoice.invoice);

  return (
    <MiniDrawer>
      {foundInvoice === undefined ? (
        <div>loading...</div>
      ) : (
        <Invoice foundInvoice={foundInvoice} />
      )}
    </MiniDrawer>
  );
};

export default ViewInvoice;
