export const invoiceActionTypes = {
  GET_ALL_INVOICES: 'GET_ALL_INVOICES',
  GET_INVOICE: 'GET_INVOICE',
  ADD_AN_INVOICE: 'ADD_AN_INVOICE',
  EDIT_AN_INVOICE: 'EDIT_AN_INVOICE',
  DELETE_AN_INVOICE: 'DELETE_AN_INVOICE',
  INVOICE_REQUEST_FAILED: 'INVOICE_REQUEST_FAILED',
};

export const getInvoicesAction = (payload) => ({
  type: invoiceActionTypes.GET_ALL_INVOICES,
  payload,
});

export const getAClientAction = (payload) => ({
  type: invoiceActionTypes.GET_INVOICE,
  payload,
});

export const addInvoiceAction = (payload) => ({
  type: invoiceActionTypes.ADD_AN_INVOICE,
  payload,
});

export const editInvoiceAction = (payload) => ({
  type: invoiceActionTypes.EDIT_AN_INVOICE,
  payload,
});

export const deleteInvoiceAction = (payload) => ({
  type: invoiceActionTypes.DELETE_AN_INVOICE,
  payload,
});

export const invoiceActionFailed = (payload) => ({
  type: invoiceActionTypes.INVOICE_REQUEST_FAILED,
  payload,
});
