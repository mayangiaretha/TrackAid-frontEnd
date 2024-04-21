import { instance } from '../../../config/client';
import { getInvoicesAction, invoiceActionFailed } from './invoice.types';
export const getAllInvoices = () => (dispatch) => {
  instance
    .get('invoices')
    .then((res) => {
      dispatch(getInvoicesAction(res.data));
    })
    .catch((err) => {
      dispatch(invoiceActionFailed(err.response.data));
    });
};

export const addInvoices = (data) => async (dispatch) => {
  console.log(data, 'the invoice data =================>');
  // try {
  //   const res = await instance.post('invoices', addInvoicesData);
  //   dispatch(addInvoiceData)(res.data);
  // } catch (err) {
  //   dispatch(invoiceActionFailed(err.response.data));
  // }
};
