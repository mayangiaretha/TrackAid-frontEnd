import { instance } from '../../../config/client';
import {
  addInvoiceAction,
  getAnInvoiceAction,
  getInvoicesAction,
  invoiceActionFailed,
} from './invoice.types';

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
  try {
    const res = await instance.post('invoices', data);
    dispatch(addInvoiceAction(res.data));
  } catch (err) {
    dispatch(invoiceActionFailed(err.response.data));
  }
};

export const getAnInvoice = (invoiceId) => (dispatch) => {
  instance
    .get(`invoices/${invoiceId}`)
    .then((res) => {
      dispatch(getAnInvoiceAction(res.data));
    })
    .catch((err) => {
      dispatch(invoiceActionFailed(err.response.data));
    });
};
