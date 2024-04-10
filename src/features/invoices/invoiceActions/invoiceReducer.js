import { invoiceActionTypes } from './invoice.types';
export const initialState = {
  invoices: [],
  invoice: {},
  error: '',
  delete: false,
};
const invoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case invoiceActionTypes.GET_ALL_INVOICES:
      return {
        ...state,
        invoices: action.payload,
        invoice: {},
        error: {},
        delete: false,
      };

    case invoiceActionTypes.GET_INVOICE:
      return {
        ...state,
        invoices: [],
        invoice: action.payload,
        error: {},
        delete: false,
      };
    case invoiceActionTypes.ADD_AN_INVOICE:
      return {
        ...state,
        invoices: [],
        invoice: action.payload,
        error: {},
        delete: false,
      };
    case invoiceActionTypes.DELETE_AN_INVOICE:
      return {
        ...state,
        delete: true,
      };
    case invoiceActionTypes.INVOICE_REQUEST_FAILED:
      return {
        ...state,
        invoices: [],
        invoice: {},
        error: action.payload,
        delete: false,
      };
    default:
      return state;
  }
};

export default invoiceReducer;
